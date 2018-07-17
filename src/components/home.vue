<template>
    <div class="home">
        <picture-harvest :imgArr="imgArr"></picture-harvest>
    </div>
</template>

<script>
    import pictureHarvest from './picture.vue'
    export default {
        components: {
            pictureHarvest
        },
        data () {
            return {
                imgArr: [require('../assets/img/6.jpeg'),require('../assets/img/1.jpeg'), require('../assets/img/2.jpeg'), require('../assets/img/3.jpeg'), require('../assets/img/4.jpeg'), require('../assets/img/5.jpeg'), require('../assets/img/6.jpeg'),require('../assets/img/1.jpeg')]
            }
        }
    }
</script>

