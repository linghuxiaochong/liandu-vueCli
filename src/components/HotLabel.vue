<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 11:58:58
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:35:07
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">热门标签</p>
    </div>
    <div class="hot-label-list">
      <p
        v-for="(item,index) in labelList"
        :key="index"
        class="hot-label"
        style="margin-bottom:10px;margin-right:8px;"
      >{{item.lbael}}</p>
    </div>
  </div>
</template>

<script>
import { getLabelListApi } from "@/api/home.js";
export default {
  data() {
    return {
      labelList: []
    };
  },
  mounted() {
    this.getLabel();
  },
  methods: {
    getLabel() {
      getLabelListApi({ isHot: 1 }).then(res => {
        this.labelList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hot-label-list {
  padding: 0 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}

.hot-label {
  padding: 7px 12px;
  border-radius: 30px;
  background-color: #f9edec;
  color: $red-color;
  font-size: 12px;
}
</style>