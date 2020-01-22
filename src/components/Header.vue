<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:34:46
 * @description: 
 -->
<template>
  <div class="header">
    <div class="login-bar">
      <div class="login-bar-wrapper">
        <ul class="login-bar-left">
          <li class="login-bar-item">
            <span class="s1">BTC流通市值(¥)</span>
            <span class="s2">{{ topData.marketcapTotalCny }}亿</span>
          </li>
          <li class="login-bar-item">
            <span class="s1">24H交易额(¥)</span>
            <span class="s2">{{ topData.transactionVolume24H }}亿</span>
          </li>
          <li class="login-bar-item">
            <span class="s1">24H涨幅</span>
            <span class="s2">{{ topData.change24H }}%</span>
          </li>
        </ul>
        <ul class="login-bar-right">
          <li v-show="show" class="login-bar-item">
            <router-link to="/login">
              <span class="s1 login-btn">登录</span>
            </router-link>
          </li>
          <li v-show="show" class="login-bar-item">
            <router-link to="/login">
              <span class="s1 login-btn">注册</span>
            </router-link>
          </li>
          <li v-show="!show" class="login-bar-item">
            <router-link to="/myIndex">
              <span class="s1 login-btn">{{ info ? info.username || info.mobile : "" }}</span>
            </router-link>
          </li>
          <li v-show="!show" class="login-bar-item">
            <span class="s1 login-btn" @click="signOut()">退出</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-bar">
      <div class="login-bar-wrapper">
        <nav>
          <div>
            <i
              v-if="mobile"
              :class="['iconfont',barListShow?'icon-guanbi':'icon-quanbu']"
              @click="barListShow=!barListShow;searchShow=false;"
            ></i>
            <router-link to="/">
              <img class="brand" src="@/assets/img/brand_logo.png" alt />
            </router-link>
            <i
              v-if="mobile"
              class="iconfont icon-sousuo"
              @click="searchShow=true;barListShow=false;"
            ></i>
          </div>

          <ul v-show="barListShow" class="nav-bar-list">
            <li
              :class="{'nav-bar-list-item':1,active:activemenu === item.name}"
              v-for="(item,index) in menuList"
              :key="index"
            >
              <p @click="()=>{$router.push(pathList[index][0])}">
                {{item.firstMenue}}&nbsp;&nbsp;
                <i
                  v-if="item.secondMenueList && item.secondMenueList.length>0"
                  class="dropdown-icon"
                ></i>
              </p>
              <ul
                class="nav-bar-sub-menu"
                v-if="item.secondMenueList && item.secondMenueList.length>0"
              >
                <li
                  :class="{'nav-bar-sub-menu-item':1,'active':subactivemenu === item2.name}"
                  v-for="(item2,index2) in item.secondMenueList"
                  :key="index2"
                >
                  <router-link :to="{path:pathList[index][index2]}">{{item2.menue}}</router-link>
                </li>
              </ul>
            </li>
            <li v-if="mobile">
              <ul class="login-button">
                <li v-show="show" class="login-bar-item">
                  <router-link to="/login">
                    <span class="login-btn">登录</span>
                  </router-link>
                </li>
                <li v-show="show" class="login-bar-item">
                  <router-link to="/login">
                    <span class="login-btn">注册</span>
                  </router-link>
                </li>
                <li v-show="!show" class="login-bar-item">
                  <router-link to="/myIndex">
                    <span class="login-btn">{{info?info.nickName||info.mobile:''}}</span>
                  </router-link>
                </li>
                <li v-show="!show" class="login-bar-item">
                  <span class="login-btn" @click="signOut()">退出</span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div v-if="searchShow" class="search-input">
          <input type="text" v-model="search" @keyup.enter="onSubmit" />
          <img src="@/assets/img/search.png" @click="onSubmit" />
          <span v-if="mobile" @click="searchShow=false">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWebTopDataApi, getMenuListApi } from "@/api/home";
