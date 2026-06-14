import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://xiaoyugan.github.io",
  base: "/",
  integrations: [
    vue({ appEntrypoint: "/src/pages/_app" }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      wrap: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {},
      },
    },
  },
})
