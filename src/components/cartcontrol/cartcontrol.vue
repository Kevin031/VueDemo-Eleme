<template lang="html">
    <div class="cartcontrol">
        <div class="fadeRotate">
            <div class="cart-decrease" v-show="food.count>0" v-on:click.stop.prevent="decreaseCart($event)">
                <span class="icon-remove_circle_outline inner"></span>
            </div>
        </div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add" v-on:click.stop.prevent="addCart($event)">
            <i class="icon-add_circle"></i>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'

export default {
    props: {
        food: Object
    },
    methods: {
        addCart (event) {
            if (!event._constructed) {   //阻止非Vue事件
                return;
            }
            if (!this.food.count) {
                Vue.set(this.food, 'count', 0)
            }
            this.food.count++;
        },
        decreaseCart () {
            if (!event._constructed) {   //阻止非Vue事件
                return;
            }
            this.food.count--;
        }
    }
}

</script>

<style lang="less" rel="stylesheet/less">

.cartcontrol {
    .fadeRotate {
        display: inline-block;
        .cart-decrease {
            display: inline-block;
            padding: 6px;
            transition: all .4s linear;
            .inner {
                line-height: 24px;
                font-size: 24px;
                color: rgb(0,160,220);
                transition: all .4s linear;
            }
        }
    }
    .cart-count {
        display: inline-block;
        vertical-align: top;
        font-size: 10px;
        color: rgb(147,153,159);
        line-height: 24px;
        text-align: center;
        padding: 6px 0;
    }
    .cart-add {
        display: inline-block;
        vertical-align: top;
        font-size: 24px;
        color: rgb(0,160,220);
        line-height: 24px;
        padding: 6px;
    }
}

</style>