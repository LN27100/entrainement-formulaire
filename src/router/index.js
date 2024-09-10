import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormulaireTest from '../views/FormulaireTest.vue'
import DescriptionForm from '../views/DescriptionForm.vue'
import FormulaireSimple from '../views/FormulaireSimple.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: HomeView
  },
  {
    path: '/form',
    name: 'FormulaireTest',
    component: FormulaireTest
  },
  {
    path: '/descript',
    name: 'DescriptionForm',
    component: DescriptionForm
  },
  {
    path: '/formSimple',
    name: 'FormulaireSimple',
    component: FormulaireSimple
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
