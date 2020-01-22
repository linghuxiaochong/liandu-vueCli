<!--
 * @Author: JieLinghu
 * @Date: 2020-01-18 09:45:07
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:31:09
 * @description: 
 -->
<template>
  <div>
    <div class="canvas-data" style="margin-top:14px;">
      <div v-for="(item , index) in currencyData" :key="index">
        <div :key="'index'+item" class="canvas-data-item">
          <div class="cdi-up">
            <div class="coin">
              <img :src="item.logo" alt />
              <span>{{item.currencyName}}/{{item.exchangeName}}</span>
            </div>
            <p :class="[item.changePercent<0?'success-label':'error-label']">{{item.changePercent}}%</p>
          </div>
          <div class="cdi-down">
            <p class="price">￥{{item.priceCny}}</p>
            <div id="canvas-img" class="canvas-img">
              <canvas
                :id="'_canvas_'+index"
                width="105"
                height="20"
                ref="_canvas_1"
              >您的浏览器版本过低，不支持HTML5新增的canvas标签。</canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTopCurrencyDataApi } from "@/api/home.js";
export default {
  data() {
    return {
      currencyData: []
    };
  },
  mounted() {
    this.getData();
  },
  updated() {
    this.currencyData.forEach((item, index) => {
      this.drawCanvas(item.priceLine, index, item.changePercent);
    });
  },
  methods: {
    getData() {
      getTopCurrencyDataApi()
        .then(res => {
          this.currencyData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    drawCanvas(points, index, type) {
      var canvas = document.getElementById(`_canvas_${index}`);
      var ctx = canvas.getContext("2d");
      // points = [90, 70, 40, 80, 70, 60, 40, 90, 40, 50]	//点坐标
      let max = Math.max.apply(Math, points) + 20;
      let min = Math.min.apply(Math, points) - 20;
      let len = points.length;
      let stepX = 105 / (len - 1),
        stepY = 20 / (len - 1),
        deltaY = (max - min) / (len - 1);
      let endPoint = [],
        startPoint = [];
      let lineColor = null,
        fillColor = null;
      if (type < 0) {
        lineColor = "#22960f";
        fillColor = "#e8f4e7";
      } else {
        lineColor = "#eb4d5c";
        fillColor = "#fce6e5";
      }
      function drawLine() {
        ctx.beginPath();
        for (let i = 0; i < len; i++) {
          try {
            let point = points.shift();
            let x = i * stepX,
              y = ((point - min) / deltaY) * stepY;
            ctx.lineTo(x, y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 2;
            ctx.stroke();
            if (i == 0) {
              startPoint[0] = x;
              startPoint[1] = y;
            }
            if (i == len - 1) {
              endPoint[0] = x;
              endPoint[1] = y;
            }
          } catch (err) {
            console.log(err);
          }
        }
        ctx.strokeStyle = fillColor;
        ctx.lineTo(endPoint[0], endPoint[1]);
        ctx.lineTo(105, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(startPoint[0], startPoint[1]);
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.stroke();
      }
      drawLine();
    }
  }
};
</script>
<style lang="scss" scoped>
.canvas-data {
  display: flex;
  justify-content: space-between;
}
.canvas-data-item {
  .cdi-up,
  .cdi-down {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }
  .price {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -1px;
    color: #333333;
    margin-right: 14px;
    line-height: 1;
}
  .canvas-img {
    width: 105px;
    height: 20px;
    canvas {
      width: 105px;
      height: 20px;
      transform: rotateX(180deg);
    }
  }
}
</style>