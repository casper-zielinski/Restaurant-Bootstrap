/**
 * Playwright screenshot helper for UI development.
 * Usage: node scripts/screenshot.mjs [url] [outputPath]
 *
 * Default URL: http://localhost:3000
 * Screenshots are saved to: frontend/screenshots/
 */

import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, '..', 'screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const outputName = process.argv[3] || `screenshot_${Date.now()}.png`;
const outputPath = path.join(screenshotDir, outputName);

await mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
});
const page = await context.newPage();

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log(outputPath);
} catch (err) {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
} finally {
  await browser.close();
}
