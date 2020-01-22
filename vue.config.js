/*
 * @Author: JieLinghu
 * @Date: 2020-01-17 14:38:06
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-20 11:56:23
 * @description: 
 */
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/css/common.scss";`
            }
        }
    },
}