export default [{
  path: '/manager',
  component: () => import(/* webpackChunkName: "article post" */ '../views/Manager/index.vue'),
  meta: {
    needLogin: true
  }
}]
