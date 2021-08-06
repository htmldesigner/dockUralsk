import ru from './locales/ru.json'
import kz from './locales/kz.json'
export default {
  server: {
    port: 8501 // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'docksUralsk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: '~/components/LoadingBar.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~sass/main.sass",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/crumbsBuilder.plugin.js"},
    {src: "~/plugins/ncaLayer.plugin.js"},
    {src: "~/plugins/leaflet.js", ssr: false},
    {src: "~/plugins/crypto.js", ssr: false},
    {src: "~/plugins/vee-validate.js"},
    {src: "~/plugins/v-mask.js", ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/auth-next',
  ],

  auth: {
    redirect: false,
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/signin', method: 'post'},
          logout: { url: '/api/logout', method: 'post'},
          user: { url: '/api/user', method: 'get', propertyName: ''}
        }
      }
    }
  },

  i18n: {
    locales: ['kz', 'ru'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {kz, ru}
    }
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: 'http://zkoegov.web-design.kz'
  },
  proxy: {'/api': 'http://zkoegov.web-design.kz'},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },




  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    extend (config, ctx) {
      config.performance.maxAssetSize = 700000
    }
  }
}
