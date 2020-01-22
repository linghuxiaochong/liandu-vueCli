<!--
 * @Author: JieLinghu
 * @Date: 2020-01-18 09:35:54
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:30:40
 * @description: 
 -->
<!--
 * @Author: JieLinghu
 * @Date: 2020-01-18 09:35:54
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-19 10:54:33
 * @description: 
 -->
<template>
  <div class="content">
    <div class="home-top-currency">
      <TopCurrency />
    </div>
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
          <Col span="8" class="banner-side">
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
          <div v-for="item in homeNewList" :key="item.firstMenueId">
            <div class="block-title">
              <span>{{item.firstMenue}}</span>
            </div>
            <div v-for="item2 in item.articleList" :key="item2.id" class="list-card">
              <div class="cover">
                <img :src="item2.coverImg" />
              </div>
              <div class="list-card-content">
                <h3>{{item2.title}}</h3>
                <h5>{{item2.briefIntroduction}}</h5>
                <p>
                  <span>
                    <img :src="item2.publishImgUrl" alt />
                  </span>
                  <span>{{item2.publisher}}</span>
                  <span class="time">{{item2.createTime}}</span>
                </p>
              </div>
            </div>
            <div class="check-more">查看更多</div>
          </div>
        </Row>
      </Col>
      <!-- 侧栏组件 -->
      <Col span="6">
        <NewFlashItem />
        <Tops />
        <TutorialEvaluation :type="1"/>
        <HotLabel />
      </Col>
    </Row>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from "view-design";
import {
  getHomeArticleListApi
} from "@/api/home.js";
import {
  getBannerListApi,
  getSpecialArticleListApi,
} from "@/api/news.js";
export default {
  data() {
    return {
      bannerList: [],
      specialList: [],
      homeNewList: []
    };
  },
  components: {
    TopCurrency: () => import("./TopCurrency.vue"),
    NewFlashItem: () => import("../NewFlashItem.vue"),
    Tops: () => import("../Tops.vue"),
    TutorialEvaluation: () => import("../TutorialEvaluation.vue"),
    HotLabel: () => import("../HotLabel.vue"),
    Carousel,
    CarouselItem
  },
  mounted() {
    this.getBanner();
    this.getSpecial();
    this.getHomeNewList();
  },
  methods: {
    getBanner() {
      let data = {
        limit: "8",
        page: "1",
        isBigger: "1",
        typeId: "0"
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
        limit: "2"
      };
      getSpecialArticleListApi(data).then(res => {
        this.specialList = res.data.list;
      });
    },
    getHomeNewList() {
      getHomeArticleListApi({ size: 3 })
        .then(res => {
          this.homeNewList = res.data;
          this.homeNewList = res.data.filter(o => {
            return o.firstMenueId != 6;
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    goPath(path) {
      console.log(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.home-top-currency {
  margin: 20px 0;
}
</style>
