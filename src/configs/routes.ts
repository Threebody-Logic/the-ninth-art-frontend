export default [
  {
    name: '主页',
    path: '/',
    component: 'Index',
  },
  {
    name: '游戏',
    path: '/game',
    component: 'Game',
  },
  {
    name: '游戏详情',
    path: '/game/detail',
    hideInMenu: true,
    component: 'GameDetail'
  },
  {
    name: '新闻',
    path: '/news',
    component: 'News'
  },
  {
    name: '关于我们',
    path: '/about',
    component: 'AboutUs'
  },
  {
     path: '/user',
     hideInMenu: true,
     headerRender: false,
     routes: [
       {
         name: '用户登录',
         path: '/user/login',
         component: 'User/login',
       },
       {
         name: '用户注册',
         path: '/user/register',
         component: 'User/register',
       },
     ],
   },
];