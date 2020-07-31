const { resolve } = require('path');

module.exports = {
  mode: 'universal',
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
  /*
   ** Headers of the page
   */
  head: {
    title: 'HytteNett — Fagprøve',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', id: 'favicon', href: process.env.NODE_ENV !== 'development' ? '/favicon/favicon-xl.png' : '/LH-favicon-xl.png' },
      { rel: 'icon', type: 'image/x-icon', id: 'favicon', href: process.env.NODE_ENV !== 'development' ? '/favicon/favicon.svg' : '/LH-favicon-xl.png' },
      // { rel: 'icon', type: 'image/x-icon', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' }
    ]
  },
  /*
   ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
  */
  css: [
    {
      src: '~assets/scss/import.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/helpers',
    '~/plugins/vue-lodash',
    '~/plugins/what-input'
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'

  ],

  styleResources: {
    scss: [
      'assets/scss/import.scss'
    ]
  },

  axios: {
    // proxyHeaders: false
    proxy: true
  },
  webfontloader: {
    google: {
      families: ['Roboto:400,500,700']
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
};
