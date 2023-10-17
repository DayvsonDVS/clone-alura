// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Clone aluraL'
    }
  },
  modules: ['nuxt-svgo'],
  css: ['normalize.css', '@/assets/scss/main.scss', '@/assets/scss/vars.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  },

  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages/'
  }
})
