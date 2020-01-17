/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 15:41:28
 * @description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/iconfont/iconfont.css"


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
