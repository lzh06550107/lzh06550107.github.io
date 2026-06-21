import type { StarlightRouteData } from '@astrojs/starlight/route-data';

type SidebarEntries = StarlightRouteData['sidebar'];
type SidebarEntry = SidebarEntries[number];
type PaginationData = StarlightRouteData['pagination'];
type SidebarLikeEntry = {
    type?: string;
    href?: string;
    link?: string;
    label?: string;
    entries?: SidebarLikeEntry[];
    items?: SidebarLikeEntry[];
};

function normalizePathname(pathname: string): string {
    if (!pathname.startsWith('/')) {
        return `/${pathname}`;
    }

    return pathname;
}

function getChildEntries(entry: SidebarLikeEntry): SidebarLikeEntry[] {
    if (Array.isArray(entry.entries)) {
        return entry.entries;
    }

    if (Array.isArray(entry.items)) {
        return entry.items;
    }

    return [];
}

function getEntryHref(entry: SidebarLikeEntry): string | null {
    if (typeof entry.href === 'string') {
        return entry.href;
    }

    if (typeof entry.link === 'string') {
        return entry.link;
    }

    return null;
}

function collectBasePathsFromEntries(
    entries: SidebarLikeEntry[],
    basePaths = new Set<string>()
): Set<string> {
    for (const entry of entries) {
        const href = getEntryHref(entry);

        if (href) {
            const [firstSegment] = href.split('/').filter(Boolean);

            if (firstSegment) {
                basePaths.add(`/${firstSegment}/`);
            }

            continue;
        }

        const childEntries = getChildEntries(entry);

        if (childEntries.length > 0) {
            collectBasePathsFromEntries(childEntries, basePaths);
        }
    }

    return basePaths;
}

export function getDocsetBasePath(pathname: string, sidebar: SidebarEntries): string | null {
    const normalizedPath = normalizePathname(pathname);
    const basePaths = [...collectBasePathsFromEntries(sidebar)];

    const directMatch = basePaths.find((basePath) => normalizedPath.startsWith(basePath));

    if (directMatch) {
        return directMatch;
    }

    const segments = normalizedPath.split('/').filter(Boolean);

    for (const segment of segments) {
        const candidate = `/${segment}/`;

        if (basePaths.includes(candidate)) {
            return candidate;
        }
    }

    return null;
}

function filterEntriesByPrefix(entries: SidebarEntries, docsetBasePath: string): SidebarEntries {
    const filteredEntries: SidebarEntry[] = [];

    for (const entry of entries) {
        const href = getEntryHref(entry);

        if (href) {
            if (href.startsWith(docsetBasePath)) {
                filteredEntries.push(entry);
            }

            continue;
        }

        const childEntries = filterEntriesByPrefix(getChildEntries(entry) as SidebarEntries, docsetBasePath);

        if (childEntries.length > 0) {
            filteredEntries.push({
                ...entry,
                entries: childEntries,
            });
        }
    }

    return filteredEntries;
}

export function filterSidebarEntriesForPath(
    sidebar: SidebarEntries,
    currentPath: string
): SidebarEntries {
    const docsetBasePath = getDocsetBasePath(currentPath, sidebar);

    if (!docsetBasePath) {
        return sidebar;
    }

    const filteredEntries = filterEntriesByPrefix(sidebar, docsetBasePath);

    return filteredEntries.length > 0 ? filteredEntries : sidebar;
}

export function filterPaginationForPath(pagination: PaginationData, currentPath: string): PaginationData {
    const sidebarEntries = [
        ...(pagination.prev ? [{ type: 'link' as const, href: pagination.prev.href, label: pagination.prev.label }] : []),
        ...(pagination.next ? [{ type: 'link' as const, href: pagination.next.href, label: pagination.next.label }] : []),
    ];
    const docsetBasePath = getDocsetBasePath(currentPath, sidebarEntries);

    if (!docsetBasePath) {
        return pagination;
    }

    const prev = pagination.prev?.href.startsWith(docsetBasePath) ? pagination.prev : undefined;
    const next = pagination.next?.href.startsWith(docsetBasePath) ? pagination.next : undefined;

    return { prev, next };
}
