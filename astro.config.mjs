
import { defineConfig } from 'astro/config';

// Integrations & Adapters
import tailwindcss from '@tailwindcss/vite'; // Using Tailwind via Vite plugin
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  // REQUIRED: Set the final deployment URL root domain for GitHub Pages
  site: `https://coveragenepal.github.io`,

  // REQUIRED: Set the base path for the project repository deployment
  base: `/blog`,

  // Vite configuration (including Tailwind)
  vite: {
    plugins: [tailwindcss()],
  },

  // Markdown configuration
  markdown: {
    // Set drafts to false for production builds (recommended)
    drafts: false,
    shikiConfig: {
      // Your syntax highlighting theme
      theme: "css-variables",
      // Enable line wrapping
      wrap: true,
    }
  },

  // Astro integrations array
  integrations: [
    sitemap(),      // Sitemap generation
    mdx(),          // MDX support
  ]
});