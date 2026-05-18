import type { StarlightRouteData } from '@astrojs/starlight/route-data';

type SidebarEntries = StarlightRouteData['sidebar'];
type SidebarEntry = SidebarEntries[number];
type PaginationData = StarlightRouteData['pagination'];

export function getDocsetBasePath(pathname: string): string | null {
    const [firstSegment] = pathname.split('/').filter(Boolean);

    if (!firstSegment) {
        return null;
    }

    return `/${firstSegment}/`;
}

function filterEntriesByPrefix(entries: SidebarEntries, docsetBasePath: string): SidebarEntries {
    const filteredEntries: SidebarEntry[] = [];

    for (const entry of entries) {
        if (entry.type === 'link') {
            if (entry.href.startsWith(docsetBasePath)) {
                filteredEntries.push(entry);
            }

            continue;
        }

        const childEntries = filterEntriesByPrefix(entry.entries, docsetBasePath);

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
    const docsetBasePath = getDocsetBasePath(currentPath);

    if (!docsetBasePath) {
        return sidebar;
    }

    const filteredEntries = filterEntriesByPrefix(sidebar, docsetBasePath);

    return filteredEntries.length > 0 ? filteredEntries : sidebar;
}

export function filterPaginationForPath(pagination: PaginationData, currentPath: string): PaginationData {
    const docsetBasePath = getDocsetBasePath(currentPath);

    if (!docsetBasePath) {
        return pagination;
    }

    const prev = pagination.prev?.href.startsWith(docsetBasePath) ? pagination.prev : undefined;
    const next = pagination.next?.href.startsWith(docsetBasePath) ? pagination.next : undefined;

    return { prev, next };
}
