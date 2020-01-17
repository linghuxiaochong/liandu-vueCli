/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 16:51:53
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 16:07:21
 * @description: 
 */
import request from '@/utils/request'

// 获取头部涨跌
export let getWebTopData = (data) => {
    return request({
        url: "/web/top/data",
        method: "get",
        params: data
    })
}
//获取主菜单
export let getMenuList = (data) => {
    return request({
        url: '/home/menue/list',
        method: 'post',
        params: data
    })
}