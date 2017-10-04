<template lang="html">
    <div>
        <transition name="myFood">
            <div class="my-food">
                <img height="350" width="100%" v-bind:src="food.image">
                <div class="title">
                    {{food.name}}
                </div>
                <div class="info">
                    {{'月售'+food.sellCount+'份&nbsp;&nbsp;好评率'+food.rating+'%'}}
                </div>
                <div class="price">
                    {{'￥'+food.price}}
                </div>
                <div class="add" v-on:click="foodAddCart($event)">
                    <span>加入购物车</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            food: Object
        },
        methods: {
            foodAddCart (event) {
                this.$root.eventHub.$emit('detail.hide', event.target);
                this.$set(this.food, 'count', 1);
                this.$root.eventHub.$emit('cart.add', event.target);
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">

@keyframes foodshow {
    from {
        height: 200px;
        width: 40%;
        margin-top: -100px;
        left: 30%;
        opacity: 0;
    }
    to {
        height: 500px;
        width: 80%;
        margin-top: -250px;
        left: 10%;
        opacity: 1;
    }
}

@-webkit-keyframes foodshow {
    from {
        height: 200px;
        width: 40%;
        margin-top: -100px;
        left: 30%;
        opacity: 0;
    }
    to {
        height: 500px;
        width: 80%;
        margin-top: -250px;
        left: 10%;
        opacity: 1;
    }
}

.my-food {
    height: 500px;
    width: 80%;
    position: fixed;
    background-color: #fff;
    z-index: 999;
    top: 50%;
    margin-top: -250px;
    left: 10%;
    border-radius: 10px;
    overflow: hidden;
    animation: foodshow 0.4s;
    -webkit-animation: foodshow 0.4s;
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 10px;
    }
    .info {
        margin-left: 10px;
        margin-top: 5px;
        color: #93999f;
        font-size: 12px;
        font-weight: 400;
    }
    .price {
        font-size: 20px;
        font-weight: 600;
        color: red;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
    }
    .add {
        float: right;
        margin-top: 20px;
        margin-right: 10px;
        background-color: #44a8f2;
        padding: 5px 20px;
        color: #fff;
        border-radius: 15px;
    }
}
</style>