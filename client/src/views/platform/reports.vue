<template>
  <div class="g-content-box">
    <div class="g-page-title">质控报告汇总</div>
    <div class="g-form">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item prop="office">
          <el-select v-model="formInline.office" placeholder="医院">
            <el-option label="医院1" value="医院1"></el-option>
            <el-option label="医院2" value="医院2"></el-option>
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
          <el-button @click="resetForm('formInline')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-table-style">
      <tree-table :data="data" :columns="columns" border/>
    </div>
    <div class="reports-infor">
      <div class="infor-title">《XX医院》处方质控结果报告（示例）：</div>
      <div class="infor-tit">
        针对该医院2018年6月门诊处方共1000张，依据基于CDSS的AI诊疗质控结果，
        并经专家审核，对处方中的不合理用药情况进行统计、分析、发现：
      </div>
      <ul class="infor-con">
        <li>
          不合格处方160张（占16%），其中不规范处方104，用药不适宜（用药与临床诊断不相符、
        用法与用量不适宜、联合用药不适宜）处方4张超常（无适应证用药）处方15张。
        </li>
        <li>
          不合格处方发生例数较多的科室为肾内科、泌尿外科、内分泌科。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import treeTable from '../../components/tableTree/treeTable.vue'
export default {
  components: { treeTable },
  data () {
    return {
      columns: [
        {
          text: '项目',
          value: 'event',
          width: 400
        },
        {
          text: 'AI质控结果',
          value: 'id'
        },
        {
          text: '审核反馈结果',
          value: 'timeLine'
        }
      ],
      data: [
        {
          id: 832,
          event: '合格处方数量',
          timeLine: 840
        },
        {
          id: 168,
          event: '不合格处方数量',
          timeLine: 160,
          children: [
            {
              id: '发生频次',
              event: '',
              timeLine: '构成比%'
            },
            {
              id: 104,
              event: '不规范处方',
              timeLine: 65
            },
            {
              id: 41,
              event: '用药不适宜处方',
              timeLine: 25.6,
              children: [
                {
                  id: 21,
                  event: '适应症不适宜',
                  timeLine: 51.2
                },
                {
                  id: 17,
                  event: '用法用量不适宜',
                  timeLine: 47.5
                }
              ]
            },
            {
              id: 15,
              event: '超常处方',
              timeLine: 9.4,
              children: [
                {
                  id: 14,
                  event: '无适应症用药',
                  timeLine: 93.3
                },
                {
                  id: 1,
                  event: '无正当理由超说明书用药',
                  timeLine: 6.7
                }
              ]
            }
          ]
        },
        {
          id: 1000,
          event: '合计',
          timeLine: 1000
        }
      ],
      formInline: {
        office: '',
        project: '',
        date1: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .infor-title {
    font-size:16px;
    font-weight:bold;
    margin-bottom:10px;
  }
  .infor-tit {
    font-size:14px;
  }
  .infor-con {
    font-size:14px;
    padding-left:20px;
    color:red;
    list-style-type disc
  }

</style>



