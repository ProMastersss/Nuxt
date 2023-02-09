import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
// Add vuetify 3 https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html
export default defineNuxtConfig({
  runtimeConfig: {
    token: "123",
    public: {
      token: "",
      serverHost: "http://localhost:8080",
    },
  },
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "Nuxt app",
      meta: [{ name: "description", content: "Nuxt tutorial base features" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "@/assets/scss/common.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(
          vuetify({
            styles: "sass",
          })
        );
      });
    },
  ],
});
