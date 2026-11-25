import { defineConfig } from "astro/config";

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow. Locally, and on a
// custom domain, the site is served from the root.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://tesseraapps.com",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "always",
});
