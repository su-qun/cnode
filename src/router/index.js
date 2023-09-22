
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
    // 登录
    {
        path:'/404',
        component: () => import('../views/not-found/NotFound.vue'),
    },
    {
        path: '/login',
        component: () => import('../views/Login/LoginUser.vue'),
    },
    //首页
    {
        path: '/',
        component: () => import('../views/Home/HomeView.vue'),
        children: [
            // 列表 全部 默认展示
            {
                path: '',
                component: () => import('../views/Home/TopicList.vue'),
            },
            {
                path: 'topic/:id',
                name: 'topic',
                component: () => import('../views/Home/topic/TopicList.vue')
            },
            {
                path: 'user/:loginname',
                name:'user',
                component: () => import('../views/center/UserCenter.vue')
            },
            {
                path: '/:type',
                component: () => import('../views/Home/TopicList.vue'),
            }
        ]
    },
    // 404
    {
        path:'/*',
        redirect:'/404'
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

const $message = Vue.prototype.$message
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    // if (to.path != '/login') {
    //     if (token) {
    //         next()
    //     } else {
    //         $message({
    //             message: '没有登录，请登录',
    //             type: 'warning'
    //         })
    //         next('/login')
    //     }
    // }
    // else {
    //     next()
    // }
    if (token || to.path === '/login') {
        next()
    } else {
        $message({
            message: '没有登录，请登录',
            type: 'warning'
        })
        next('/login')
    }
})

export default router