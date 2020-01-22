<!--
 * @Author: JieLinghu
 * @Date: 2020-01-20 16:36:26
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:35:35
 * @description: 
 -->
<template>
  <div class="aside-thematic">
    <div
      :class="{'aside-thematic-first':index==0,'aside-thematic-card':index>0}"
      style="cursor: pointer;"
      v-for="(item,index) in list"
      :key="index"
      @click="goThematic(item.id)"
    >
      <i
        v-if="index==0"
        :class="['iconfont', type=='1'?'icon-tuijiankaobei4-left':'icon-remen']"
        :style="'font-size: 32px;line-height:32px;color:'+(type=='1'?'#0251e1':'#e10602')+';'"
      ></i>
      <i v-else>{{index-0+1}}</i>
      <img :src="item.coverImg" alt />
      <h4 v-if="index==0">{{item.briefIntroduction}}</h4>
      <div v-else>
        <h4>{{item.briefIntroduction}}</h4>
        <p>{{item.createTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAsideThematicApi } from "@/api/news.js";
export default {
  props: ["type"],
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList(this.type);
  },
  methods: {
    getList(type) {
      // 0-热门专题
      // 1-推荐专题
      let data = {};
      if (type == "1") {
        data = {
          firstMenueId: "3",
          isRecommend: "1",
          limit: "10"
        };
      } else {
        data = {
          firstMenueId: "3",
          isHot: "1",
          limit: "10"
        };
      }
      getAsideThematicApi(data).then(res => {
        this.list = res.data.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 专题侧栏 */
.aside-thematic {
  padding: 20px;
  background-color: #fafbfb;
  margin-bottom: 40px;
}

.aside-thematic-first {
  position: relative;
  margin-bottom: 20px;
  img {
    width: 269px;
    height: 167px;
    object-fit: cover;
  }
  h4 {
    position: absolute;
    bottom: 10px;
    right: 12px;
    left: 12px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 24px;
    color: $white-color;
  }
  i {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.aside-thematic-card {
  display: flex;
  margin-bottom: 20px;
  position: relative;
  img {
    width: 100px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 10px;
  }
  i {
    width: 14px;
    height: 14px;
    background-color: rgb(0, 0, 0, 0.3);
    font-style: normal;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: #ffffff;
    font-size: 10px;
  }
  div {
    h4 {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
      margin: 0;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: $text-gray-color;
    }
  }
}
</style>