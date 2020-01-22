<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:30:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 11:03:47
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
          <Col span="8" class="banner-side">
            <div v-for="(item, index) in specialList" :key="index">
              <img :src="item.coverImg" alt />
              <p class="ellips">
                <i class="iconfont icon-jingxuan"></i>
                {{item.title}}
              </p>
            </div>
          </Col>
        </Row>
        <!-- 新闻列表 -->
        <Row>
          <!-- 最新政策 -->
          <div>
            <div class="block-title">
              <span>最新新闻</span>
            </div>
            <div v-for="item in newList" :key="item.id" class="list-card">
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
            <!-- <div class="check-more">查看更多</div> -->
          </div>
          <!-- 国内政策 -->
          <div>
            <div class="block-title">
              <span>国内政策专题</span>
            </div>
            <div class="thematic">
              <div class="thematic-card" v-for="(item,index) in domesticList" :key="index" @click="goDetail(item.id)">
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
            <div class="check-more">查看更多</div>
          </div>
          <!-- 国外政策 -->
          <div>
            <div class="block-title">
              <span>国外政策专题</span>
            </div>
               <div class="thematic">
              <div class="thematic-card" v-for="(item,index) in foreignList" :key="index" @click="goDetail(item.id)">
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
            <div class="check-more">查看更多</div>
          </div>
        </Row>
      </Col>
      <!-- 侧栏组件 -->
      <Col span="6">
      <ThematicItem :type="1"/>
      <ThematicItem :type="0"/>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "view-design";
import {
  getBannerListApi,
  getFeaturedPolicyApi,
  getPolicyNewsApi,
  getThematicListApi
} from "@/api/news.js";
export default {
  data() {
    return {
      bannerList: [],
      specialList: [],
      newList: [],
      domesticList: [],
      foreignList: []
    };
  },
  components: {
      ThematicItem:()=>import ("../ThematicItem.vue"),
    Carousel,
    CarouselItem
  },
  mounted() {
    this.getBanner();
    this.getSpecial();
    this.getNewsList();
    this.getThematic(1);
    this.getThematic(0);
  },
  methods: {
    getBanner() {
      let data = {
        limit: "8",
        page: "1",
        isBigger: "1",
        typeId: "3"
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
        size: "2",
        isSelect: "1"
      };
      getFeaturedPolicyApi(data).then(res => {
        this.specialList = res.data;
      });
    },
    getNewsList() {
      let data = {
        size: "3",
        firstMenueId: "3"
      };
      getPolicyNewsApi(data).then(res => {
        this.newList = res.data;
      });
    },
    getThematic(type) {
      let data = {
        limit: "3",
        type: type
      };
      getThematicListApi(data).then(res => {
        if (type) {
          this.domesticList = res.data.list;
        } else {
          this.foreignList = res.data.list;
        }
      });
    },
     goDetail(id){
        this.$router.push(`/specialTopic/detail/${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 40px;
}
</style>