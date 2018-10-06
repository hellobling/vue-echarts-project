<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="layout-top">
      <v-head></v-head>
    </div>
    <div class="layout-menu">
      <v-sidebar class="sidebar-container"></v-sidebar>
    </div>
    <div class="layout-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue'
  import vSidebar from './Sidebar.vue'
  import appMain from './AppMain.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      vHead, vSidebar, appMain
    },
    computed: {
      sidebar () {
        return this.$store.state.sidebar
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/styles/mixin.styl";
  .app-wrapper {
    height: 100%;
    width:100%;
    overflow:hidden;
    &.hideSidebar {
      transform: translate(-150px, 0);
      .sidebar-container {
        transform: translate(132px, 0);
      }
    }

    .sidebar-container {
      height:100%;
      transition: all .28s ease-out;
      overflow-y: auto;
    }

    .layout-top{
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      font-size: 22px;
      background: #29456e;
      color: #fff;
      }
    .layout-menu{
      display: block;
      position: absolute;
      left: 0;
      top: 60px;
      bottom: 0;
      width:180px;
      background:#223e66 url(../assets/images/menu-bg.png) no-repeat left top;
      overflow-y: scroll;
      }
    .layout-container{
      position: absolute;
      left: 180px;
      right: 0;
      top: 60px;
      bottom: 0;
      overflow-y:scroll;
      transition: left .3s ease-in-out;
      background: #f5f5f5;
      }
  }
</style>
