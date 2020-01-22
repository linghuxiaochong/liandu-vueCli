<!--
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-18 09:12:55
 * @description: 
 -->
<template>
  <footer>
    <div class="footer-wrapper">
      <div class="company-info">
        <img src="@/assets/img/brand_logo_footer.png" alt />
        <p>链度是国内领先的区块链信息服务商，以价值投资为导向，为区块链创新者服务。目前已发展成集资讯内容、线下活动、培训、孵化器、投资和区块链技术落地应用于一体的生态体平台遍及中国大陆、韩国，日本，美国，香港等国家和地区。</p>
        <div class="footer-logo-list">
          <img src="@/assets/img/weixin-footer.png" alt />
          <img src="@/assets/img/weibo-footer.png" alt />
          <img src="@/assets/img/bitcoin-footer.png" alt />
        </div>
        <p>Copyright ©2019 LianDu All Rights Reserved</p>
      </div>
      <div class="footer-menu">
        <ul>
          <li class="footer-menu-title">关于我们</li>
          <li class="footer-menu-item">
            <a href="./aboutUs.html">关于链度</a>
          </li>
          <li class="footer-menu-item">
            <a href="./TermsOfUse.html">使用条款</a>
          </li>
          <li class="footer-menu-item">
            <a href="./CopyrightStatement.html">版权说明</a>
          </li>
        </ul>
        <ul>
          <li class="footer-menu-title">联系我们</li>
          <li class="footer-menu-item">
            <a href="#">商务合作</a>
          </li>
        </ul>
        <ul>
          <li class="footer-menu-title">品牌</li>
          <li class="footer-menu-item">
            <img src="@/assets/img/ump-logo.png" alt />
          </li>
          <li class="footer-menu-item">
            <img src="@/assets/img/one-belt-road.png" alt />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
footer {
  background-color: #333333;
  padding: 20px;
}

.footer-wrapper {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.company-info {
  width: 326px;
  margin-right: 127px;
  margin-top: 16px;
  p {
    margin-top: 17px;
    color: #8b8b8b;
    font-size: 12px;
  }
}

.footer-logo-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin-right: 20px;
    margin-top: 18px;
  }
}

.footer-menu {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 17px;
  ul {
    margin-right: 100px;
  }
  .footer-menu-title {
    color: #fff;
  }
}

.footer-menu-item {
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1;
  a {
    color: rgba(255, 255, 255, 0.4);
    line-height: 1;
  }
  a:hover {
    color: #fff;
  }
}
</style>
