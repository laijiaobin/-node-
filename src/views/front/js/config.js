
var projectName = '基于node的高校社团迎新平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '社团简介',
	url: './pages/shetuanjianjie/list.html'
}, 
{
	name: '社团纳新',
	url: './pages/shetuannaxin/list.html'
}, 
{
	name: '社团活动',
	url: './pages/shetuanhuodong/list.html'
}, 
{
	name: '新生爆照',
	url: './pages/xinshengbaozhao/list.html'
}, 
{
	name: '新生攻略',
	url: './pages/xinshenggonglve/list.html'
}, 

{
	name: '校园论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '系统公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/nodejsi2pjk/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"社长","menuJump":"列表","tableName":"shezhang"}],"menu":"社长管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除","查看评论"],"menu":"社团纳新","menuJump":"列表","tableName":"shetuannaxin"}],"menu":"社团纳新管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"社团简介","menuJump":"列表","tableName":"shetuanjianjie"}],"menu":"社团简介管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除","查看评论"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"入团申请","menuJump":"列表","tableName":"rutuanshenqing"}],"menu":"入团申请管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"新生攻略","menuJump":"列表","tableName":"xinshenggonglve"}],"menu":"新生攻略管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"社团论坛","tableName":"forum"}],"menu":"社团论坛"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","入团申请","查看评论"],"menu":"社团纳新列表","menuJump":"列表","tableName":"shetuannaxin"}],"menu":"社团纳新模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"社团简介列表","menuJump":"列表","tableName":"shetuanjianjie"}],"menu":"社团简介模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","报名","查看评论"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论"],"menu":"新生攻略列表","menuJump":"列表","tableName":"xinshenggonglve"}],"menu":"新生攻略模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"入团申请","menuJump":"列表","tableName":"rutuanshenqing"}],"menu":"入团申请管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","入团申请","查看评论"],"menu":"社团纳新列表","menuJump":"列表","tableName":"shetuannaxin"}],"menu":"社团纳新模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"社团简介列表","menuJump":"列表","tableName":"shetuanjianjie"}],"menu":"社团简介模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","报名","查看评论"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论"],"menu":"新生攻略列表","menuJump":"列表","tableName":"xinshenggonglve"}],"menu":"新生攻略模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除","查看评论"],"menu":"社团纳新","menuJump":"列表","tableName":"shetuannaxin"}],"menu":"社团纳新管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"社团简介","menuJump":"列表","tableName":"shetuanjianjie"}],"menu":"社团简介管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除","查看评论"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除","审核"],"menu":"入团申请","menuJump":"列表","tableName":"rutuanshenqing"}],"menu":"入团申请管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除","审核"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","入团申请","查看评论"],"menu":"社团纳新列表","menuJump":"列表","tableName":"shetuannaxin"}],"menu":"社团纳新模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"社团简介列表","menuJump":"列表","tableName":"shetuanjianjie"}],"menu":"社团简介模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","报名","查看评论"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论"],"menu":"新生攻略列表","menuJump":"列表","tableName":"xinshenggonglve"}],"menu":"新生攻略模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"社长","tableName":"shezhang"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
