/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 16:59:02
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 12:00:26
 * @description: 
 */
import request from '@/utils/request'

export default {
    // 登录-注册
    login(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    },
    // 获取用户信息
    getUserInfo() {
        return request({
            url: '/userinfo',
            method: 'get'
        })
    },
    getCountryCode(data) {
        return request({
            url: '/code/msg_code',
            method: 'get',
            params:data
        })
    }
}