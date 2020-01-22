<!--
 * @Author: JieLinghu
 * @Date: 2020-01-21 09:43:09
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 10:28:44
 * @description: 
 -->
<template>
  <div>
    <div class="thematic-details">
      <div class="content">
        <Breadcrumb separator=">">
          <BreadcrumbItem to="/specialTopic">行业政策</BreadcrumbItem>
          <BreadcrumbItem>{{info.title}}</BreadcrumbItem>
        </Breadcrumb>
        <h1>{{info.title}}</h1>
      </div>
    </div>
    <div class="content">
      <div class="summary">
        <img src="@/assets/img/zhaiyao.png" alt />
        <span>{{info.briefIntroduction}}</span>
      </div>
      <div class="thematic-article">
        <div id="first-block" class="block-title">
          <span>文章</span>
        </div>
        <div
          class="list-card"
          v-for="(item,index) in articleList"
          :key="index"
          @click="goDetails(item.id)"
        >
          <div class="cover">
            <img :src="item.coverImg" alt />
          </div>
          <div class="list-card-content">
            <h3 class="news-title ellips_line2">{{item.title}}</h3>
            <h5 class="news-subtitle">{{item.briefIntroduction}}</h5>
            <p>
              <span>
                <img :src="item.publishImgUrl" alt />
              </span>
              <span>{{item.publisher}}</span>
              <span class="time">{{item.createTime}}</span>
            </p>
          </div>
        </div>
        <!-- 分页 -->
        <Page class-name="page-class" :page-size="10" :total="total" @on-change="onChangePage" />
      </div>
    </div>
  </div>
</template>

<script>
import { getThematicDetailApi } from "@/api/news.js";
export default {
  name: "",
  data() {
    return {
      id: "",
      info: {},
      articleList: [],
      total: 0
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getDetail(1);
  },
  methods: {
    getDetail(page) {
      let data = {
        page: page.toString(),
        limit: "10",
        specialTopicId: this.id
      };
      getThematicDetailApi(data).then(res => {
        this.info = res.data;
        this.articleList = res.data.articleList.list;
        this.total = res.data.articleList.totalCount;
      });
    },
    onChangePage(page) {
      this.getDetail(page);
      window.scrollTo(0, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.thematic-details {
  background: url("../../assets/img/details.png") no-repeat;
  background-position: center;
  background-size: cover;
  height: 292px;
  padding: 20px 0;
  h1 {
    font-size: 32px;
    line-height: 56px;
    color: #ffffff;
    text-align: center;
    margin-top: 40px;
  }
}

.summary {
  background-color: #ffffff;
  padding: 20px 30px;
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: -40px;
  display: flex;
}

.summary img {
  width: 30px;
  height: 26px;
  flex-shrink: 0;
  margin-right: 10px;
}

.thematic-article {
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
  padding: 30px;
}
</style>
<style>
.thematic-details .ivu-breadcrumb > span:last-child,
.thematic-details .ivu-breadcrumb a {
  color: white;
}
</style>