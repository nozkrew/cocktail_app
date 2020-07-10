import Vue from 'vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import Index from './views/Index.vue'
import Random from './views/Random.vue'
import DrinkView from './views/DrinkView.vue'
import NonAlcoholicDrink from './views/NonAlcoholicDrink.vue'
import ByIngredientView from './views/ByIngredientView.vue'
import ByCategoryView from './views/ByCategoryView.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

//FontAwesome
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

const routes = [
  { path:'/', component: Index, name: 'Index' },
  { path:'/random', component: Random, name: 'Random' },
  { path:'/drink/:id(\\d+)', component: DrinkView, name: 'DrinkView' },
  { path:'/nonalcoholic', component: NonAlcoholicDrink, name: 'NonAlcoholicDrink' },
  { path:'/byingredient/:ingredient', component: ByIngredientView, name: 'ByIngredientView' },
  { path:'/bycategory/:category', component: ByCategoryView, name: 'ByCategoryView' },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
