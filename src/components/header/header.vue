<template lang="html">
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img src="../../assets/images/seller_avatar_256px.jpg" width="64" height="64" />
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">美味粥坊</span>
                </div>
                <div class="description">
                    正宗美味 / 15分钟送达
                </div>
                <div class="supports">
                    <div class="supports_desc">
                        <span class="icon"></span>
                        <span class="text">该商家支持发票,请下单写好发票抬头</span>
                    </div>
                </div>
            </div>
            <div class="support-count" v-on:click="showDetails()">
                <span class="count">5个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" v-on:click="showDetails()">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">这是商家公告</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="fade-page" v-if="detailShow">
            <div class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">美味粥坊</h1>
                        <div class="star-wrapper">
                            <v-star></v-star>
                        </div>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <ul class="supports">
                            <li class="support-item">
                                <span class="icon decrease"></span>
                                <span class="text">该商家支持发票,请下单写好发票抬头</span>
                            </li>
                            <li class="support-item">
                                <span class="icon decrease"></span>
                                <span class="text">该商家支持发票,请下单写好发票抬头</span>
                            </li>
                            <li class="support-item">
                                <span class="icon decrease"></span>
                                <span class="text">该商家支持发票,请下单写好发票抬头</span>
                            </li>
                            <li class="support-item">
                                <span class="icon decrease"></span>
                                <span class="text">该商家支持发票,请下单写好发票抬头</span>
                            </li>
                            <li class="support-item">
                                <span class="icon decrease"></span>
                                <span class="text">该商家支持发票,请下单写好发票抬头</span>
                            </li>
                        </ul>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>
                        <div class="bulletin">这是商家公告</div>
                    </div>
                </div>
                <div class="detail-close" v-on:click="hideDetails()">
                    <i class="icon-close"></i>
                </div>
            </div>
        </div>
        <div class="background">
            <img src="../../assets/images/seller_avatar_256px.jpg" width="100%" height="100%" />
        </div>
    </div>
</template>

<script>
    
    import star from '../star/star.vue'

    export default {
        prop: {

        },
        components: {
            'v-star':star
        },
        data() {
            return {
                detailShow: false
            }
        },
        methods: {
            showDetails() {
                this.detailShow = true;
            },
            hideDetails() {
                this.detailShow = false;
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">

@import '../../common/mixin';

.header {
    position: relative;
    background: rgba(7,17,27,0.5);
    color: #fff;
    blur: 10px;
    overflow: hidden;
    .content-wrapper {
        position: relative;
        display: flex;
        padding: 24px 12px 18px 24px;
        font-size: 12px;
        .avatar {
            img {
                border-radius: 2px;
            }
        }
        .content {
            margin-left: 16px;
            .title {
                margin-left: 2px 0 8px 0;
                font-size: 16px;
                .brand {
                    display: inline-block;
                    vertical-align: top;
                    width: 30px;
                    height: 18px;
                    background: url('img/brand@2x.png');
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                }
                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }
            }
            .description {
                font-size: 12px;
                margin-bottom: 10px;
            }
            .supports {
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background: url('img/invoice_1@2x.png');
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                }
                .text {
                    line-height: 12px;
                    font-size: 10px;
                    position: relative;
                    bottom: 1px;
                }
            }
        }
        .support-count {
            position: absolute;
            right: 12px;
            bottom: 18px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            border-radius: 14px;
            background-color: rgba(0,0,0,0.2);
            text-align: center;
            .count {
                vertical-align: top;
                font-size: 10px;
            }
            .icon-keyboard_arrow_right {
                font-size: 10px;
                margin-left: 2px;
                line-height: 24px;
            }
        }
    }
    .bulletin-wrapper {
        position: relative;
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: rgba(7,17,27,0.2);
        .bulletin-title {
            display: inline-block;
            vertical-align: top;
            margin-top: 8px;
            width: 22px;
            height: 12px;
            background: url('img/bulletin@2x.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .bulletin-text {
            font-size: 10px;
            vertical-align: middle;
            margin: 0 4px;
        }
        .icon-keyboard_arrow_right {
            position: absolute;
            font-size: 10px;
            right: 12px;
            top: 8px;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(10px);
        z-index: -1;
    }
    .fade-page {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background: rgba(7,17,27,0.8);
        .detail {
            backdrop-filter: blur(10px);
            .detail-wrapper {
                min-height: 100%;
                width: 100%;
                .detail-main {
                    margin-top: 64px;
                    padding-bottom: 64px;
                    .name {
                        font-size: 16px;
                        color: rgb(255,255,255);
                        font-weight: 700;
                        width: 100%;
                        line-height: 16px;
                        text-align: center;
                    }
                    .star-wrapper {
                        margin: 16px 11px 28px 0;
                        text-align: center;
                    }
                    .title {
                        display: flex;
                        width: 80%;
                        margin: 0 auto 24px auto;
                        .line {
                            display: inline-block;
                            flex: 1;
                            background: rgba(255,255,255,0.2);
                            height: 1px;
                            margin: auto;
                        }
                        .text {
                            padding: 0 12px;
                            font-size: 14px;
                            font-weight: 700;
                        }
                    }
                    .supports {
                        padding: 0 0 28px 36px;
                        .support-item {
                            color: rgb(255,255,255);
                            padding: 0 6px 12px 16px;
                            .text {
                                vertical-align: middle;
                                font-size: 12px;
                                font-weight: 200;
                                color: rgb(255,255,255);
                                line-height: 12px;
                            }
                            .icon {
                                display: inline-block;
                                vertical-align: middle;
                                width: 16px;
                                height: 16px;
                                margin-right: 6px;
                                background-size: 100% 100%!important;
                                background-repeat: no-repeat;
                                &.decrease {
                                    background: url('img/decrease_2@2x.png');
                                }
                                &.discount {
                                    background: url('img/discount_2@2x.png');
                                }
                                &.guarantee {
                                    background: url('img/guarantee_2@2x.png');
                                }
                                &.invoice {
                                    background: url('img/invoice_2@2x.png');
                                }
                                &.special {
                                    background: url('img/special_2@2x.png');
                                }
                            }
                        }
                    }
                    .bulletin {
                        padding: 0 48px;
                        font-size: 12px;
                        font-weight: 200;
                        color: rgb(255,255,255);
                        line-height: 24px;
                    }
                }
            }
        }
    }
    .detail-close {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
        color: rgba(255,255,255,0.5);
    }
}

</style>