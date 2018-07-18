<template>
    <div class="harvest">
        <p class="component-intro">触摸左右滑动图片</p>
        <!-- 图片轮播 -->
        <img :src="imgArr[leftIndex]" class="box-left-img" :class="{'slide-leave-corner-left':showLeftLeave}">
        <img :src="imgArr[currentIndex]" class="box-center-img" :class="{'slide-leave-right':showRightLeave, 'slide-leave-left':showLeftLeave}" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" >
        <img :src="imgArr[rightIndex]" class="box-right-img" :class="{'slide-leave-corner-right':showRightLeave}">
        <ul class="picture-index">
            <li v-for="(item, index) in imgArr" :key="index" :class="{'active-index': currentIndex === index}"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            imgArr: Array
        },
        data() {
            return {
                leftIndex: this.imgArr.length - 1,
                currentIndex: 0,
                rightIndex:1,
                moveX: 0,
                endX: 0,
                showRightLeave: false,
                showLeftLeave: false
            }
        },
        methods: {
            touchStart(e) {
                this.moveX = e.targetTouches[0].pageX
            },
            touchMove(e) {
                 this.endX = e.targetTouches[0].pageX - this.moveX
                 if (this.endX > 40) {
                    this.showRightLeave = true
                } 
                if(this.endX < -40) {
                    this.showLeftLeave = true
                }
            },
            touchEnd() {
                 if (this.endX > 40) {
                    this.rightIndex = this.currentIndex
                    this.currentIndex = this.leftIndex
                    if(this.leftIndex === 0) {
                        this.leftIndex = this.imgArr.length - 1
                    } else {
                        this.leftIndex--
                    }
                } 
                if(this.endX < -40) {
                    this.leftIndex = this.currentIndex
                    this.currentIndex = this.rightIndex 
                    if(this.rightIndex === (this.imgArr.length - 1)) {
                        this.rightIndex = 0
                    } else {
                        this.rightIndex++
                    }
                }
                this.endX = 0
                this.showRightLeave = false
                this.showLeftLeave = false
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
        overflow: hidden;
        max-width: 7.5rem;
    }
    
    .box-center-img {
        position: relative;
        height: 8.2rem;
        width: 6.3rem;
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
        width: 4.88rem;
    }
    
    .box-right-img {
        float: right;
        height: 7.6rem;
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
        margin-left: 0.2rem;
        margin-top: 0.3rem;
        margin-right: -4.45rem;
        width: 4.86rem;
    }
    .slide-leave-right {
         transform: translateX(20px);
         opacity: 0.6; 
         transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
          -webkit-transform:scaleY(0.9);
         -moz-transform:scaleY(0.9);
    }
    .slide-leave-corner-right{
         transform: translateX(20px);
         opacity: 0.6; 
         transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
         -webkit-transform:scaleY(1.1);
         -moz-transform:scaleY(1.1);
    }
   
    .slide-leave-left{
         transform: translateX(-20px);
         opacity: 0.6; 
         transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        -webkit-transform:scaleY(0.9);
         -moz-transform:scaleY(0.9);
    }
     .slide-leave-corner-left{
         transform: translateX(-20px);
         opacity: 0.6; 
         transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
         -webkit-transform:scaleY(1.1);
         -moz-transform:scaleY(1.1);
    }
    .picture-index {
        margin: 0 auto;
        display: block;
        width: 1.2rem;
    }
   .picture-index li {
        float: left;
        list-style:none;
        width: 6px;
        height: 6px;
        margin: 0rem .02rem;
        background: #dadada;
        border-radius: 50%;
    }
    .active-index{
        background: #000000!important;
    }
</style>


