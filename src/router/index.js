import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '../views/Register'
import Login from '../views/Login'
import RegAgreement from '../views/RegAgreement'
import OutscropPsd from '../views/OutscropPsd'
import Index from '../views/Index'
import Mall from '../views/Mall'
import News from '../views/News'
import Cart from '../views/Cart'
import My from '../views/My'
import Splash from '../views/Splash'
import Order from '../views/Order'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/',
      redirect:'/splash',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/splash',
      name: 'splash',
      component:Splash
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regAgreement',
      name: 'regAgreement',
      component: RegAgreement,
    },
    {
      path: '/outscropPsd',
      name: 'outscropPsd',
      component: OutscropPsd,
    },
    {
      path: '/index',
      redirect:'/mall',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/mall',
          name: 'mall',
          component:Mall,
        },
        {
          path: '/news',
          name: 'news',
          component:News,
        },
        {
          path: '/my',
          name: 'my',
          component:My,
        },
        {
          path: '/cart',
          name: 'cart',
          component:Cart,
        }
      ]
    },
    {
      path:'/sort',
      redirect:'/brand',
      name:'sort',
      component:()=>import('@/views/Sort'),
      children:[
        {
          path:'/series',
          name:'series',
          component:()=>import('@/views/Series'),
        },
        {
          path:'/size',
          name:'size',
          component:()=>import('@/views/Size'),
        },
        {
          path:'/price',
          name:'price',
          component:()=>import('@/views/Price'),
        },
        {
          path:'/brand',
          name:'brand',
          component:()=>import('@/views/Brand'),
        },
      ]
    },
    {
      path:'/searchlist',
      name:'searchlist',
      component:()=>import('@/views/SearchList'),
    },
    {
      // path:'/productdetails/:id',
      path:'/productdetails/:id',
      name:'productdetails',
      component:()=>import('@/views/ProductDetails')
    },
    {
      path:'/personinfo',
      name:'personinfo',
      component:()=>import('@/views/PersonInfo'),
    },
    {
      path:'/collection',
      name:'collection',
      component:()=>import('@/views/Collection'),
    },
    {
      path:'/address/:id',
      name:'address',
      component:()=>import('@/views/Address'),
    },
    {
      path:'/attention',
      name:'attention',
      component:()=>import('@/views/Attention'),
    },
    {
      path:'/comment',
      name:'comment',
      component:()=>import('@/views/Comment'),
    },
    {
      path:'/fan',
      name:'fan',
      component:()=>import('@/views/Fan'),
    },
    {
      path:'/friends',
      name:'friends',
      component:()=>import('@/views/Friends'),
    },
    {
      path:'/message',
      redirect:'/logistics',
      name:'message',
      component:()=>import('@/views/Message'),
      children:[
        { 
          path: '/logistics',
          name:'logistics',
          component:()=>import('@/views/Logistics') 
        },
        { 
          path: '/myxx',
          name:'myxx',
          component:()=>import('@/views/Myxx') 
        },
        { 
          path: '/myyhj',
          name:'myyhj',
          component:()=>import('@/views/Myyhj') 
        },
      ]
    },
    {
      path:'/post',
      name:'post',
      component:()=>import('@/views/Post'),
    },
    {
      path:'/addaddress',
      name:'addaddress',
      component:()=>import('@/views/AddAddress'),
    },
    {
      path:'/pendingpay',
      name:'pendingpay',
      component:()=>import('@/views/Pendingpay'),
    },
    {
      path:'/pendingreceipt',
      name:'pendingreceipt',
      component:()=>import('@/views/PendingReceipt'),
    },
    {
      path:'/pendingcommen',
      name:'pendingcommen',
      component:()=>import('@/views/PendingCommen'),
    },
    {
      path:'/aftersales',
      name:'aftersales',
      component:()=>import('@/views/AfterSales'),
    },
    {
      path:'/mycoupon',
      name:'mycoupon',
      component:()=>import('@/views/MyCoupon'),
    },
    {
      path:'/myscores',
      name:'myscores',
      component:()=>import('@/views/MyScores'),
    },
    {
      path:'/site',
      name:'site',
      component:()=>import('@/views/Site'),
    },
    {
      path:'/aboutwe',
      name:'aboutwe',
      component:()=>import('@/views/AboutWe'),
    },
    {
      path:'/opinion',
      name:'opinion',
      component:()=>import('@/views/Opinion'),
    },
    {
      path:'/version',
      name:'version',
      component:()=>import('@/views/Version')
    },
    {
      path:'/modifyaddress/:id',
      name:'modifyaddress',
      component:()=>import('@/views/ModifyAddress')
    }
  ]
})
