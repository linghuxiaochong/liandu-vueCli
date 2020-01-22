<!--
 * @Author: JieLinghu
 * @Date: 2020-01-20 09:37:24
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-20 09:43:12
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="error-color">
        <i class="iconfont icon-fengxian"></i> 风险提示
      </p>
    </div>
    <div class="fengxian">
      <p class="fengxian-text">
        <a
          href="http://www.cbrc.gov.cn/chinese/newShouDoc/02DD1CADB1AC45DF948E3AD36F93BEDD.html"
          target="_blank"
        >防范以“虚拟货币” “区块链”名义进行非法集资的风险。</a>
      </p>
      <p class="yinjian">--银保监会等五部门</p>
    </div>
    <div class="fengxian">
      <p class="fengxian-text">根据国家互联网信息办公室《区块链信息服务管理规定》要求，“区块链信息服务提供者”应积极在区块链信息服务备案管理系统备案。</p>
      <p class="beian">
        <a href="https://bcbeian.ifcert.cn/index" target="_blank">备案入口 ></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.fengxian {
  margin: 10px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  .yinjian {
    text-align: right;
    color: #84929c;
  }
  .beian {
    text-align: right;
    a {
      color: #0251e1;
    }
  }
}

.fengxian:last-child {
  border: none;
}

.fengxian-text a:hover {
  color: $red-color;
}
</style>