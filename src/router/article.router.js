export default [{
  path: '/post',
  component: () => import(/* webpackChunkName: "article post" */ '../views/Article/post.vue'),
  meta: {
    needLogin: true
  }
}]
