<template>
  <div class="g-content-box">
    <div class="map-chartBox">
      <div id="mapCharts"></div>
    </div>
  </div>
</template>
<script>
import '../../../node_modules/echarts/map/js/china.js'
export default {
  mounted () {
    this.mapChart()
  },
  methods: {
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
      // var timer = null
      // var total = 11
      // var count = 1
      // var count1 = 0
      autohover()
      function autohover (data) {
        var count = 0
        var timeTicket = null
        var dataLength = 11
        timeTicket && clearInterval(timeTicket)
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0

          })
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
          })
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
          })
          count++
        }, 1000)
        myChart.on('mouseover', function (params) {
          clearInterval(timeTicket)
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
          })
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex
          })
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex
          })
        })
        myChart.on('mouseout', function (params) {
          timeTicket && clearInterval(timeTicket)
          timeTicket = setInterval(function () {
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0
            })
            myChart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: (count) % dataLength
            })
            myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: (count) % dataLength
            })
            count++
          }, 1000)
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.map-chartBox {
  width:800px;
  height:800px;
}
#mapCharts {
  width:100%;
  height:100%;
}
</style>


