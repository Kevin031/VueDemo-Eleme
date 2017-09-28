<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in goods" v-on:click="menuClick(index,$event)" v-bind:class="index==menuCurrentIndex?'menu-item-selected':'menu-item'">
                    <span class="text">
                        <iconMap v-show="item.type>0" v-bind:iconType="item.type"></iconMap>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" id="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li v-for="item in goods" class="food-list food-list-hook">
                    <h1>{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item" v-on:click="foodDetail(food)">
                            <div class="icon">
                                <img  width="57" height="57" v-bind:src="food.icon"/>
                            </div>
                            <div class="content">
                                <h2>{{food.name}}</h2>
                                <p class="description">{{food.description}}</p>
                                <div class="sell-info">
                                    <span class="sellCount">{{'月售'+ food.sellCount +'份'}}</span>
                                    <span class="rating">{{'好评率'+ food.rating +'%'}}</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>{{food.price}}</span>
                                    <span v-if="food.oldPrice" class="oldPrice">{{'￥' + food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol v-bind:food="food"></cartcontrol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shopCart v-bind:selectedFoods="selectedFoods" v-bind:minPrice="seller.minPrice" v-bind:deliveryPrice="seller.deliveryPrice"></shopCart>
        <myFood v-if="showMyFood" v-bind:food="selectedFood" rel="myFood"></myFood>
        <transition name="fade-backdrop">
            <div class="backdrop" v-show="showBackdrop" v-on:click="hideBackdrop"></div>
        </transition>
    </div>
</template>

<script>

import axios from 'axios'
import iconMap from '../iconMap/iconMap.vue'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import shopCart from '../shopCart/shopCart.vue'
import myFood from '../myFood/myFood.vue'
import Vue from 'vue'
import BScroll from 'better-scroll'

const ERR_OK = 0
const eventHub = new Vue()

export default {
    props: {
        seller: Object
    },
    data () {
        return {
            goods: [],
            listHeight: [],
            foodsScrollY: 0,
            selectedFood: '',
            showMyFood: false
        }
    },
    created () {
        axios.get('static/data.json').then((response) => {
            this.goods = response.data.goods;
            this.$nextTick(() => {
                this._initScroll();
                this._calculateHeight();
            })
        });
    },
    computed: {
        menuCurrentIndex () {
            for (let i = 0, l = this.listHeight.length; i < l; i++) {
                let topHeight = this.listHeight[i];
                let bottomHeight = this.listHeight[i + 1];
                if(!bottomHeight || (this.foodsScrollY >= topHeight && this.foodsScrollY < bottomHeight)) {
                    return i;
                }
            }
            return 0;
        },
        selectedFoods () {
            let foods = [];
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if (food.count) {
                        foods.push(food);
                    }
                });
            });
            return foods;
        },
        showBackdrop () {
            if (this.showMyFood) {
                return true;
            }
            this.showMyFood = false;
            return false;
        }
    },
    methods: {
        _initScroll () {
            this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
                click: true
            });
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                click:true,
                probeType: 3
                //1：滚动的时候会派发scroll事件，会截流。2：滚动的时候实时派发scroll事件，不会截流。 3：除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
            });
            //监听滚动事件
            this.foodsScroll.on('scroll', (pos) => {
                this.foodsScrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight () {
            let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook');
            let height = 0;
            this.listHeight.push(height);
            for(let i = 0, l = foodList.length; i < l; i++) {
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        menuClick (index, event) {
            if (!event._constructed) {
                return;
            }
            this.foodsScroll.scrollTo(0, -this.listHeight[index], 300);
        },
        foodDetail (food) {
            this.selectedFood = food;
            this.$nextTick(() => {
                this.showMyFood = true;
            });
            console.log(this.showMyFood);
        },
        hideBackdrop () {
            this.showMyFood = false;
        }
    },
    components: {
        iconMap,
        cartcontrol,
        shopCart,
        myFood
    }
}

</script>

<style lang="less" rel="stylesheet/less">

    @import '../../common/mixin.less';

    .goods {
        display: flex;
        position: absolute;
        top: 174px;
        bottom: 46px;
        width: 100%;
        overflow: hidden;
        .menu-wrapper {
            flex: 0 0 80px;
            width: 80px;
            background: #f3f5f7;
            margin-top: 2px;
            .menu-item-selected {
                background: white;
                font-weight: 700;
                margin-top: -1px;
            }
            .menu-item,.menu-item-selected {
                position: relative;
                display: table;
                height: 54px;
                line-height: 14px;
                width: 100%;
                padding: 0 12px;
                &:last-child:after {
                    content: none;
                }
                .text {
                    display: table-cell;
                    vertical-align: middle;
                    font-size: 12px;
                    white-space: normal;
                    line-height: 14px;
                    .iconMap {
                        vertical-align: middle;
                    }
                }
            }
            .menu-item:after {
                position: absolute;
                content: '';
                left: 12px;
                width: 56px;
                bottom: 0;
                border-bottom: 1px solid rgba(7,17,27,0.1);
            }
        }
        .foods-wrapper {
            flex: 1;
            margin-top: 2px;
            .food-list {
                h1 {
                    height: 26px;
                    line-height: 26px;
                    padding-left: 12px;
                    font-size: 12px;
                    color: rgb(147,153,159);
                    background: #f3f5f7;
                    border-left: 2px solid #d9dde1;
                    margin-top: 0;
                }
                .food-item {
                    position: relative;
                    display: flex;
                    margin: 0 18px;
                    padding: 18px 0;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    &:last-child {
                        border-bottom: none;
                    }
                    .content {
                        flex: 1;
                        padding-left: 10px;
                        h2 {
                            margin: 2px 0 8px 0;
                            font-size: 14px;
                            line-height: 14px;
                            height: 14px;
                            font-weight: 700;
                            color: rgb(7,17,27);
                        }
                        .sell-info,.description {
                            font-size: 10px;
                            color: rgb(147,153,159);
                            line-height: 10px;
                            .sellCount {
                                margin-right: 4px;
                            }
                        }
                        .description {
                            font-size: 10px;
                            margin-bottom: 8px;
                            line-height: 12px;
                        }
                        .price {
                            font-size: 10px;
                            font-weight: 700;
                            line-height: 24px;
                            .newPrice {
                                font-size: 14px;
                                color: rgb(240,20,20);
                                .unit {
                                    font-size: 10px;
                                    font-weight: normal;
                                }
                            }
                            .oldPrice {
                                text-decoration: line-through;
                                color: rgb(147,153,159);
                                padding-left: 4px;
                            }
                        }
                        .cartcontrol-wrapper {
                            position: absolute;
                            right: 0;
                            bottom: 12px;
                            z-index: 20;
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
            z-index: 20;
            &.fade-backdrop-enter-active, &.fade-backdrop-leave-active {
                transition: opacity 0.5s;
            }
            &.fade-backdrop-enter, &.fade-backdrop-leave-active {
                opacity: 0;
            }
        }
    }

</style>
