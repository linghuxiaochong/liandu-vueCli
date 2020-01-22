<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:30:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:32:00
 * @description: 
 -->
<template>
  <div class="content">
    <!-- 教程列表 -->
    <Breadcrumb separator=">">
        <BreadcrumbItem to="/miningNews">矿业新闻</BreadcrumbItem>
        <BreadcrumbItem>矿机测试</BreadcrumbItem>
    </Breadcrumb>
    <Row  :gutter="20">
      <Col span="18">
        <div v-for="item in coinHelpList" :key="item.id" class="list-card">
          <div class="cover">
            <img :src="item.coverImg" />
          </div>
          <div class="list-card-content">
            <h3>{{item.title}}</h3>
            <h5>{{item.briefIntroduction}}</h5>
            <p>
              <span>
                <img :src="item.publishImgUrl" alt />
              </span>
              <span>{{item.publisher}}</span>
              <span class="time">{{item.createTime}}</span>
            </p>
          </div>
        </div>
        <Page id="dd" class-name="page-class" :total="total" @on-change="onChangePage" />
      </Col>
      <!-- 侧栏组件 -->
      <Col span="6">
        <CurrencyIncome />
        <Tops />
        <TutorialEvaluation :type="1" />
      </Col>
    </Row>
  </div>
</template>

<script>
import { getCoinHelpListApi } from "@/api/news.js";
export default {
  data() {
    return {
      coinHelpList: [],
      total: 0
    };
  },
  components: {
    CurrencyIncome: () => import("../CurrencyIncome.vue"),
    TutorialEvaluation: () => import("../TutorialEvaluation.vue"),
    Tops: () => import("../Tops.vue")
  },
  mounted() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      let data = {
        limit: "10",
        page: page.toString(),
        firstMenueId: "2",
        secondMenueId: "5"
      };
      getCoinHelpListApi(data).then(res => {
        this.coinHelpList = res.data.list;
        this.total = res.data.totalCount;
      });
    },
    onChangePage(page) {
      this.getList(page);
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 40px;
}
</style>