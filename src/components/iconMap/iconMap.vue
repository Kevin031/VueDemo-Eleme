<template lang="html">
  <span class="iconMap" v-bind:class="iconClassMap[iconType]"></span>
</template>

<script>

export default {
    props: {
        iconType: Number
    },
    created () {
        this.iconClassMap = ['decrease','discount','special','invoice','guarantee']
    }
}

</script>

<style lang="less" rel="stylesheet/less">

@import '../../common/mixin.less';

.iconMap {
    display: inline-block;
    width: 12px;
    height: 12px;
    &.decrease {
        background: url('img/decrease_4@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    &.discount {
        background: url('img/discount_4@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    &.guarantee {
        background: url('img/guarantee_4@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    &.invoice {
        background: url('img/invoice_4@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    &.special {
        background: url('img/special_4@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}

</style>