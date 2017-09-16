<template lang="html">
    <div class="ratingsWrapper" ref="ratingsWrapper">
        <div class="ratings-content">
            <div class="info">
                <div class="mark">
                    <div class="num">
                        30
                    </div>
                    <div class="text">综合评分</div>
                    <div class="contrast">高于周边商家98%</div>
                </div>
                <div class="stars">
                    <div class="stars">
                        <div class="serviceScore">
                            <span class="text">服务态度</span>
                            <star v-bind:size="36"></star>
                            <span class="num">98</span>
                        </div>
                        <div class="foodScore">
                            <span class="text">服务态度</span>
                            <star v-bind:size="36"></star>
                            <span class="num">97</span>
                        </div>
                        <div class="deliveryTime">
                            <span class="text">送达时间</span>
                            <span class="time">38分钟</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="evaluation">
                <div class="classify">
                    <span class="item active bad badActive">123</span>
                    <span class="item active">456</span>
                    <span class="item active bad">789</span>
                </div>
                <div class="switch">
                    <span class="icon-check_circle"></span>
                    <span class="text">只看有内容的评价</span>
                </div>
                <div class="evel-list">
                    <ul>
                        <li class="evel">
                            <div class="avatar">
                                <img width="28" height="28" />
                            </div>
                            <div class="content">
                                <div class="user">
                                    <span class="name">123132</span>
                                    <span class="rateTime">2017.10.05</span>
                                </div>
                                <div class="star-wrapper">
                                    <star v-bind:size="24"></star>
                                    <div class="deliveryTime">40分钟送达</div>
                                </div>
                                <div class="text">
                                    很好吃，包装也很不错
                                </div>
                                <div class="recommend">
                                    <span class="icon icon-thumb_up"></span>
                                    <span class="dish">123</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import star from '../star/star.vue'

export default {
    components: {
        star
    } 
}

</script>

<style lang="less" rel="stylesheet/less">

.ratingsWrapper {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
.ratings-content {
    .info {
        display: flex;
        .mark {
            flex: 0 0 138px;
            margin: 18px 0;
            background-color: rgba(255,255,255,0);
            border-right: 1px solid rgba(7,17,27,0.1);
            text-align: center;
            .num {
                font-size: 24px;
                color: rgb(255,153,0);
                line-height: 28px;
            }
            .text {
                padding: 6px 0 8px 0;
                font-size: 12px;
                color: rgb(7,17,27);
                line-height: 12px;
            }
            .contrast {
                font-size: 10px;
                color: rgb(7,17,27);
                line-height: 10px;
                margin-bottom: 6px;
            }
        }
        .stars {
            padding: 18px 24px;
            .serviceScore, .foodScore, .deliveryTime {
                display: flex;
                margin-bottom: 8px;
                .text {
                    font-size: 12px;
                    color: rgb(7,17,27);
                    line-height: 18px;
                    margin-right: 12px;
                }
                .num {
                    font-size: 12px;
                    line-height: 18px;
                    color: rgb(255,153,0);
                    padding-left: 12px;
                }
            }
            .deliveryTime {
                margin-bottom: 0;
                .time {
                    font-size: 12px;
                    color: rgb(147,153,159);
                    line-height: 18px;
                }
            }
        }
    }
    .evaluation {
        padding: 18px 0;
        position: relative;
        .classify {
            padding-bottom: 18px;
            margin: 0 18px;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            .item {
                display: inline-block;
                font-size: 12px;
                padding: 8px 12px;
                line-height: 16px;
                background: rgba(0,160,220,0.2);
                color: rgb(77,85,95);
                margin-right: 8px;
                .count {
                    font-size: 8px;
                    paddding: 8px 12px;
                }
                &.active {
                    color: white;
                    background: rgb(0,169,220);
                }
                &.bad {
                    background: rgba(77,85,93,0.2);
                }
                &.badActive {
                    background: #4d555d;
                }
            }
        }
        .switch {
            font-size: 12px;
            width: 100%;
            padding: 12px 0 12px 18px;
            color: rgb(147,153,159);
            border-bottom: 1px solid rgba(7,17,27,0.1);
            .icon-check_circle {
                font-size: 24px;
                vertical-align: middle;
                &.on {
                    color: #00c850;
                }
            }
        }
    }
    .evel-list {
        .evel {
            display: flex;
            padding: 18px 0;
            margin: 0 18px;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            .avatar {
                flex: 0 0 28px;
                margin-right: 12px;
                img {
                    border-radius: 50%;
                }
            }
            .content {
                flex: 1;
                .user {
                    font-size: 10px;
                    color: rgb(7,17,27);
                    line-height: 12px;
                    .rateTime {
                        position: absolute;
                        font-weight: 200;
                        right: 18px;
                        color: rgb(147,153,159);
                    }
                }
                .star-wrapper {
                    font-size: 0;
                    padding-top: 4px;
                    margin-bottom: 6px;
                    .star {
                        display: inline-block;
                    }
                    .deliveryTime {
                        font-size: 10px;
                        padding-left: 6px;
                        font-weight: 200;
                        color: rgb(147,153,159);
                    }
                }
                .text {
                    font-size: 12px;
                    color: rgb(7,17,27);
                    line-height: 18px;
                }
                .recommend {
                    padding-top: 4px;
                    .icon {
                        font-size: 12px;
                        color: rgb(0,160,220);
                        line-height: 16px;
                    }
                    .dish {
                        display: inline-block;
                        font-size: 9px;
                        color: rgb(147,153,159);
                        line-height: 16px;
                    }
                }
            }
        }
    }
}

</style>