<!--
 * @Author: JieLinghu
 * @Date: 2020-01-20 14:28:26
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:34:10
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">币种收益</p>
    </div>
    <div class="aside-table-wrapper">
      <table fixed class="aside-table">
        <thead>
          <tr>
            <td width="70">币种</td>
            <td>价格(CNY)</td>
            <td align="center">24H涨幅</td>
            <td align="right">日产出(天)</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in currencyList"
            :key="index"
            @click="clickRow(item.id,item.currencyName)"
            style="cursor: pointer;"
          >
            <td>
              <div class="table-cell">
                <div class="coin">
                  <img :src="item.logo" alt />
                  {{item.currencyName}}
                </div>
              </div>
            </td>
            <td>
              <div class="table-cell">{{item.priceCny}}</div>
            </td>
            <td align="center">
              <div
                :class="['table-cell',item.changePercent24h<0?'success-color':'error-color']"
              >{{item.changePercent24h}}%</div>
            </td>
            <td align="right">
              <div class="table-cell">￥{{item.dailyOutput}}/T</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getCurrencyListApi } from "@/api/currency.js";
export default {
  data() {
    return {
      currencyList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getCurrencyListApi().then(res => {
        this.currencyList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 侧边栏表格 */
.aside-table-wrapper {
  padding: 0 10px 15px;
}
.aside-table {
  width: 100%;
  td {
    vertical-align: middle;
    padding: 15px 0 3px;
    font-size: 14px;
  }
  thead {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    td {
      padding: 15px 0;
    }
  }
  .table-cell {
    padding-bottom: 5px;
    .coin {
      display: flex;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 6px;
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>