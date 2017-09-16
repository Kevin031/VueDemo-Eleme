<template lang="html">
    <div class="shopCart">
        <div class="content">
            <div class="content-left" v-on:click="listToggle">
                <div class="logo-wrapper">
                    <div class="badge" v-show="totalCount">
                        {{totalCount}}
                    </div>
                    <div class="logo" v-bind:class="{'active':totalPrice}">
                        <i class="icon-shopping_cart"></i>
                    </div>
                </div>
                <div class="price" v-bind:class="{'active':totalPrice}">
                    ￥{{totalPrice}}
                </div>
                <div class="desc">
                    另需要配送费￥{{deliveryPrice}}元
                </div>
            </div>
            <div class="content-right" v-bind:class="{'enough':totalPrice >= minPrice}">
                {{payDesc}}
            </div>
        </div>
        <div class="transHeight">
            <div class="shopcart-list" v-show="listShow">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty" v-on:click="setEmpty()">清空</span>
                </div>
                <div class="list-content" ref="foodlist">
                    <ul>
                        <li class="food" v-for="food in selectedFoods">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price * food.count}}</span>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <cartcontrol :food="food"></cartcontrol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <transition name="fade-backdrop">
            <div class="backdrop" v-show="showBackdrop" v-on:click="hideBackdrop"></div>
        </transition>
    </div>
</template>

<script>

import cartcontrol from '../cartcontrol/cartcontrol.vue'
import BScroll from 'better-scroll'

export default {
    props: {
        selectedFoods: {
            type: Array,
            default: []
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            listShow: false
        }
    },
    computed: {
        totalPrice () {
            let total = 0;
            this.selectedFoods.forEach((food) => {
                if (food.count) {
                    total += food.price * food.count;
                }
            });
            return total;
        },
        totalCount () {
            let count = 0;
            this.selectedFoods.forEach((food) => {
                count += food.count;
            });
            return count;
        },
        payDesc () {
            let diff = this.minPrice - this.totalPrice;
            if (!this.totalPrice) {
                return `￥${this.minPrice} 起送`;
            } else if (diff > 0) {
                return `还差￥${diff}元`;
            } else {
                return '去结算';
            }
        },
        showBackdrop () {
            if (this.listShow && this.totalPrice) {
                return true;
            }
            this.listShow = false;
            return false;
        }
    },
    methods: {
        _initScroll () {
            this.foodlistScroll = new BScroll(this.$refs.foodlist, {
                click: true
            });
        },
        hideBackdrop () {
            this.listShow = false;
        },
        listToggle () {
            if (!this.selectedFoods.length) {
                return;
            }
            this.listShow = !this.listShow;
            this.$nextTick(() => {
                if (!this.foodlistScroll) {
                    this._initScroll();
                } else {
                    this.foodlistScroll.refresh();
                }
            });
        },
        setEmpty () {
            this.selectedFoods.forEach((food) => {
                food.count = 0;
            });
        }
    },
    components: {
        cartcontrol
    }
}

</script>

<style lang="less" rel="stylesheet/less">

.shopCart {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    z-index: 10;
    .content {
        position: relative;
        z-index: 50;
        display: flex;
        background: #141d27;
        .content-left {
            flex: 1;
            height: 48px;
            .logo-wrapper {
                display: inline-block;
                vertical-align: top;
                position: relative;
                height: 56px;
                line-height: 56px;
                border-radius: 50%;
                width: 56px;
                top: -10px;
                background: #141d27;
                margin: 0 12px;
                padding: 6px;
                box-sizing: border-box;
                text-align: center;
                .badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: rgb(240,20,20);
                    color: white;
                    width: 24px;
                    height: 16px;
                    line-height: 12px;
                    font-size: 9px;
                    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);
                    font-weight: 700;
                    border-radius: 16px;
                    text-align: center;
                }
                .logo {
                    width: 100%;
                    height: 100%;
                    background: #2b343c;
                    border-radius: 50%;
                    font-size: 24px;
                    color: #80858a;
                    line-height: 48px;
                    font-weight: 700;
                    &.active {
                        background: rgb(0,160,220);
                        color: white;
                    }
                }
            }
            .price {
                display: inline-block;
                vertical-align: top;
                font-size: 16px;
                margin-top: 12px;
                padding-right: 12px;
                box-sizing: border-box;
                color: rgba(255,255,255,0.4);
                font-weight: 700;
                line-height: 24px;
                border-right: 1px solid rgba(255,255,255,0.1);
                &.active {
                    color: white;
                }
            }
            .desc {
                position: relative;
                display: inline-block;
                vertical-align: top;
                margin: 12px 0 0 12px;
                color: rgba(255,255,255,0.4);
                font-size: 10px;
                font-weight: 700;
                line-height: 24px;
            }
        }
        .content-right {
            flex: 0 0 105px;
            color: rgba(255,255,255,0.4);
            font-size: 12px;
            font-weight: 700;
            background: #2b343c;
            line-height: 45px;
            text-align: center;
            &.enough {
                background: #00b43c;
                color: white;
            }
        }
    }
    .transHeight {
        position: relative;
        z-index:20;
        bottom: 48px;
        .shopcart-list {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
            transform: translate3d(0,-100%,0);
            z-index: -1;
            overflow: hidden;
            &.transHeight-enter-active, &.transHeight-leave-active {
                transition: all 0.5s;
            }
            &.transHeight-enter, &.transHeight-leave-active {
                transform: translate3d(0,0,0);
            }
            .list-header {
                height: 40px;
                line-height: 40px;
                background: #f3f5f7;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                .title {
                    display: inline-block;
                    font-size: 14px;
                    font-weight: 200;
                    color: rgb(7,17,27);
                    padding-left: 18px;
                }
                .empty {
                    position: absolute;
                    right: 8px;
                    font-size: 12px;
                    color: rgb(0,160,220);
                    padding: 0 10px;
                }
            }
            .list-content {
                max-height: 217px;
                overflow: hidden;
                .food {
                    position: relative;
                    display: flex;
                    height: 48px;
                    margin: 0 18px;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    .name {
                        flex: 1;
                        font-size: 14px;
                        color: rgb(7,17,27);
                        line-height: 48px;
                        font-weight: 700;
                    }
                    .price {
                        font-size: 14px;
                        font-weight: 700;
                        color: rgb(240,20,20);
                        padding: 0 12px 0 18px;
                        line-height: 48px;
                    }
                    .cartcontrol-wrapper {
                        font-size: 14px;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
    .backdrop {
        position: fixed;
        background: rgba(7,17,27,0.6);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(10px);
        z-index: -1;
        &.fade-backdrop-enter-active, &.fade-backdrop-leave-active {
            transition: opacity 0.5s;
        }
        &.fade-backdrop-enter, &.fade-backdrop-leave-active {
            opacity: 0;
        }
    }
}

</style>