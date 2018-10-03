import Vue from 'vue'
import Router from 'vue-router'
import Przepisy from './components/Przepisy.vue'
import Kontakt from './components/Kontakt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'przepisy',
      component: Przepisy
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt
    }
  ]
})
