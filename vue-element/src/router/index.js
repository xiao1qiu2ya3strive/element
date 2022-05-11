import Vue from 'vue'
// import VueRouter from './config/routes'
import Router from 'vue-router'
import Layout from '../layout/LayOut.vue'
import guide from '@/components/GuidE'
import assembly from '@/components/AssemblY'
import theme from '@/components/ThemE'
import resources from '@/components/ResourceS'

Vue.use(Router)



export const constantRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/views',
    name: 'View',
    component: Layout,
    children:[
      {
        path:'aside/Journal',
        name:'journal',
        // redirect:'aside/Journal',
        component:()=>import('@/views/aside/Journal'),
        meta:{title:'路由嵌套'}
      },    
    ]
  },
  {
    path: '/DeveloperGuide',
    name: 'DeveloperGuide',
    component: Layout,
    children:[
      {
        path:'Install',
        name:'install',
        component:()=>import('@/views/DeveloperGuide/Install'),
        meta:{title:''}
      },
      {
        path:'Started',
        name:'started',
        component:()=>import('@/views/DeveloperGuide/Started'),
        meta:{title:''}
      },
      {
        path:'CustomTheme',
        name:'theme',
        component:()=>import('@/views/DeveloperGuide/CustomTheme'),
        meta:{title:''}
      },
      {
        path:'OverAnimation',
        name:'animation',
        component:()=>import('@/views/DeveloperGuide/OverAnimation'),
        meta:{title:''}
      },
      {
        path:'International',
        name:'international',
        component:()=>import('@/views/DeveloperGuide/International'),
        meta:{title:''}
      },

    ]
  },

  
  {
    path: '/',
    name: 'guide',
    component: guide,
    // meta:{requiresAuth:true}
  },
  {
    path: '/',
    name: 'assembly',
    component: assembly,
    // meta:{requiresAuth:false}
  },
  {
    path: '/',
    name: 'theme',
    component: theme,
    // meta:{requiresAuth:false}
  },
  {
    path: '/',
    name: 'resources',
    component: resources,
    // meta:{requiresAuth:falsse}
  },


]


export const asyncRoutes = [
  

]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