export default {
  data() {
    return {
      activemenu: "",
      subactivemenu: "",
      topData: {},
      show: true,
      info: {},
      menuList: [],
      barListShow: true,
      searchShow: true,
      search: "",
      pathList: [
        ["/industryNews"],
        [
          "/miningNews",
          "/miningNews/coinEarnings",
          "/miningNews/coinMinerList",
          "/miningNews/takeCoinHelp",
          "/miningNews/coinMinerEvaluating"
        ],
        ["/specialTopic", "/specialTopic/domestic", "/specialTopic/foreign"],
        ["/industryCharacter"],
        ["/blockChainApplication"],
        ["/college", "/college/library", "/college/phrase"]
      ]
    };
  },
  mounted() {
    this.getTopData();
    this.getMenu();
    // this.info = JSON.parse(sessionStorage.getItem("info"));
    // if (this.info == {} || this.info == null) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    // }
  },
  computed: {
    mobile() {
      return false;
    }
  },
  methods: {
    getTopData() {
      getWebTopDataApi().then(res => {
        this.topData = res.data;
      });
    },
    getMenu() {
      getMenuListApi()
        .then(res => {
          this.menuList = res.data;
        })
        .catch(err => {
          this.menuList = [];
          console.log(err);
        });
    },
    onSubmit() {
     this.$router.push("/searchResult")
    }
    // signOut() {
    //   sessionStorage.removeItem("info");
    //   this.info = {};
    //   this.show = true;
    //   window.location.href = "./index.html";
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  .login-bar {
    background-color: $red-header-bg;
    color: $white-color;
    font-size: 12px;
    padding: 10px 0;
    a {
      color: $white-color;
    }
    .login-bar-item {
      height: 100%;
      line-height: 1;
      padding: 0 20px;
      border-right: solid 1px rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .s1 {
        margin-right: 16px;
        color: #ffffff;
        opacity: 1;
      }
    }

    .login-bar-item:first-child {
      padding-left: 0;
    }
    .login-bar-item:last-child {
      border-right: 0;
      padding-right: 0;
    }
  }
  .nav-bar {
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(132, 146, 156, 0.2);
    padding: 0 20px;
    z-index: 10;
  }
  nav {
    display: flex;
    flex-grow: 2;
    align-items: center;
    > ul {
      display: flex;
      align-items: center;
    }
    .nav-bar-list-item {
      margin-left: 47px;
      font-size: 16px;
      cursor: pointer;
      position: relative;
      padding: 20px 0;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .iconfont {
        font-size: 12px;
      }
    }
    .nav-bar-sub-menu {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(0, 100%);
      width: 200px;
      background: $white-color;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 0 5px 10px 0px rgba(132, 146, 156, 0.2);
      overflow: hidden;
      box-sizing: border-box;
      height: 0;
      opacity: 0;
      transition: all 0.2s linear;
      z-index: 100;
      li {
        padding: 8px 15px;
      }
      li:hover,
      .active {
        background-color: $red-color;
        a {
          color: $white-color;
        }
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .login-bar-wrapper {
    width: $content-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > ul {
      display: flex;
    }
  }
  .dropdown-icon {
    display: inline-block;
    border: 5px solid transparent;
    border-top-color: #333333;
    margin-bottom: -3px;
  }
  .nav-bar-list-item:hover,
  .nav-bar-list-item.active {
    p {
      color: $red-color;
    }
  }
  .nav-bar-list-item:hover {
    .dropdown-icon {
      border-top-color: $red-color;
    }
    .nav-bar-sub-menu {
      height: auto;
      opacity: 1;
    }
  }
  .search-input {
    position: relative;
    input {
      background-color: #f6f7fb;
      border-radius: 18px;
      border: solid 1px #e4e7ef;
      min-width: 304px;
      height: 36px;
      padding: 0 30px 0 20px;
    }
    img {
      position: absolute;
      top: 45%;
      left: 94%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
}
</style>
