<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 09:55:28
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:35:44
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">Tops</p>
      <div class="tops-select">
        <p
          :class="{ 'tops-select-item': 1, 'active': topsActive== 0 }"
          @click="topsActive='0';getList()"
        >最热</p>&nbsp;/&nbsp;
        <p
          :class="{'tops-select-item':1,'active':topsActive==1}"
          @click="topsActive='1';getList()"
        >周排行</p>&nbsp;/&nbsp;
        <p
          :class="{'tops-select-item':1,'active':topsActive==2}"
          @click="topsActive='2';getList()"
        >月排行</p>
      </div>
    </div>
    <div class="tops-aside-list">
      <div
        class="tops-aside-item"
        v-for="(item,index) in topsArticleList"
        :key="index"
        @click="goDetails(item.id)"
      >
        <i :class="index<3?'active':''">{{index+1}}</i>
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getSpecialArticleListApi } from "@/api/news.js";
export default {
  data() {
    return {
      topsActive: "",
      topsArticleList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let data = {
        page: "1",
        type: "0",
        limit: "10",
        state: this.topsActive
      };
      getSpecialArticleListApi(data).then(res => {
        this.topsArticleList = res.data.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tops-select {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: #84929c;
}

.tops-select-item {
  cursor: pointer;
  margin:0 4px;
}
.active {
  color: $red-color !important;
  font-size: 16px;
}
.tops-aside-list {
  padding: 0 4px 0 6px;
  font-size: 16px;
}

.tops-aside-item {
  display: flex;
  justify-content: flex-start;
//   align-items: center;
  padding-bottom: 10px;
  margin:10px 0;
  border-bottom: 1px solid $border-color;
  cursor: pointer;
  i {
    font-weight: 700;
    margin-right: 14px;
    color: $text-gray-color;
  }
  p {
    color: #333333;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>