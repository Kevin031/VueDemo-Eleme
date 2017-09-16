<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view v-bind:seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import axios from 'axios'

const ERR_OK = 0

export default {
  data () {
    return {
      seller: {},
      title: '123'
    };
  },
  created() {
    axios.get('static/data.json').then((response) => {
      this.seller = response.data.seller;
    });
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  
  @import "./common/index.less";

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
    .border-1px (rgba(7,17,27,0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: rgb(77,85,93);
        &.active {
          font-size: 14px;
          color: rgb(240,20,20);
        }
      }
    }
  }

</style>
