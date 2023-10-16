// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  // css: ['assets/other.css'],
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},

    // Use 'first' and 'last' literals to make Tailwind CSS 
    // first or last respectively. First position has the 
    // lowest priority, last position overrides everything 
    // and hence has the highest priority.
    injectPosition: 'first',
    // viewer: true,
  }
})