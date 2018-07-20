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
                imgArr: [require('@/assets/img/slider/1.jpg'), require('../assets/img/slider/2.jpg'), require('../assets/img/slider/3.jpg'), require('../assets/img/slider/4.jpg'), require('../assets/img/slider/5.jpg'), require('../assets/img/slider/6.jpg'), require('../assets/img/slider/7.jpg'), require('../assets/img/slider/8.jpg')]
            }
        }
    }
</script>

