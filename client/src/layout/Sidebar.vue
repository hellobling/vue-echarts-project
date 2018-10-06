<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo"  text-color="#fff"  active-text-color="#fff" :default-active="menudefaultOpenLink" unique-opened router @open="handleOpen">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.link" :key="item.link">
            <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
            <el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.link">
              <template slot="title" ><i :class="subItem.icon" style="padding-left:10px;"></i>{{ subItem.name }}</template>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.link" :key="item.link">
            <template slot="title" ><i :class="item.icon"></i>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          index: '1',
          name: '1-1质控申请',
          link: '/hospital/apply',
          icon: 'el-icon-menu'
        },
        {
          index: '2',
          name: '1-2质控列表',
          link: '/hospital/list',
          icon: 'el-icon-menu'
        },
        {
          index: '3',
          name: '1-3质控评价报告',
          link: '/hospital/report',
          icon: 'el-icon-menu'
        },
        {
          index: '4',
          name: '2-1质控分配',
          link: '/manage/distribution',
          icon: 'el-icon-menu'
        },
        {
          index: '5',
          name: '2-2质控列表',
          link: '/expert/list',
          icon: 'el-icon-menu'
        },
        {
          index: '6',
          name: '2-3质控评价',
          link: '/expert/appraise',
          icon: 'el-icon-menu'
        },
        {
          index: '9',
          name: '4-1质控报告汇总',
          link: '/platform/reports',
          icon: 'el-icon-menu'
        },
        {
          index: '7',
          name: '4-2质控统计',
          link: '/manage/statistics',
          icon: 'el-icon-menu'
        },
        {
          index: '8',
          name: '4-3质控地图',
          link: '/platform/map',
          icon: 'el-icon-menu'
        },
        {
          index: '9',
          name: 'test',
          link: '/test/test',
          icon: 'el-icon-menu'
        }
        ]
      }
    },
    mounted: function () {},
    computed: {
      menudefaultOpenLink  () {
        // var path = this.$route.path
        return this.$route.path
      }
    },
    methods: {
      handleOpen: function (index, indexPath) {
        this.$router.push(indexPath[0])
      }
    }
  }
</script>

<style lang="stylus">
  .sidebar{
    display: block;
  }
  .sidebar > ul {
    height:100%;
  }
  .el-menu{
      border-right:none;
      background:none;
    }
  .el-menu-item.is-active{
    background:rgba(40,219,182,.5);
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background:rgba(40,219,182,.5);
  }
</style>
