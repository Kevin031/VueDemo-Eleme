<template lang="html">
    <div class="seller-wrapper" ref="sellerWrapper">
        <div class="seller-content">
            <div class="info">
                <div class="title">
                    <div class="text">{{seller.name}}</div>
                    <div class="star-wrapper">
                    <star v-bind:size="36" v-bind:score="seller.score"></star>
                        <span class="rate-count">{{seller.ratingCount}}</span>
                        <span class="sell-count">月售{{seller.sellCount}}单</span>
                    </div>
                    <div class="collect" v-on:click="collectflag=!collectflag">
                        <span class="icon-favorite" v-bind:class="{'active':collectflag}"></span>
                        <span class="text">{{collectflag?'已收藏':'收藏'}}</span>
                    </div>
                </div>
                <div class="remark">
                    <div class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="num">{{seller.minPrice}}</span>元
                        </div>
                    </div>
                    <div class="block">
                        <h2>商家配送</h2>
                        <div class="content">
                            <span class="num">{{seller.deliveryPrice}}</span>元
                        </div>
                    </div>
                    <div class="block">
                        <h2>平均配送时间</h2>
                        <div class="content">
                            <span class="num">{{seller.deliveryTime}}</span>分钟
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="activities">
                <div class="bulletin">
                    <h1>公告与活动</h1>
                    <div class="content">{{seller.bulletin}}</div>
                </div>
            </div>
            <div class="supports">
                <ul>
                    <li class="item" v-for="item in seller.supports">
                        <iconMap v-bind:iconType="item.type"></iconMap>
                        <span class="text">{{item.description}}</span>
                    </li>
                </ul>
            </div>
            <div class="divider"></div>
            <div class="seller-imgs">
                <h1>商家实景</h1>
                <div class="img-wrapper" ref="picsWrapper">
                    <div class="picList" ref="picList">
                        <img v-for="pic in seller.pics" v-bind:src="pic" width="120" height="90">
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="seller-info">
                <h1>商家信息</h1>
                <ul class="info-list">
                    <li class="info" v-for="info in seller.infos">{{info}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import BScroll from 'better-scroll'
import star from '../star/star.vue'
import iconMap from '../iconMap/iconMap.vue'

export default {
    components: {
        star: star,
        iconMap: iconMap
    },
    props: {
        seller: {
            type: Object
        }
    },
    data () {
        return {
            collectflag: false
        }
    },
    mounted () {
        this.$nextTick(() => {
            this._initSellerScroll();
            this._initPicScroll();
        })
    },
    methods: {
        _initSellerScroll () {
            if (!this.sellerScroll) {
                this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
                    click: true
                });
            } else {
                this.sellerScroll.refresh();
            }
        },
        _initPicScroll () {
            if (this.seller.pics) {
                let picW = 120;
                let margin = 6;
                let w = (picW + margin) * this.seller.pics.length - margin;
                this.$refs.picList.style.width = w + "px";
                this.$nextTick(() => {
                    if (!this.picScroll) {
                        this.picScroll = new BScroll(this.$refs.picsWrapper, {
                            scrollX: true,
                            eventPassthrough: 'vertical',
                            click: true
                        })
                    } else {
                        this.picScroll.refresh();
                    }
                });
            }
        }
    }
}

</script>

<style lang="less" rel="stylesheet/less">

.seller-wrapper {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    .seller-content {
        width: 100%;
        height: 1000px;
        .info {
            padding: 18px 0;
            margin: 0 18px;
            .title {
                padding-bottom: 18px;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                .text {
                    font-size: 14px;
                    color: rgb(7,17,27);
                    line-height: 14px;
                }
                .star-wrapper {
                    padding-top: 8px;
                    font-size: 0;
                    .star {
                        display: inline-block;
                        vertical-align: top;
                    }
                    .rate-count, .sell-count {
                        display: inline-block;
                        font-size: 10px;
                        color: rgb(77,85,93);
                        line-height: 18px;
                    }
                    .rate-count {
                        padding: 0 12px 0 8px;
                    }
                }
                .collect {
                    position: absolute;
                    top: 18px;
                    right: 8px;
                    width: 50px;
                    text-align: center;
                    .icon-favorite {
                        font-size: 24px;
                        line-height: 24px;
                        color: #d4d6d9;
                        &.active {
                            color: rgb(240,20,20);
                        }
                    }
                    .text {
                        display: block;
                        font-size: 10px;
                        color: rgb(77,85,93);
                        line-height: 10px;
                        padding-top: 4px;
                    }
                }
            }
            .remark {
                display: flex;
                .block {
                    flex: 1;
                    margin-top: 18px;
                    text-align: center;
                    border-right: 1px solid rgba(7,17,27,0.1);
                    &:last-child {
                        border: none;
                    }
                    h2 {
                        font-size: 10px;
                        color: rgb(147,153,159);
                        line-height: 10px;
                        margin-bottom: 4px;
                    }
                    .content {
                        font-size: 10px;
                        color: rgb(7,17,27);
                        line-height: 24px;
                        font-weight: 200;
                        .num {
                            position: relative;
                            top: 2px;
                            font-size: 24px;
                        }
                    }
                }
            }
        }
        .activities {
            padding-top: 18px;
            .bulletin {
                margin: 0 18px;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                h1 {
                    font-size: 14px;
                    color: #07111b;
                    line-height: 14px;
                }
                .content {
                    padding: 8px 12px 16px 12px;
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(240,20,20);
                    line-height: 24px;
                }
            }
        }
        .supports {
            margin: 0 18px;
            .item {
                padding: 16px;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                font-size: 0;
                .iconMap {
                    width: 16px;
                    height: 16px;
                    vertical-align: top;
                    margin-right: 6px;
                }
                .text {
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(7,17,27);
                    line-height: 16px;
                }
            }
        }
        .seller-imgs {
            margin: 18px;
            white-space: nowrap;
            overflow: hidden;
            h1 {
                font-size: 14px;
                line-height: 14px;
                margin-bottom: 12px;
            }
            img {
                margin-right: 6px;
            }
        }
        .seller-info {
            h1 {
                font-size: 14px;
                margin: 0 18px;
                padding: 18px 0 12px 0;
                border-bottom: 1px solid rgba(7,17,27,0.1);
            }
            .info-list {
                .info {
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(7,17,27);
                    line-height: 16px;
                    padding: 16px 12px;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    &:last-child {
                        border: none;
                    }
                }
            }
        }
    }
}

</style>