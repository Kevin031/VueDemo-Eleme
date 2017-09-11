<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  name: 'app',
  data () {
    return {

    };
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
