import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'fa'
    },
    theme: {
      themes: {
        pink: {
          primary: colors.pink.lighten2,
          secondary: colors.pink.lighten4,
          accent: colors.indigo.base
        }
      }
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
