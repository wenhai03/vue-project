export default [{
  path: '/manager',
  component: () => import(/* webpackChunkName: "manager" */ '../views/Manager/index.vue'),
}]
