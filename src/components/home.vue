<template>
    <div class="home">
        <slider :imgArr="imgArr"></slider>
    </div>
</template>

<script>
    import Slider from './slider.vue'
    export default {
        components: {
            Slider
        },
        data () {
            return {
                width: 243,
                height: 380,
                imgArr: [require('../assets/img/1.jpeg'), require('../assets/img/2.jpeg'), require('../assets/img/3.jpeg'), require('../assets/img/4.jpeg'), require('../assets/img/5.jpeg'), require('../assets/img/6.jpeg'), require('../assets/img/7.jpg'), require('../assets/img/8.jpeg')]
            }
        }
    }
</script>

