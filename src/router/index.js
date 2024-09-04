import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormulaireTest from '../views/FormulaireTest.vue'
import NoticeForm from '../views/NoticeForm.vue'

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
    path: '/notice',
    name: 'NoticeForm',
    component: NoticeForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
