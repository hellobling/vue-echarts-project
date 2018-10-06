<template>
  <div class="app-main">
    <div >
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    components: {

    },
    mounted () {},
    computed: {
      key () {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }

  }
</script>
<style lang="stylus" scoped>
.app-main{
  min-width:1000px;
  padding:20px;
  }
</style>


