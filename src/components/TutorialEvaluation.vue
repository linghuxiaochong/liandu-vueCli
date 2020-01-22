<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">{{type==0?'矿机测评':'挖矿教程'}}</p>
      <p class="asside-card-title-more">
        <router-link to="#">更多 ></router-link>
      </p>
    </div>
    <div class="coinhelp-aside-list">
      <div
        class="coinhelp-aside-article"
        v-for="(item,index) in list"
        :key="index"
        @click="goDetails(item.id)"
      >
        <img class="cover-img" :src="item.coverImg" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getCoinHelpListApi } from "@/api/news.js";
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
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
      // 教程 1
      // 测评 0
      let data = {
        limit: "5",
        page: "1"
      };
      if (type == 1) {
        data.firstMenueId = "2";
        data.secondMenueId = "4";
      } else {
        data.firstMenueId = "2";
        data.secondMenueId = "5";
      }
      getCoinHelpListApi(data).then(res => {
        this.list = res.data.list;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.coinhelp-aside-list {
  padding: 0 10px;
}

.coinhelp-aside-article {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom:10px;
  cursor: pointer;
  border-bottom: 1px solid $border-color;
  .cover-img {
    width: 110px;
    height: 62px;
    background-color: #f2f4f5;
    display: block;
    margin-right: 20px;
    flex-shrink: 0;
    border-radius: 4px;
  }
  > p {
    font-size: 16px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .price {
    text-align: right;
    flex-grow: 3;
    width: 160px;
    p {
      font-size: 16px;
      line-height: 24px;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 0px;
      color: $red-color;
      span:first-child {
        font-size: 16px;
      }
    }
  }
}
</style>