/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 16:51:53
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:30:28
 * @description: 
 */
import request from '@/utils/request'

// 获取顶部涨跌
export let getWebTopDataApi = (data) => {
    return request({
        url: "/web/top/data",
        method: "get",
        params: data
    })
}
//获取主菜单
export let getMenuListApi = (data) => {
    return request({
        url: '/home/menue/list',
        method: 'post',
        data
    })
}
//获取首页头部币种走势
export let getTopCurrencyDataApi = (data) => {
    return request({
        url: "/index/top/currency/data",
        method: "get",
        params: data
    })
}

// 获取首页新闻列表
export let getHomeArticleListApi = (data) => {
    return request({
        url: '/article/home/list',
        method: 'get',
        params:data
    })
}

// 获取首页快讯
export let getFastNewsListApi = (data) => {
    return request({
        url: '/news_flash/list',
        method: "post",
        data
    })
}
// 获取热门标签
export let getLabelListApi = (data) => {
    return request({
        url: '/label/list',
        method: "post",
        data
    })
}

