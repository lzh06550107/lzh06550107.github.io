import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const adaptiveDocPath = path.join(docsRoot, 'src', 'content', 'docs', 'scrapling', 'parsing', 'adaptive.mdx');

test('adaptive scrapling doc avoids invalid closing br tags that break MDX parsing', () => {
    assert.equal(fs.existsSync(adaptiveDocPath), true, 'expected adaptive.mdx to exist');

    const adaptiveDocSource = fs.readFileSync(adaptiveDocPath, 'utf8');
    assert.doesNotMatch(adaptiveDocSource, /<\/br>/i);
});
