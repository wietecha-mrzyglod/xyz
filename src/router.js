import Vue from 'vue'
import Router from 'vue-router'
import Recipes from './components/Recipes.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'przepisy',
      component: Recipes
    },
    {
      path: '/contact',
      name: 'kontakt',
      component: Contact
    }
  ]
})
