<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li class="menu-item-selected">
                    <span class="text">粥类</span>
                </li>
                <li class="menu-item">
                    <span class="text">小吃</span>
                </li>
                <li class="menu-item">
                    <span class='text'>饮品</span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" id="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li class="food-list food-list-hook">
                    <h1>粥类</h1>
                    <ul>
                        <li class="food-item">
                            <div class="icon">
                                <img  width="57" height="57" src="src/components/goods/img/nanguazhou-icon.jpeg"/>
                            </div>
                            <div class="content">
                                <h2>南瓜粥</h2>
                                <p class="description">有点甜</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售11份</span>
                                    <span class="rating">好评率98%</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>15</span>
                                    <span class="oldPrice">￥18</span>
                                </div>
                            </div>
                        </li>
                        <li class="food-item">
                            <div class="icon">
                                <img  width="57" height="57" src="src/components/goods/img/hongdouyimimeifuzhou-icon.jpeg"/>
                            </div>
                            <div class="content">
                                <h2>红豆薏米美肤粥</h2>
                                <p class="description">美肤噢</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售11份</span>
                                    <span class="rating">好评率98%</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>15</span>
                                    <span class="oldPrice">￥18</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="food-list food-list-hook">
                    <h1>小吃</h1>
                    <ul>
                        <li class="food-item">
                            <div class="icon">
                                <img  width="57" height="57" src="src/components/goods/img/xianbing-icon.jpeg"/>
                            </div>
                            <div class="content">
                                <h2>馅饼</h2>
                                <p class="description">里面有牛肉</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售11份</span>
                                    <span class="rating">好评率98%</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>15</span>
                                    <span class="oldPrice">￥18</span>
                                </div>
                            </div>
                        </li>
                        <li class="food-item">
                            <div class="icon">
                                <img  width="57" height="57" src="src/components/goods/img/babaojiangcai-icon.jpeg"/>
                            </div>
                            <div class="content">
                                <h2>八宝酱菜</h2>
                                <p class="description">里面有牛肉</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售11份</span>
                                    <span class="rating">好评率98%</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>15</span>
                                    <span class="oldPrice">￥18</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="food-list food-list-hook">
                    <h1>饮品</h1>
                    <ul>
                        <li class="food-item">
                            <div class="icon">
                                <img  width="57" height="57" src="src/components/goods/img/jiaduobao-icon.jpeg"/>
                            </div>
                            <div class="content">
                                <h2>加多宝</h2>
                                <p class="description">下下火</p>
                                <div class="sell-info">
                                    <span class="sellCount">月售11份</span>
                                    <span class="rating">好评率98%</span>
                                </div>
                                <div class="price">
                                    <span class="newPrice"><span class="unit">￥</span>15</span>
                                    <span class="oldPrice">￥18</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
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
                width: 56px;
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
                    }
                }
            }
        }
    }

</style>
