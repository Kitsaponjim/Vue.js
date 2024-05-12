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
      },
      {
        path: '/me2',
        name: 'me2',
        component: () => import('../views/Me2.vue') // import ได้ 2 แบบ <- แบบที่ 2
      },
      {
        path: '/me3',
        name: 'me3',
        component: () => import('../views/Me3.vue')
      },
  
    ]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
