import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user'

const AppHome = () => import('@/views/Home.vue')
const AppAbout = () => import('@/views/About.vue')
const AppManage = () => import('@/views/Manage.vue')
const AppSong = () => import('@/views/Song.vue')

const routes = [
  {
    name: 'home',
    path: '/',
    component: AppHome
  },
  {
    name: 'about',
    path: '/about',
    component: AppAbout
  },
  {
    name: 'manage',
    path: '/manage',
    component: AppManage,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'song',
    path: '/song/:id',
    component: AppSong
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  //console.log(to.meta)

  if (!to.meta.requiresAuth) {
    next()

    return
  }

  const store = useUserStore()

  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
