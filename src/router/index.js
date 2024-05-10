import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' // import ได้ 2 แบบ <- แบบที่ 1

Vue.use(VueRouter)

const routes = [
  {
    path: '/', //กำหนด path
    name: 'home', // ประกาศ name space
    component: HomeView // 
  },
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue') // import ได้ 2 แบบ <- แบบที่ 2
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue') // import ได้ 2 แบบ <- แบบที่ 2
      }
    ]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
