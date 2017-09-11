<template>
  <div id="star">
    <span class="star-item star-48 on"></span>
  </div>
</template>

<script>

</script>

<style lang="less" rel="stylesheet/less">
  
    @import "../../common/mixin.less";

    #star {
        .star-item {
            display: inline-block;
            background-repeat: no-repeat;
        }
        &.star-48 {
            .star-item {
                width: 20px;
                height: 20px;
                margin-right: 22px;
                background-size: 100% 100%;
            }
        }
    }

</style>
