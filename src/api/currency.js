/*
 * @Author: JieLinghu
 * @Date: 2020-01-20 10:04:30
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 10:44:20
 * @description: 
 */

import request from '@/utils/request'

export let getCurrencyListApi = (data) => {
    return request({
        url: "/currency/list",
        method: "get",
        params: data
    })
}

