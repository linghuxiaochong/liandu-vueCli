<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:30:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 11:03:39
 * @description: 
 -->
<template>
    <div class="content">
      <Row :gutter="20">
        <Col span="18">
          <Row :gutter="30" type="flex" justify="space-between">
            <!-- 轮播 -->
            <Col span="16">
              <Carousel class="banner" autoplay loop>
                <CarouselItem
                  v-for="(item, index) in bannerList"
                  :key="index"
                  @click="goPath(item.link)"
                >
                  <div class="banner-item">
                    <img :src="item.imgUrl" alt />
                    <p class="ellips">{{ item.text }}</p>
                  </div>
                </CarouselItem>
              </Carousel>
            </Col>
            <!-- 精选 -->
            <Col span="8" class-name="banner-side">
              <div v-for="(item, index) in specialList" :key="index">
                <img :src="item.coverImg" alt />
                <p class="ellips">
                  <i class="iconfont icon-jingxuan"></i>
                  {{item.briefIntroduction}}
                </p>
              </div>
            </Col>
          </Row>
          <!-- 新闻列表 -->
          <Row>
            <div v-for="item in miningNewsList" :key="item.id" class="list-card">
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
          </Row>
        </Col>
        <!-- 侧栏组件 -->
        <Col span="6">
          <NewFlashItem />
          <Tops />
          <TutorialEvaluation :type="1" />
          <TutorialEvaluation :type="0" />
        </Col>
      </Row>
    </div>
</template>

<script>
import { Carousel, CarouselItem } from "view-design";
import {
  getBannerListApi,
  getSpecialArticleListApi,
  getNewsListApi
} from "@/api/news.js";
export default {
  data() {
    return {
      bannerList: [],
      specialList: [],
      miningNewsList:[],
      total: 0,
      currentPage: 1
    };
  },
  components: {
    NewFlashItem: () => import("../NewFlashItem.vue"),
    Tops: () => import("../Tops.vue"),
    TutorialEvaluation: () => import("../TutorialEvaluation.vue"),
    Carousel,
    CarouselItem
  },
  mounted() {
    this.getBanner();
    this.getSpecial();
    this.getMiningNewsList(1);
  },
  methods: {
    getBanner() {
      let data = {
        limit: "8",
        page: "1",
        isBigger: "1",
        typeId: "2"
      };
      getBannerListApi(data)
        .then(res => {
          this.bannerList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSpecial() {
      let data = {
        page: "1",
        type: "1",
        limit: "2",
        firstMenueId: "2"
      };
      getSpecialArticleListApi(data).then(res => {
        this.specialList = res.data.list;
      });
    },
    getMiningNewsList(page) {
      let data = {
        firstMenueId: "2",
        limit: "10",
        page: page.toString()
      };
      getNewsListApi(data).then(res => {
        this.miningNewsList = res.data.list;
        this.total = res.data.totalCount;
      });
    },
      onChangePage(page) {
      this.getMiningNewsList(page);
      window.scrollTo(0, 400);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 40px;
}
</style>