import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adm',
    name: 'adm',
    component: () => import('../views/Adm.vue')
    // import('@/views/Adm.vue')
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import('../views/Survey/Survey.vue')
  },
  {
    path: '/survey/surveyInfo/:id',
    name: 'surveyInfo',
    component: () => import('../views/Survey/SurveyInfo.vue'),
    props: true
  },
  {
    path: '/surveyList',
    name: 'surveyList',
    component: () => import('../views/Survey/SurveyList.vue'),
    children: [
      {path: '/surveyList/surveyEdit/:id', name: 'surveyEdit', component: () => import('../views/Survey/SurveyEdit.vue'), props: true}
    ]
  },
  {
    path: '/words',
    name: 'words',
    component: () => import('../views/Words/Words.vue')
  },
  {
    path: '/words/wordsList/:id',
    name: 'wordsList',
    component: () => import('../views/Words/WordsList.vue'),
    props: true
  },
  {
    path: '/words/wordsDetail/:id',
    name: 'wordsDetail',
    component: () => import('../views/Words/WordsDetail.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // hash
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active', // 현재 선택된 라우터에다가 active 라는 클래스를 붙인다
  routes
})

export default router
