<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:27:16
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:31:44
 * @description: 
 -->
<template>
  <div class="content">
    <Row :gutter="20">
      <Col span="18">
        <Row type="flex" justify="space-between">
          <!-- 轮播 -->
          <Col span="15">
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
          <Col span="9" class="banner-side-industry-news">
            <div v-for="(item, index) in specialList" :key="index">
              <p class="ellips_line4">
                <i class="iconfont icon-jingxuan"></i>
                {{item.briefIntroduction}}
              </p>
              <img :src="item.coverImg" alt />
            </div>
          </Col>
        </Row>
        <!-- 新闻列表 -->
        <Row>
          <div v-for="item in industryNewsList" :key="item.id" class="list-card">
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
        <Risk />
        <HotCurrency/>
        <NewFlashItem/>
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
      industryNewsList: [],
      total: 0,
      currentPage: 1
    };
  },
  components: {
    Risk: () => import("../Risk.vue"),
    HotCurrency: () => import("../HotCurrency.vue"),
    NewFlashItem: () => import("../NewFlashItem.vue"),
    Carousel,
    CarouselItem
  },
  mounted() {
    this.getBanner();
    this.getSpecialList();
    this.getIndustryNewsList(1);
  },
  methods: {
    getBanner() {
      let data = {
        limit: "8",
        page: "1",
        isBigger: "1",
        typeId: "1"
      };
      getBannerListApi(data).then(res => {
        this.bannerList = res.data.list;
      });
    },
    getSpecialList() {
      let data = {
        page: "1",
        limit: "3",
        type: "1",
        firstMenueId: "1"
      };
      getSpecialArticleListApi(data).then(res => {
        this.specialList = res.data.list;
      });
    },
    getIndustryNewsList(page) {
      let data = {
        firstMenueId: "1",
        limit: "10",
        page: page.toString()
      };
      getNewsListApi(data).then(res => {
        this.industryNewsList = res.data.list;
        this.total = res.data.totalCount;
      });
    },
    onChangePage(page) {
      this.getIndustryNewsList(page);
      window.scrollTo(0, 400);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 40px;
}
.banner {
  width: 580px;
  height: 326px;
  .banner-item {
    width: 580px;
    height: 326px;
  }
}
.banner-side-industry-news {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    img {
      width: 156px;
      height: 100px;
      margin-left: 10px;
      flex-shrink: 0;
    }
    p{
        max-height: 90px;
    }
  }
}
</style>