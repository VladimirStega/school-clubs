import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/1',
      name: 'LEARN-AND-DISCOVER',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page1View.vue')
    },
    {
      path: '/2',
      name: 'BE-DARY-AND-DISCOVER',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page2View.vue')
    },
    {
      path: '/3',
      name: 'FIND-YOUR-CALLING',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page3View.vue')
    },
    {
      path: '/4',
      name: 'CREATE-AND-INSPIRE',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page4View.vue')
    },
    {
      path: '/5',
      name: 'GOOD-CREATE',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page5View.vue')
    },
    {
      path: '/6',
      name: 'SERVE-THE-FATHERLAND',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page6View.vue')
    },
    {
      path: '/7',
      name: 'ACHIEVE-AND-WIN',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page7View.vue')
    },
    {
      path: '/8',
      name: 'BE-HEALTHY',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page8View.vue')
    },
    {
      path: '/9',
      name: 'TELL-US-ABOUT-THE-MAIN-THINGS',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page9View.vue')
    },
    {
      path: '/10',
      name: 'BE-AWARE-OF-FRIENDS',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page10View.vue')
    },
    {
      path: '/11',
      name: 'TAKE CARE OF THE PLANET',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page11View.vue')
    },
    {
      path: '/12',
      name: 'DISCOVER-THE-COUNTRY',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page12View.vue')
    },
    {
      path: '/unost',
      name: 'unost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClubUnostView.vue')
    },
    {
      path: '/vmeste',
      name: 'vmeste',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClubVmesteView.vue')
    },
    {
      path: '/solnechnii',
      name: 'solnechnii',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClubSolnechniiView.vue')
    },
    {
      path: '/mediacentr',
      name: 'mediacentr',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClubMediacentrView.vue')
    },
    {
      path: '/sozvezdie',
      name: 'sozvezdie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClubSozvezdieView.vue')
    }
    
  ]
})

export default router
