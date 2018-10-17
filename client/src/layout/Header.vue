<template>
  <div>
    <div class="logo">
      <a href="javascript:;">
        <img src="" alt="">
      </a>
    </div>
    <div class="header-name">
      监控系统
    </div>
    <div class="navbar">

    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        opened: false
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      toggleSideBar () {
        $(this).toggleClass('is-active')
        this.$store.dispatch('ToggleSideBar')
      }
    },
    components: {
    }
  }
</script>

<style lang="stylus"  scoped>
  .logo {
    float:left;
    padding-top:20px;
    padding-left:20px;
    img {
      width:142px;
      height:20px;
    }
  }
  .header-name {
    float:left;
    margin-left:40px;
    padding-top:18px;
    font-size:16px;
    color:#fff;
  }
  .navbar {
    border-radius: 0px !important;
    background-color: #eef1f6;
    z-index: 1000;
    background:#29456e;
    .login {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 65px;
      li {
        display: inline-block;
      }
    }
    .fa-bars{
      cursor: pointer;
      line-height: 50px;
      height: 50px;
      float: left;
      padding: 0 15px;
      border:none;
    }
    .fa-bars[isactive] {
      transform: rotate(90deg);
      border:none;
    }
    .screenfull{
      position: absolute;
      right: 90px;
      top: 14px;
      color: red;
    }
  }
  .navbar[isactive] {
    left: 30px;
  }
</style>



