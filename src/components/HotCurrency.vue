<!--
 * @Author: JieLinghu
 * @Date: 2020-01-20 10:03:10
 * @LastEditors  : JieLinghu
 * @LastEditTime : 2020-01-21 09:34:55
 * @description: 
 -->
<template>
  <div class="aside-card">
    <div class="aside-card-title">
      <p class="aside-card-title-name">热门行情</p>
    </div>
    <div class="hot-table">
      <div class="hot-table-content">
        <table>
          <tbody>
            <tr class="table-header">
              <td>币种</td>
              <td>价格(CNY)</td>
              <td>涨跌幅</td>
            </tr>
            <tr
              v-for="(item,index) in hotList"
              :key="index"
              @click="clickRow(item.id,item.currencyName)"
              style="
                    cursor: pointer;"
            >
              <td class="coin">
                <img :src="item.logo" alt />
                <span>{{item.currencyName}}</span>
              </td>
              <td>
                <p
                  :class="[item.changePercent24h>0?'error-color':'success-color']"
                >{{item.priceCny.toFixed(2)}}</p>
              </td>
              <td>
                <p
                  :class="[item.changePercent24h>0?'error-color':'success-color']"
                >{{item.changePercent24h}}%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrencyListApi } from "@/api/currency.js";
export default {
  data() {
    return {
      hotList: []
    };
  },
  mounted() {
    this.getHotList();
  },
  methods: {
    getHotList() {
      getCurrencyListApi().then(res => {
        this.hotList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hot-table {
  padding: 0 10px;
}

.hot-table-content {
  table {
    width: 100%;
    tr {
      td {
        padding: 12px 10px;
        border-bottom: 1px dashed $border-color;
        p {
          line-height: 1;
        }
      }
      td:nth-of-type(1),
      td:nth-of-type(1) p {
        text-align: left;
      }
      td:nth-of-type(2),
      td:nth-of-type(2) p {
        text-align: center;
      }
      td:nth-of-type(3),
      td:nth-of-type(3) p {
        text-align: right;
      }
    }
    tr:last-child {
      td {
        border: none;
      }
    }
  }
  .table-header {
    background: $gray2-color;
    td{
        border:none;
    }
  }
}
</style>