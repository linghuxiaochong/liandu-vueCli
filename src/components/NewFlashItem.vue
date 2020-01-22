<!--
 * @Author: JieLinghu
 * @Date: 2020-01-18 17:59:20
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:35:16
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">快讯</p>
      <p class="asside-card-title-more">
        <router-link to="/newsFlash">更多 ></router-link>
      </p>
    </div>
    <div class="fast-news" style="max-height:750px;">
      <div class="fast-news-item" v-for="(item,index) in fastNewsList" :key="index">
        <div class="fast-news-item-title">
          <span class="fnit-time">{{item.createTime.toString().slice(11,16)}}</span>
          <span class="fnit-source">{{item.source}}</span>
        </div>
        <div class="fast-news-item-content">
          <div>
            <b>{{item.title}}</b>
            {{item.content}}
          </div>
          <img v-if="item.src" :src="item.src" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getFastNewsListApi } from "@/api/home.js";
export default {
  data() {
    return {
      fastNewsList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let data = {
        limit: "10",
        page: "1"
      };
      getFastNewsListApi(data)
        .then(res => {
          this.fastNewsList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
/* 快讯 */
.fast-news {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
}

.fast-news::-webkit-scrollbar-track {
    background-color: #F5F5F5;
}

.fast-news::-webkit-scrollbar {
    width: 8px;
    height: 128px;
    background-color: #F5F5F5;
    border-radius: 5px;
}

.fast-news::-webkit-scrollbar-thumb {
    /* */
    background: #c1c8cd;
    border-radius: 5px;
}

.fast-news::-webkit-scrollbar-corner {
    background-color: #F5F5F5;
}

.fast-news::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    border-left: dashed 1px #84929c;
    opacity: 0.2;
    left: 17px;
}

.fast-news-item {
    padding: 0 24px 0 31px;
}

.fast-news-item-title {
    position: relative;
    font-size: 14px;
    margin-bottom: 10px;
}

.fast-news-item-title:before {
    content: "";
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border: solid 4px $red-color;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translate(-20px, -50%);
}
.fast-news-item-content{
    margin:10px 0;
}
.fnit-time {
    color: #333333;
}

.fnit-source {
    color: $text-gray-color;
    margin-left: 15px;
}

</style>