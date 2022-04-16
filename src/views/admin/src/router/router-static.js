import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import shetuanjianjie from '@/views/modules/shetuanjianjie/list'
    import shetuannaxin from '@/views/modules/shetuannaxin/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import discussshetuannaxin from '@/views/modules/discussshetuannaxin/list'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import discussxinshenggonglve from '@/views/modules/discussxinshenggonglve/list'
    import discusshuodongbaoming from '@/views/modules/discusshuodongbaoming/list'
    import shezhang from '@/views/modules/shezhang/list'
    import forum from '@/views/modules/forum/list'
    import rutuanshenqing from '@/views/modules/rutuanshenqing/list'
    import discussshetuanhuodong from '@/views/modules/discussshetuanhuodong/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import xinshenggonglve from '@/views/modules/xinshenggonglve/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/shetuanjianjie',
        name: '社团简介',
        component: shetuanjianjie
      }
      ,{
	path: '/shetuannaxin',
        name: '社团纳新',
        component: shetuannaxin
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/discussshetuannaxin',
        name: '社团纳新评论',
        component: discussshetuannaxin
      }
      ,{
	path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
      ,{
	path: '/discussxinshenggonglve',
        name: '新生攻略评论',
        component: discussxinshenggonglve
      }
      ,{
	path: '/discusshuodongbaoming',
        name: '活动报名评论',
        component: discusshuodongbaoming
      }
      ,{
	path: '/shezhang',
        name: '社长',
        component: shezhang
      }
      ,{
	path: '/forum',
        name: '社团论坛',
        component: forum
      }
      ,{
	path: '/rutuanshenqing',
        name: '入团申请',
        component: rutuanshenqing
      }
      ,{
	path: '/discussshetuanhuodong',
        name: '社团活动评论',
        component: discussshetuanhuodong
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/xinshenggonglve',
        name: '新生攻略',
        component: xinshenggonglve
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
