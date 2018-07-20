<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import pertest from './util/pertest'
  import {mapMutations} from 'vuex'
  
  export default {
    created() {
      window.addEventListener('load', () => {
        let promise = pertest.testStart
        promise.then((data) => {
          this.setList(data)
        })
      })
    },
    methods: {
      ...mapMutations(['setList'])
    }
  }
</script>

