/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:55:39
 * @description: 
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../views/Default.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Default,
        children: [
            {
                path: "/",
                component: () => import('../components/home')
            },
            {
                path: "/industryNews",
                component: () => import('../components/industryNews')
            },
            {
                path: "/miningNews",
                component: () => import('../components/miningNews'),
                children: [
                    {
                        path: "/",
                        component: () => import("../components/miningNews/news")
                    },
                    {
                        path: "coinEarnings",
                        component: () => import("../components/miningNews/coinEarnings")
                    },
                    {
                        path: "coinMinerList",
                        component: () => import("../components/miningNews/coinMinerList")
                    },
                    {
                        path: "takeCoinHelp",
                        component: () => import("../components/miningNews/takeCoinHelp")
                    },
                    {
                        path: "coinMinerEvaluating",
                        component: () => import("../components/miningNews/coinMinerEvaluating")
                    },
                ]
            },
            {
                path: "/specialTopic",
                component: () => import('../components/specialTopic'),
                children: [
                    {
                        path: "/",
                        component: () => import("../components/specialTopic/news")
                    },
                    {
                        path: "domestic",
                        component: () => import("../components/specialTopic/domestic")
                    },
                    {
                        path: "foreign",
                        component: () => import("../components/specialTopic/foreign")
                    },
                    {
                        path: "detail/:id",
                        component: () => import("../components/specialTopic/ThematicDetail.vue")
                    }

                ]
            },
            {
                path: "/industryCharacter",
                component: () => import('../components/industryCharacter')
            },
            {
                path: "/blockChainApplication",
                component: () => import('../components/blockChainApplication')
            },
            {
                path: "/college",
                component: () => import('../components/college'),
                children: [
                    {
                        path: "/",
                        component: () => import("../components/college/tutorial")
                    },
                    {
                        path: "library",
                        component: () => import("../components/college/library")
                    },
                    {
                        path: "phrase",
                        component: () => import("../components/college/phrase")
                    },
                ]
            },
            {
                path: "/searchResult",
                component: () => import('../components/searchResult')
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Login.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
