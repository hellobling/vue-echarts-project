<template>
  <div class="zk-stat">
    <div class="stat-left">
      <div class="g-page-title">质控统计</div>
      <div class="g-form">
        <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
          <el-form-item prop="hospital">
            <el-select v-model="formInline.hospital" placeholder="选择医院">
              <el-option label="医院1" value="医院1"></el-option>
              <el-option label="医院2" value="医院2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="office">
            <el-select v-model="formInline.office" placeholder="科室">
              <el-option label="科室1" value="科室1"></el-option>
              <el-option label="科室2" value="科室2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="disease">
            <el-select v-model="formInline.disease" placeholder="疾病">
              <el-option label="糖尿病" value="糖尿病"></el-option>
              <el-option label="高血压" value="高血压"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="project">
            <el-select v-model="formInline.project" placeholder="质控项目">
              <el-option label="项目1" value="项目1"></el-option>
              <el-option label="项目2" value="项目2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="上传时间" v-model="formInline.date1"></el-date-picker>
          </el-form-item>

          <el-form-item prop="scoreState">
            <el-select v-model="formInline.scoreState" placeholder="评分状态">
              <el-option label="已评分" value="已评分"></el-option>
              <el-option label="未评分" value="未评分"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
            <el-button @click="resetForm('formInline')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="chartBox">
        <div id="barChart"></div>
      </div>
    </div>
    <div class="stat-right">
      <div class="stat-right-top">
        <div class="lineChart" id="lineChart"></div>
      </div>
      <div class="stat-right-btm">
        <div class="cirqueChart" id="cirqueChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import EleMultSelection from './EleMultSelection.vue'

