// Makes public/og.png, the image shown when the site is shared on social media.
// Run with the preview server up: `npm run preview`, then `npm run og`.
// Uses Playwright; install it with `npx playwright install chromium` if needed.
const { chromium } = await import(process.env.PLAYWRIGHT_PATH ?? "playwright");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
await page.addStyleTag({ content: ".header{display:none}.hero{padding-top:70px}.hero__lead,.hero .btn-row{display:none}.mosaic{margin-top:40px}" });
await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible")));
await page.waitForTimeout(1500);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("Saved public/og.png");
