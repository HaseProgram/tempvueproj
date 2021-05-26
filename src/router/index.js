import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import PageDashboard from '../components/PageDashboard'
 
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'Dashboard',
      component: PageDashboard
    },
    {
      path: '/about*',
      name: 'About',
      component: HelloWorld
    },
    {
      path: '/404',
      name: 'NotFound',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})
 
const getTitleByRouteName = routeName => {
  return {
    'Dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
  }[routeName]
}
 
router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})
 
export default router
