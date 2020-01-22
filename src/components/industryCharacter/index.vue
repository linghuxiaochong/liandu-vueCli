<!--
 * @Author: JieLinghu
 * @Date: 2020-01-19 14:30:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 17:41:54
 * @description: 
 -->
<template>
  <div>
    <div class="content">
      <CharacterCarousel />
    </div>
    <div class="card">
      <div class="content">
        <div class="character-card-list">
          <div
            class="character-card"
            v-for="(item,index) in cardList"
            :key="index"
          >
            <img :src="item.coverImg" alt />
            <h3>{{item.title}}</h3>
            <p class="ellips">{{item.briefIntroduction}}</p>
            <div>
              <div class="author">
                <img class="author-img" :src="item.publishImgUrl" alt />
                <p class="author-name">{{item.publisher}}</p>
              </div>
              <span
                class="news-publish-date"
                style="margin:0;font-size: 12px;"
              >{{item.createTime.slice(5,20)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <Row :gutter="20">
        <Col span="18">
          <div v-for="item in list" :key="item.id" class="list-card">
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
        <Col span="6">
          <Tops />
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { getSpecialArticleListApi, getNewsListApi } from "@/api/news.js";
export default {
  data() {
    return {
      cardList: [],
      list: [],
      total: 0
    };
  },

  components: {
    CharacterCarousel: () => import("./CharacterCarousel.vue"),
    Tops: () => import("../Tops.vue")
  },
  mounted() {
    this.getCardList();
    this.getList(1);
  },
  methods: {
    getCardList() {
      let data = {
        limit: "5",
        type: "1",
        firstMenueId: "4"
      };
      getSpecialArticleListApi(data).then(res => {
        this.cardList = res.data.list;
      });
    },
    getList(page) {
      let data = {
        limit: "10",
        page: page.toString(),
        firstMenueId: "4"
      };
      getNewsListApi(data).then(res => {
        this.list = res.data.list;
        this.total = res.data.totalCount;
      });
    },
    onChangePage(page) {
      this.getList(page);
      window.scrollTo(0, 900);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #f7f9fb;
}
.character-card-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f9fb;
  margin: 0 auto;
  max-width: 1300px;
  padding: 40px 0;
}

.character-card {
  width: 244px;
  /* height: 326px; */
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.character-card img {
  width: 100%;
  height: 184px;
  object-fit: cover;
}

.character-card > h3 {
  margin: 6px 16px;
  font-size: 16px;
  line-height: 22px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.character-card > p {
  margin: 4px 16px;
  font-size: 14px;
  line-height: 29px;
  letter-spacing: 0px;
  color: #84929c;
}

.character-card > div {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 16px;
}

.character-card > div,
.character-card .author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.character-card .author-img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #cccccc;
  margin-right: 6px;
}

.character-card .author-name {
  width: 85px;
  font-size: 14px;
  color: #333333;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>