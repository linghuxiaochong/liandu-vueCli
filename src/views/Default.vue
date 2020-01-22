<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-19 17:42:42
 * @description: 
 -->
<template>
  <div class="home">
    <HeaderItem />
    <transition name="fade">
      <router-view></router-view>
    </transition>

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
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
