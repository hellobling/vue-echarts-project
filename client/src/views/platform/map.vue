<template>
  <div class="zk-map">
    <div class="map-left">
      <div class="map-chartBox">
        <div id="mapCharts"></div>
      </div>
    </div>
    <div class="map-right">
      <div class="map-right-top">
        <div class="item">
          <i class="icon  icon1"></i>
          <div class="item-con">
            <div class="name">指控总数</div>
            <div class="num">500</div>
          </div>
        </div>
        <div class="item">
          <i class="icon icon2"></i>
          <div class="item-con">
            <div class="name">质控医院</div>
            <div class="num">18</div>
          </div>
        </div>
      </div>
      <div class="map-right-btm">
        <div class="barChart2" id="barChart2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../node_modules/echarts/map/js/china.js'
export default {
  mounted () {
    this.barCharts()
    this.mapChart()
  },
  methods: {
    barCharts () {
      let myChart = this.$echarts.init(document.getElementById('barChart2'))
      let newEcharts = this.$echarts
      var option = {
        title: {
          text: '质控数据',
          textStyle: {
            color: '#606473'
          }
        },
        tooltip: {
          trigger: 'item' // 悬浮提示框不显示
        },
        grid: { // 绘图区调整
          x: 60, // 左留白
          y: 40, // 上留白
          x2: 10, // 右留白
          y2: 10 // 下留白
        },
        xAxis: [
          {
            show: false,
            type: 'value',
            boundaryGap: [0, 0],
            position: 'top'
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: ['未质控', '已质控', '总数'],
            axisLine: {show: false}, // 坐标轴
            axisTick: [{ // 坐标轴小标记
              show: false
            }],
            axisLabel: {
              textStyle: {
                fontSize: '14',
                color: '#747474'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            tooltip: {show: false},
            barMinHeight: 20, // 最小柱高
            cursor: 'default',
            barWidth: 20, // 柱宽度
            barMaxWidth: 100, // 最大柱宽度
            data: [20, 480, 500],
            itemStyle: {
              normal: { // 柱状图颜色
                barBorderRadius: [2, 20, 20, 2],
                color: function (params) {
                  // 我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                  var colorList = [
                    ['#38caac', '#58f3d4', '#86f3dd'],
                    ['#4e9ffe', '#6eb4fe', '#9dd2ff'],
                    ['#ff7203', '#ff8628', '#ffa157']

                  ]

                  var index = params.dataIndex
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length
                  }
                  return new newEcharts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      {offset: 0, color: colorList[index][0]},
                      {offset: 1, color: colorList[index][2]}
                    ])
                },

                label: {
                  show: true, // 显示文本
                  position: 'inside', // 数据值位置
                  textStyle: {
                    color: '#717171',
                    fontSize: '14'
                  }
                }
              }
            }
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    mapChart () {
      let myChart = this.$echarts.init(document.getElementById('mapCharts'))
      // function randomData () {
      //   return Math.round(Math.random() * 500)
      // }
      var option = {
        title: {
          x: 'left',
          text: '质控地图',
          textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#565656'
          },
          left: 20,
          top: 10
        },
        tooltip: {
          trigger: 'item',
          padding: [20, 20],
          formatter: function (params) {
            var res = params.name + '<br/>'
            var myseries = option.series
            for (var i = 0; i < myseries.length; i++) {
              for (var j = 0; j < myseries[i].data.length; j++) {
                if (myseries[i].data[j].name === params.name) {
                  res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>'
                }
              }
            }
            return res
          }
        },
        visualMap: {
          min: 0,
          max: 500,
          left: 20,
          bottom: 40,
          hoverLink: false,
          orient: 'horizontal',
          text: ['500', '0'], // 文本，默认为数值文本
          color: ['#48affa', '#88f0e2', '#e4e5e5'],
          calculable: false
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            name: '质控数',
            roam: false,
            data: [
              {name: '北京', value: '100'},
              {name: '天津', value: '200'},
              {name: '上海', value: '200'},
              {name: '重庆', value: '200'},
              {name: '河北', value: '200'},
              {name: '河南', value: '200'},
              {name: '云南', value: '200'},
              {name: '辽宁', value: '200'},
              {name: '黑龙江', value: '200'},
              {name: '湖南', value: '200'},
              {name: '安徽', value: '200'},
              {name: '山东', value: '200'},
              {name: '新疆', value: '200'},
              {name: '江苏', value: '400'},
              {name: '浙江', value: '400'},
              {name: '江西', value: '400'},
              {name: '湖北', value: '400'},
              {name: '广西', value: '400'},
              {name: '甘肃', value: '400'},
              {name: '山西', value: '400'},
              {name: '内蒙古', value: '400'},
              {name: '陕西', value: '400'},
              {name: '吉林', value: '400'},
              {name: '福建', value: '300'},
              {name: '贵州', value: '300'},
              {name: '广东', value: '300'},
              {name: '青海', value: '300'},
              {name: '西藏', value: '1'},
              {name: '四川', value: '1'},
              {name: '宁夏', value: '1'},
              {name: '海南', value: '1'},
              {name: '台湾', value: '1'},
              {name: '香港', value: '1'},
              {name: '澳门', value: '1'}
            ]
          },
          {
            type: 'map',
            mapType: 'china',
            name: '质控医院',
            roam: false,
            data: [
              {name: '北京', value: '100'},
              {name: '天津', value: '1'},
              {name: '上海', value: '1'},
              {name: '重庆', value: '1'},
              {name: '河北', value: '1'},
              {name: '河南', value: '1'},
              {name: '云南', value: '1'},
              {name: '辽宁', value: '1'},
              {name: '黑龙江', value: '1'},
              {name: '湖南', value: '1'},
              {name: '安徽', value: '1'},
              {name: '山东', value: '1'},
              {name: '新疆', value: '1'},
              {name: '江苏', value: '2'},
              {name: '浙江', value: '2'},
              {name: '江西', value: '2'},
              {name: '湖北', value: '2'},
              {name: '广西', value: '2'},
              {name: '甘肃', value: '2'},
              {name: '山西', value: '2'},
              {name: '内蒙古', value: '2'},
              {name: '陕西', value: '2'},
              {name: '吉林', value: '2'},
              {name: '福建', value: '2'},
              {name: '贵州', value: '2'},
              {name: '广东', value: '2'},
              {name: '青海', value: '2'},
              {name: '西藏', value: '2'},
              {name: '四川', value: '2'},
              {name: '宁夏', value: '2'},
              {name: '海南', value: '2'},
              {name: '台湾', value: '6'},
              {name: '香港', value: '6'},
              {name: '澳门', value: '6'}
            ]
          },
          {
            type: 'map',
            mapType: 'china',
            name: '已质控',
            roam: false,
            data: [
              {name: '北京', value: '100'},
              {name: '天津', value: '80'},
              {name: '上海', value: '80'},
              {name: '重庆', value: '80'},
              {name: '河北', value: '80'},
              {name: '河南', value: '80'},
              {name: '云南', value: '80'},
              {name: '辽宁', value: '80'},
              {name: '黑龙江', value: '80'},
              {name: '湖南', value: '80'},
              {name: '安徽', value: '80'},
              {name: '山东', value: '80'},
              {name: '新疆', value: '80'},
              {name: '江苏', value: '80'},
              {name: '浙江', value: '80'},
              {name: '江西', value: '10'},
              {name: '湖北', value: '10'},
              {name: '广西', value: '10'},
              {name: '甘肃', value: '10'},
              {name: '山西', value: '10'},
              {name: '内蒙古', value: '10'},
              {name: '陕西', value: '10'},
              {name: '吉林', value: '10'},
              {name: '福建', value: '10'},
              {name: '贵州', value: '10'},
              {name: '广东', value: '10'},
              {name: '青海', value: '5'},
              {name: '西藏', value: '5'},
              {name: '四川', value: '5'},
              {name: '宁夏', value: '5'},
              {name: '海南', value: '5'},
              {name: '台湾', value: '5'},
              {name: '香港', value: '5'},
              {name: '澳门', value: '5'}
            ]
          },
          {
            type: 'map',
            mapType: 'china',
            name: '未质控',
            roam: false,
            data: [
              {name: '北京', value: '100'},
              {name: '天津', value: '70'},
              {name: '上海', value: '40'},
              {name: '重庆', value: '30'},
              {name: '河北', value: '60'},
              {name: '河南', value: '30'},
              {name: '云南', value: '70'},
              {name: '辽宁', value: '20'},
              {name: '黑龙江', value: '40'},
              {name: '湖南', value: '60'},
              {name: '安徽', value: '40'},
              {name: '山东', value: '20'},
              {name: '新疆', value: '40'},
              {name: '江苏', value: '50'},
              {name: '浙江', value: '80'},
              {name: '江西', value: '100'},
              {name: '湖北', value: '40'},
              {name: '广西', value: '200'},
              {name: '甘肃', value: '150'},
              {name: '山西', value: '30'},
              {name: '内蒙古', value: '40'},
              {name: '陕西', value: '50'},
              {name: '吉林', value: '50'},
              {name: '福建', value: '50'},
              {name: '贵州', value: '50'},
              {name: '广东', value: '2'},
              {name: '青海', value: '2'},
              {name: '西藏', value: '2'},
              {name: '四川', value: '2'},
              {name: '宁夏', value: '2'},
              {name: '海南', value: '2'},
              {name: '台湾', value: '2'},
              {name: '香港', value: '2'},
              {name: '澳门', value: '2'}
            ]
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .zk-map {
    min-height:680px;
    position:relative;
  }
  .map-left {
    position:absolute;
    left:0;
    right:340px;
    bottom:0;
    top:0;
    padding:20px;
    background:#fff;
    box-shadow: 0 4px 10px 0 rgba(206,215,235,.41);
  }
  .map-right {
    position:absolute;
    right:0;
    top:0;
    width:320px;
  }
  .map-right-top {
    padding:0 20px;
    background: #fff;
    box-shadow: 0 4px 16px 0 rgba(206,215,235,.8);
    margin-bottom: 10px;
    .item {
      height:148px;
      border-bottom: 1px solid #f0f0f0;
      position:relative;
      .icon {
        width:52px;
        height:52px;
        position:absolute;
        left:40px;
        top:50px;
      }
      .item-con {
        padding-left:130px;
        padding-top:40px;
        .name {
          font-family: 'PingFangSC-Regular';
          font-size: 16px;
          color: #666;
          line-height: 20px;
          margin-bottom: 12px;
        }
        .num {
          font-family: 'DINAlternate-Bold';
          font-size: 42px;
          color: #333;
          line-height: 36px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .map-right-btm {
    height: 226px;
    padding:20px;
    background: #fff;
    box-shadow: 0 4px 16px 0 rgba(206,215,235,.8);
  }
  .barChart2 {
    width:100%;
    height:100%;
  }
  .icon.icon1 {
    background:url(../../assets/images/map-icon1.png) no-repeat center;
    background-size:100% 100%;
  }
  .icon.icon2 {
    background:url(../../assets/images/map-icon2.png) no-repeat center;
    background-size:100% 100%;
  }
  .map-chartBox {
    width:100%;
    height:100%;
  }
  #mapCharts {
    width:100%;
    height:100%;
  }
</style>



