/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-20 14:55:15
 * @description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'view-design/dist/styles/iview.css';
import "@/assets/iconfont/iconfont.css";

import { Row, Col, List, ListItem, ListItemMeta, Page, Breadcrumb, BreadcrumbItem } from 'view-design';
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('List', List);
Vue.component('ListItem', ListItem);
Vue.component('ListItemMeta', ListItemMeta);
Vue.component('Page', Page);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
