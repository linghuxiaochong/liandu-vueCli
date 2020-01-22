<template>
  <div class="character-carousel">
    <div class="carousel-list">
      <div
        :class="['carousel-item' , leftCount(index)==50?'active':'']"
        :style="`left:${leftCount(index)}%;${(leftCount(index-1)==50||leftCount(index+1)==50)?'z-index:1;':''};`"
        v-for="(item,index) in bannerList"
        :key="index"
      >
        <div class="banner-item">
          <img :src="item.imgUrl" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBannerListApi } from "@/api/news.js";
export default {
  data() {
    return {
      bannerList: [],
      count: 0
    };
  },
  computed: {},
  mounted() {
    this.getBanner();
    setInterval(() => {
      this.count -= 25;
    }, 4000);
  },
  methods: {
    getBanner() {
      let data = {
        limit: "8",
        isBigger: "1",
        typeId: "4"
      };
      getBannerListApi(data)
        .then(res => {
          this.bannerList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    leftCount(index) {
      let left = 0;
      left =
        this.count + (index + 1) * 25 > 0
          ? this.count + (index + 1) * 25 <= 75
            ? this.count + (index + 1) * 25
            : 75
          : 75;

      if (index == 0) {
        if (this.count + this.bannerList.length * 25 == 25) {
          left = 50;
        } else if (this.count + this.bannerList.length * 25 == 0) {
          this.count = 0;
        }
      }
      return left;
    }
  }
};
</script>

<style lang="scss" scoped>
.character-carousel {
  width: 100%;
  height: 378px;
  margin: 30px 0;

  .carousel-list {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .carousel-item {
    cursor: pointer;
    width: 540px;
    height: 290px;
    position: absolute;
    transform: scale(1) translate(-50%, -50%);
    top: 50%;
    left: 25%;
    transition: left ease-in-out 0.4s, transform ease-in-out 0.4s,
      opacity ease 0.4s;
    overflow: hidden;
    border-radius: 6px;
    opacity: 0.5;
  }
  .carousel-item:hover {
    opacity: 1;
  }
  .active {
    transform: scale(1.2) translate(-42%, -42%);
    z-index: 2;
    opacity: 1;
  }
  .banner-item {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>