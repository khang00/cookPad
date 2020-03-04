import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'fa'
    },
    theme: {
      dark: false // From 2.0 You have to select the theme dark or light here
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
