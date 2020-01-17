/*
 * @Author: JieLinghu
 * @Date: 2020-01-17 14:38:06
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 15:02:28
 * @description: 
 */
module.exports = {
    css: {
        loaderOptions: {
        // pass options to sass-loader
        sass: {
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.scss`
          prependData: `@import "@/assets/css/common.scss";`
        }
      }
    },
  }