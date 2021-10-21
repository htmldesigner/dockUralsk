import ru from './locales/ru.json'
import kz from './locales/kz.json'

export default {
  server: {
    port: 8502 // prod: 8501
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'doc.uralsk.kz',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon16x16.png'}
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
    {src: "~/plugins/ncaLayer.plugin.js", mode: 'client', ssr: false},
    {src: "~/plugins/leaflet.js", mode: 'client', ssr: false},
    {src: "~/plugins/crypto.js", mode: 'client', ssr: false},
    {src: "~/plugins/vee-validate.js", mode: 'client', ssr: false},
    {src: "~/plugins/v-mask.js", mode: 'client', ssr: false},
    {src: "~/plugins/esriGeocoder.js", mode: 'client', ssr: false},
    {src: '~/plugins/vue-datepicker', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['ru']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/auth-next',
    '@nuxtjs/robots'
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

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
          login: {url: '/api/signin', method: 'post'},
          logout: {url: '/api/logout', method: 'post'},
          user: {url: '/api/user', method: 'get', propertyName: ''}
        },
        redirect: {
          login: '/',
          logout: '/',
        }
      }
    }
  },

  i18n: {
    locales: ['kz', 'ru'],
    defaultLocale: 'kz',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {kz, ru}
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // baseURL: process.env.NODE_ENV = 'https://zkoegov.web-design.kz/system'
    prefix: '/'
  },

  proxy: {'/api': process.env.NODE_ENV = 'https://zkoegov.web-design.kz/system'},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: "doc.uralsk.kz",
      short_name: "doc.uralsk.kz",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      icon: {
        fileName: 'icon.png',
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate"],
    extend(config, ctx) {
      config.performance.maxAssetSize = 800000
    }
  }
}