export default {
  data () {
    return {
      formInline: {
        office: '',
        disease: '',
        project: '',
        date1: '',
        hospital: '',
        scoreState: ''
      },
      options: [
        { value: 'ALL_SELECT', label: 'ALL' },
        { value: '1', label: 'liablePerson1' },
        { value: '2', label: 'liablePerson2' },
        { value: '3', label: 'liablePerson3' },
        { value: '4', label: 'liablePerson4' },
        { value: '5', label: 'liablePerson5' }
      ],
      value5: []

    }
  },
  components: {
    EleMultSelection
  },
  mounted () {
    this.drawLine()
    this.drawCirque()
    this.barChart()
  },
  methods: {
    setSelectResulot (val) {
      this.value5 = val
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('lineChart'))
      var option = {
        color: ['#ffa055', '#4a9dfe', '#33dcbb'],
        title: {
          text: '倒数统计图',
          textStyle: {
            color: '#606473'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          formatter: function (name) {
            return name + ':' + 1
          },
          icon: 'circle', // 设置图例图标
          left: '0',
          top: '40',
          itemWidth: 10,
          itemHeight: 10
        },
        grid: {
          top: '100',
          left: '3%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: { // x轴线颜色
            lineStyle: {
              color: '#c8c8c8'
            }
          },
          axisTick: { // x轴刻度线
            show: false
          },
          data: ['一月', '三月', '五月', '七月', '九月', '十一月']
        },
        yAxis: {
          axisTick: { // y轴刻度线
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#c8c8c8'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#d4d4d4'],
              type: 'dashed'
            }
          },
          type: 'value'
        },
        series: [
          {
            name: '质控总数',
            type: 'line',
            stack: '总量',
            data: [20, 30, 40, 50, 90, 100]
          },
          {
            name: '进口例数',
            type: 'line',
            stack: '总量',
            data: [40, 20, 90, 50, 60, 120]
          },
          {
            name: '国产例数',
            type: 'line',
            stack: '总量',
            data: [10, 70, 30, 40, 50, 100]
          }
        ]
      }
      myChart.setOption(option)
    },
    drawCirque () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('cirqueChart'))
      var e1 = 54
      var e2 = 80
      var e3 = 68
      var option = {
        title: {
          text: '平均得分',
          textStyle: {
            color: '#606473'
          }
        },
        graphic: [{
          type: 'text',
          left: '3%',
          top: '80%',
          cursor: 'default',
          style: {
            text: '进口平均得分',
            fill: '#93959f',
            width: 30,
            height: 30,
            fontSize: 14
          }
        }, {
          type: 'text',
          left: 'center',
          top: '80%',
          cursor: 'default',
          style: {
            text: '总平均得分',
            fill: '#93959f',
            width: 30,
            height: 30,
            fontSize: 14
          }
        }, {
          type: 'text',
          right: '3%',
          top: '80%',
          cursor: 'default',
          style: {
            text: '国产平均得分',
            fill: '#93959f',
            width: 30,
            height: 30,
            fontSize: 14
          }
        }],
        series: [
          {
            name: '进口平均得分',
            type: 'pie',
            radius: ['25%', '35%'],
            center: ['15%', '48%'],
            silent: true,
            avoidLabelOverlap: false,
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                select: false,
                value: e1,
                itemStyle: {
                  color: ['#77b9fd']
                },
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{c}分',
                  fontSize: 18
                }
              },
              {
                value: 100 - e1,
                name: '',
                itemStyle: {
                  color: ['#ebf4f7']
                }
              }
            ]
          },
          {
            name: '总平均得分',
            type: 'pie',
            radius: ['40%', '30%'],
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            silent: true,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: e2,
                itemStyle: {
                  color: ['#ffa85c']
                },
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{c}分',
                  fontSize: 18
                }
              },
              {
                value: 100 - e2,
                name: '',
                itemStyle: {
                  color: ['#ebf4f7']
                }
              }
            ]
          },
          {
            name: '国产平均得分',
            type: 'pie',
            radius: ['25%', '35%'],
            center: ['85%', '48%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            silent: true,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: e3,
                itemStyle: {
                  color: ['#52e3c7']
                },
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{c}分',
                  fontSize: 18
                }
              },
              {
                value: 100 - e3,
                name: '',
                itemStyle: {
                  color: ['#ebf4f7']
                }
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    barChart () {
      let myChart = this.$echarts.init(document.getElementById('barChart'))
      var option = {
        color: ['#4a9dfe', '#585cfa', '#33dcbb', '#3bcdff', '#ffa055'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '60',
          left: '3%',
          right: '3%',
          bottom: '20',
          containLabel: true
        },
        legend: {
          data: ['测试医院一', '淮安市人民医院', '淮安市乡村医院', '苏州市人民医院', '演示医院'],
          icon: 'circle', // 设置图例图标
          left: '0',
          top: '0',
          itemWidth: 10,
          itemHeight: 10
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            axisLine: { // x轴线颜色
              lineStyle: {
                color: '#c8c8c8'
              }
            },
            splitArea: { // 分隔区域样式设置
              show: true
            },
            data: ['2014年', '2015年', '2016年', '2017年', '2018年']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '百分比(%)',
            nameTextStyle: { // ---坐标轴名称样式
              color: '#383838',
              padding: [5, 0, 0, 5] // ---坐标轴名称相对位置
            },
            axisLine: { // x轴线颜色
              show: false,
              lineStyle: {
                color: '#383838'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#d4d4d4'],
                type: 'dashed'
              }
            },
            axisTick: {show: false}
          }
        ],
        series: [
          {
            name: '测试医院一',
            type: 'bar',
            data: [10, 20, 50, 40, 80],
            itemStyle: { // ---图形形状
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: '20', // ---柱形宽度
            barGap: 0

          },
          {
            name: '淮安市人民医院',
            type: 'bar',
            data: [10, 20, 30, 90, 80],
            itemStyle: { // ---图形形状
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: '20', // ---柱形宽度
            barGap: 0

          },
          {
            name: '淮安市乡村医院',
            type: 'bar',
            data: [10, 20, 30, 90, 80],
            itemStyle: { // ---图形形状
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: '20', // ---柱形宽度
            barGap: 0

          },
          {
            name: '苏州市人民医院',
            type: 'bar',
            data: [10, 20, 30, 90, 80],
            itemStyle: { // ---图形形状
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: '20', // ---柱形宽度
            barGap: 0

          },
          {
            name: '演示医院',
            type: 'bar',
            data: [10, 20, 30, 90, 80],
            itemStyle: { // ---图形形状
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: '20', // ---柱形宽度
            barGap: 0

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
  .zk-stat {
    min-height:680px;
    position:relative;
  }
  .chartBox {
    height:420px;
    width:100%;
  }
  #barChart {
    width:100%;
    height:420px;
  }



  .stat-left {
    position:absolute;
    left:0;
    right:400px;
    min-height:680px;
    top:0;
    padding:20px;
    background:#fff;
    box-shadow: 0 4px 10px 0 rgba(206,215,235,.41);
  }
  .stat-right {
    position:absolute;
    right:0;
    top:0;
    width:380px;
  }
  .stat-right-top {
    background: #fff;
    padding:20px;
    box-shadow: 0 4px 16px 0 rgba(206,215,235,.8);
    margin-bottom: 10px;
    height:368px;
  }
  .stat-right-btm {
    height: 300px;
    padding:20px;
    background: #fff;
    box-shadow: 0 4px 16px 0 rgba(206,215,235,.8);
  }
  .lineChart {
    width:100%;
    height:320px;
  }
  .cirqueChart {
    width:100%;
    height:100%;
  }
</style>



