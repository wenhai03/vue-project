export default [
  {
    path: 'userStatistics',
    name: 'userStatistics',
    meta: {auth: 'userStatistics'},
    component: () => import(/* webpackChunkName: "userStatistics" */ '@/views/Manager/userStatistics'),
    
  },
  {
    path: 'userAuth',
    name: 'userAuth',
    meta: {auth: 'userAuth'},
    component: () => import(/* webpackChunkName: "userAuth" */ '@/views/Manager/userAuth'),
    
  },
  {
    path: 'articleManager',
    name: 'articleManager',
    meta: {auth: 'articleManager'},
    component: () => import(/* webpackChunkName: "articleManager" */ '@/views/Manager/articleManager'),
    
  },
  {
    path: 'infoPublish',
    name: 'infoPublish',
    meta: {auth: 'infoPublish'},
    component: () => import(/* webpackChunkName: "infoPublish manage" */ '@/views/Manager/infoPublish'),
    
  },
  {
    path: 'myArticle',
    name: 'myArticle',
    meta: {auth: 'myArticle'},
    component: () => import(/* webpackChunkName: "myArticle" */ '@/views/Manager/myArticle'),
    
  },
  {
    path: 'myCollection',
    name: 'myCollection',
    meta: {auth: 'myCollection'},
    component: () => import(/* webpackChunkName: "myCollection" */ '@/views/Manager/myCollection'),
    
  },
  {
    path: 'personal',
    name: 'personal',
    meta: {auth: 'personal'},
    component: () => import(/* webpackChunkName: "personal" */ '@/views/Manager/personal'),
    
  },
  {
    path: 'privateMessage',
    name: 'privateMessage',
    meta: {auth: 'privateMessage'},
    component: () => import(/* webpackChunkName: "privateMessage" */ '@/views/Manager/privateMessage'),
    
  }
]
