import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const playerPath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'custom',
    'MusicPlayer.astro'
);

test('music player remembers a manual pause across page navigation within the same session', () => {
    assert.equal(fs.existsSync(playerPath), true, 'expected MusicPlayer.astro to exist');

    const playerSource = fs.readFileSync(playerPath, 'utf8');

    assert.match(playerSource, /const AUTOPLAY_PREFERENCE_KEY = 'music-player-autoplay-preference';/);
    assert.match(playerSource, /sessionStorage\.setItem\(AUTOPLAY_PREFERENCE_KEY,\s*'disabled'\);/);
    assert.match(playerSource, /sessionStorage\.setItem\(AUTOPLAY_PREFERENCE_KEY,\s*'enabled'\);/);
    assert.match(playerSource, /if \(root && root\.dataset\.autoplay === 'true' && shouldAutoplayInSession\(\)\)/);
    assert.match(playerSource, /if \(autoplay && !isPlaying && shouldAutoplayInSession\(\)\)/);
});
