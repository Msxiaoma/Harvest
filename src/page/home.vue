<template>
    <div class="home">
        <p class="component-intro">基于Vue 2.0的移动端组件库</p>
        <div class="home-content">
            <div class="home-row">
                <span class="change-router">组件1：</span><router-link to="/silder" class="change-router">触摸左右滑动图片</router-link>
            </div>
            
        </div>
       
    </div>
</template>

<script>
    import Slider from '@/components/slider.vue'
    export default {
        components: {
            Slider
        },
        data () {
            return {
                width: 243,
                height: 380,
                imgArr: [require('@/assets/img/slider/1.jpeg'), require('../assets/img/slider/2.jpeg'), require('../assets/img/slider/3.jpeg'), require('../assets/img/slider/4.jpeg'), require('../assets/img/slider/5.jpeg'), require('../assets/img/slider/6.jpeg'), require('../assets/img/slider/7.jpg'), require('../assets/img/slider/8.jpeg')]
            }
        }
    }
</script>
<style>
.home-row{
    padding: 0rem .4rem;
}
</style>


