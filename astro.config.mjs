import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages user site (repository SRS014.github.io) serves from the root of https://srs014.github.io.
// If the site is published from a project repository instead, set `base: "/<repo-name>"`.
export default defineConfig({
  site: "https://srs014.github.io",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
});
