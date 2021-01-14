import Vue from 'vue'
import Router from 'vue-router'
import module from './module'
Vue.use(Router)
const router =new Router({
  routes: module
})

router.beforeEach((to,from,next)=>{
  // 在次可做拦截处理
})
router.afterEach(()=>{
  // 
})
export default router;
