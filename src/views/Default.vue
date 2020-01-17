<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-17 13:03:45
 * @description: 
 -->
<template>
  <div class="home">
    <HeaderItem />
    <router-view></router-view>
    <FooterItem />
  </div>
</template>

<script>
import HeaderItem from "@/components/Header";
import FooterItem from "@/components/Footer";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HeaderItem,
    FooterItem
  }
};
</script>
