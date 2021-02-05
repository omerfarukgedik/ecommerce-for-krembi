export default {
  head: {
    title: 'krembi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "/styles/bootstrap-grid.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/styles/normalize.css" },
      { rel: "stylesheet", type: "text/css", href: "/styles/global.css" }
    ],
  },
  loading: '~/components/LoadingBar.vue',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios'],
  axios: { baseURL: 'https://gorest.co.in/public-api' },
  build: {},
}
