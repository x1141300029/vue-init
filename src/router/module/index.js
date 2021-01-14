export default [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('../../components/HelloWorld.vue')
    },{
      path:'/hello',
      name:'hello',
      component:()=>import('../../components/index.vue')
    }
  ]