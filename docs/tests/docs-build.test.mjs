import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsPackagePath = path.join(process.cwd(), 'docs', 'package.json');

test('docs build forces a full Astro content cache refresh', () => {
    const docsPackage = JSON.parse(fs.readFileSync(docsPackagePath, 'utf8'));

    assert.equal(
        docsPackage.scripts.build,
        'astro build --force',
        'expected docs build to force-refresh Astro content caches after content file renames'
    );
});
