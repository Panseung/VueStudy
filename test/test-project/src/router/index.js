import Vue from 'vue'
import Router from 'vue-router'
import HomeTest from '../components/HomeTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeTest',
      component: HomeTest
    },
    {
      path: '/convention',
      name: 'convention',
      component: () => import ('../components/MyConvention')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../components/MyComputed')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import ('../components/MyWatch')
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import ('../components/MyPromise')
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: () => import ('../components/MyMixins')
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: () => import ('../components/MyVfor')
    },
    {
      path: '/arrow',
      name: 'arrow',
      component: () => import ('../components/MyArrow'),
    },
    {
      path: '/props',
      name: 'props',
      component: () => import ('../components/MyProps')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import ('../components/MySlot')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import ('../components/MyDirectives')
    },
    {
      path: '/specialAttributes',
      name: 'specialAttributes',
      component: () => import ('../components/MySpecialAttributes')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import ('../components/MyLifecycle')
    },
    {
      path: '/letvar',
      name: 'letvar',
      component: () => import ('../components/MyLetVar')
    },
    {
      path: '/curring',
      name: 'curring',
      component: () => import ('../components/MyCurring')
    },
    {
      path: '/router',
      name: 'router',
      component: () => import ('../components/MyRouter')
    },
    {
      path: '/routerProps',
      name: 'routerProps',
      // props: ( route ) => {
      //   return { 
      //     myStartDate: route.params.startDate || new Date().getTime().toString(),
      //     myEndDate: route.params.endDate || new Date().getTime().toString()
      //   }
      // },
      props: true,
      component: () => import ('../components/MyVueRouterProps')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import ('../components/MyVuex')
    }
  ]
})
