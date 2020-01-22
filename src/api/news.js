/*
 * @Author: JieLinghu
 * @Date: 2020-01-19 10:58:39
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 10:02:15
 * @description: 
 */
import request from '@/utils/request'

export let getCoinHelpListApi = (data) => {
    return request({
        url: '/article/list_by_menue',
        method: 'post',
        data
    })
}

//获取轮播图
export let getBannerListApi = (data) => {
    return request({
        url: '/banner/list',
        method: 'post',
        data
    })
}

// 获取轮播旁精选/TOPS
export let getSpecialArticleListApi = (data) => {
    return request({
        url: '/article/special/list',
        method: 'post',
        data
    })
}

// 获取新闻列表
export let getNewsListApi = (data) => {
    return request({
        url: '/article/list_by_menue',
        method: 'post',
        data
    })
}
// 获取政策轮播旁精选
export let getFeaturedPolicyApi = (data) => {
    return request({
        url: '/special_topic/is_select_list',
        method: 'get',
        params: data
    })
}
// 获取最新政策新闻
export let getPolicyNewsApi = (data) => {
    return request({
        url: "/special_topic/news_list",
        method: 'get',
        params: data
    })
}
// 获取国内外政策专题
export let getThematicListApi = (data) => {
    return request({
        url: "/special_topic/list",
        method: 'get',
        params: data
    })
}

// 获取侧栏精选/热门政策
export let getAsideThematicApi = (data) => {
    return request({
        url: "/article/list_by_menue",
        method: 'post',
        data
    })
}

// 获取专题详情列
export let getThematicDetailApi = (data) => {
    return request({
        url: "/special_topic/special_topic_info",
        method: "get",
        params: data
    })
}




