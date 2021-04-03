import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home,
  },
  {
    path:'/customer',
    name:'User',
    component: () => import('../views/user/User.vue')
  },
  {
    path:'/service',
    name:'Provider',
    component: () => import('../views/serviceProvider/Provider.vue')
  },
  {
    path:'/:userType/login',
    name:'Login',
    component:()=> import('../views/Login.vue')
  },
  {
    path:'/:userType/register',
    name:'Signup',
    component:()=> import('../views/Signup.vue')
  },
  {
    path:'/service/timeslot',
    name:'TimeSlot',
    component:()=> import('../views/serviceProvider/TimeSlot.vue')
  },
  {
    path:'/service/bookings',
    name:'Bookings',
    component:()=> import('../views/serviceProvider/Bookings.vue')
  },
  {
    path:'/service/profile',
    name:'Profile',
    component:()=> import('../views/serviceProvider/Bookings.vue')
  },
  {
    path:'/customer/book_laundry',
    name:'BookLaundry',
    component:()=> import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
