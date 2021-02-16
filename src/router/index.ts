import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeFront from "@/views/front-office/HomeFront.vue";
import ProductListFront from "@/views/front-office/ProductListFront.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomeFront',
    component: HomeFront
  },
  {
    path: '/list-product',
    name: 'ProductListFront',
    component: ProductListFront
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
