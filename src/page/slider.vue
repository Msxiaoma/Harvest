<template>
    <div class="home">
        <slider :imgArr="imgArr"></slider>
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

