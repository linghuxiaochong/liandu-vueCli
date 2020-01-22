<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:30:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 10:29:05
 * @description: 
 -->
<template>
  <div>
    <div class="thematic-foreign">
      <div class="content">
        <Breadcrumb separator=">">
          <BreadcrumbItem to="/specialTopic">行业政策</BreadcrumbItem>
          <BreadcrumbItem>国外政策</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <div class="content">
      <div class="thematic">
        <div
          class="thematic-card"
          v-for="(item,index) in foreignList"
          :key="index"
          @click="goDetail(item.id)"
        >
          <div class="thematic-img">
            <img :src="item.coverImg" alt />
          </div>
          <h4>{{item.title}}</h4>
          <h5>{{item.articleList.length}}篇文章</h5>
          <div>
            <p v-for="(item2,index2) in item.articleList.slice(0,4)" :key="index2">
              <i class="dian"></i>
              {{item2.title}}
            </p>
          </div>
        </div>
      </div>
      <Page class-name="page-class" :page-size="12" :total="total" @on-change="onChangePage" />
    </div>
  </div>
</template>

<script>
import { getThematicListApi } from "@/api/news.js";
export default {
  data() {
    return {
      foreignList: [],
      total: 0
    };
  },
  mounted() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      let data = {
        limit: "12",
        page: page.toString(),
        type: "0"
      };
      getThematicListApi(data).then(res => {
        this.foreignList = res.data.list;
        this.total = res.data.totalCount;
      });
    },
    onChangePage(page) {
      this.getList(page);
    },
    goDetail(id) {
      this.$router.push(`detail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.thematic-foreign {
  background: url("../../assets/img/foreign.png") no-repeat;
  background-position: center;
  background-size: cover;
  height: 292px;
  padding: 20px 0;
}
.thematic {
  flex-wrap: wrap;
}
</style>
<style>
.thematic-foreign .ivu-breadcrumb > span:last-child,
.thematic-foreign .ivu-breadcrumb a {
  color: white;
}
</style>