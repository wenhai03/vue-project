export default [
  {
    path: 'userStatistics',
    name: 'userStatistics',
    meta: {auth: 'userStatistics'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/userStatistics'),
    
  },
  {
    path: 'userAuth',
    name: 'userAuth',
    meta: {auth: 'userAuth'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/userAuth'),
    
  },
  {
    path: 'articleManager',
    name: 'articleManager',
    meta: {auth: 'articleManager'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/articleManager'),
    
  },
  {
    path: 'infoPublish',
    name: 'infoPublish',
    meta: {auth: 'infoPublish'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/infoPublish'),
    
  },
  {
    path: 'myArticle',
    name: 'myArticle',
    meta: {auth: 'myArticle'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/myArticle'),
    
  },
  {
    path: 'myCollection',
    name: 'myCollection',
    meta: {auth: 'myCollection'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/myCollection'),
    
  },
  {
    path: 'personal',
    name: 'personal',
    meta: {auth: 'personal'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/personal'),
    
  },
  {
    path: 'privateMessage',
    name: 'privateMessage',
    meta: {auth: 'privateMessage'},
    component: () => import(/* webpackChunkName: "article manage" */ '../views/Manager/privateMessage'),
    
  }
]
