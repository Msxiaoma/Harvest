<template>
    <div class="harvest">
        <!-- 图片轮播 -->
        <img :src="imgArr[currrentIndex-1]" class="box-left-img" width="243" height="380">
        <img :src="imgArr[currrentIndex]" class="box-center-img" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" width="243" height="380">
        <img :src="imgArr[currrentIndex+1]" class="box-right-img" width="243" height="380">
    </div>
</template>

<script>
    export default {
        props: {
            imgArr: Array
        },
        data() {
            return {
                currrentIndex: 1,
                moveX: 0,
                endX: 0
            }
        },
        watch: {
            currrentIndex(newVal, oldVal) {
                if(newVal == 7) {
                    this.currrentIndex = 1
                } 
                if (newVal == 0) {
                    this.currrentIndex = 6
                }
            }
        },
        methods: {
            touchStart(e) {
                this.moveX = e.targetTouches[0].pageX
            },
            touchMove(e) {
                 this.endX = e.targetTouches[0].pageX - this.moveX
            },
            touchEnd() {
                if (this.endX > 40) {
                    console.log('右滑')
                    this.currrentIndex--
                } 
                if(this.endX < -40) {
                    console.log('左滑')
                    this.currrentIndex++
                }
            }
        }
    }
</script>

<style>
    body {
        background: #e2e2e257;
        overflow: hidden;
    }
    
    .harvest {
        margin-top: 2rem;
        height: 10rem;
    }
    
    .box-center-img {
        position: relative;
        height: 8.2rem;
        width: 6.3rem;
        background: burlywood;
        display: inline-block;
        border-radius: 0.2rem;
    }
    
    .box-left-img {
        height: 7.6rem;
        float: left;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        margin-left: -4.5rem;
        margin-right: 0.2rem;
        margin-top: 0.3rem;
    }
    
    .box-right-img {
        background: red;
        height: 7.6rem;
        float: right;
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
        margin-left: 0.2rem;
        margin-top: 0.3rem;
        margin-right: -4.45rem;
    }
</style>


