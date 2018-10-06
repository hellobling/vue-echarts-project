<template>
  <div class="g-content-box">
    <div class="g-page-title">质控评价报告</div>
    <div class="g-form">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item prop="office">
          <span class="g-red">*</span>
          <el-select v-model="formInline.office" placeholder="科室">
            <el-option label="科室1" value="科室1"></el-option>
            <el-option label="科室2" value="科室2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="disease">
          <span class="g-red">*</span>
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
          <el-button @click="resetForm('formInline')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-table-style">
      <el-table
        :header-cell-style="{
            'background-color': '#f4f4f4',
            'color': '#494949'
        }"
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          prop="xuhao"
          label="序号"
          align="center"
          width="50px">
        </el-table-column>
        <el-table-column
          prop="oldnum"
          label="源编号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="keshi"
          label="科室"
          align="center">
        </el-table-column>
        <el-table-column
          prop="jb"
          label="疾病"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          align="center"
          width="80px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="zkxm"
          label="质控项目"
          align="center">
        </el-table-column>
        <el-table-column
          prop="scsj"
          label="上传时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="pfsj"
          label="评价时间"
          align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="appraise-title1 title2">诊断质控评价</div>
    <div class="appraise-table1">
      <el-table
      :data="tableData2"
      :header-cell-style="{
          'background-color': '#EAE8FF',
          'color': '#494949',
        }"
      border
      style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="pjx"
          label="评价项"
          align="center">
        </el-table-column>
        <el-table-column
          prop="aipj"
          label="AI评价"
          align="center">
        </el-table-column>
        <el-table-column
          prop="aism"
          label="AI说明"
          align="center">
        </el-table-column>
        <el-table-column
          prop="zjpj"
          label="专家评价"
          align="center">
        </el-table-column>
        <el-table-column
          prop="zjsm"
          label="专家说明"
          align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="appraise-title1 title3">处方质控评价</div>
    <div class="appraise-table1">
      <el-table
      :data="tableData3"
      :header-cell-style="{
          'background-color': '#FFDDDD',
          'color': '#494949',
        }"
      border
      style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="pjx"
          label="评价项"
          align="center">
        </el-table-column>
        <el-table-column
          prop="aipj"
          label="AI评价"
          align="center">
        </el-table-column>
        <el-table-column
          prop="aism"
          label="AI说明"
          align="center">
        </el-table-column>
        <el-table-column
          prop="zjpj"
          label="专家评价"
          align="center">
        </el-table-column>
        <el-table-column
          prop="zjsm"
          label="专家说明"
          align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        office: '',
        disease: '',
        project: '',
        date1: '',
        state: '',
        scoreState: ''
      },
      tableData: [{
        xuhao: '1',
        oldnum: 'XH10765',
        keshi: '消化科',
        jb: '肠胃炎',
        age: '18',
        zkxm: '膝关节',
        state: '0',
        pfState: '0',
        scsj: '2018-9-10',
        pfsj: '2018-9-15'
      }],
      multipleSelection: [],
      currentPage: 1,
      tableData2: [{
        pjx: '诊断关联符合要求',
        aipj: '无风险',
        aism: '',
        zjpj: '同意',
        zjsm: ''
      }, {
        pjx: '误诊漏诊疾病情况',
        aipj: '低风险',
        aism: '漏诊高血脂',
        zjpj: '',
        zjsm: '同意'
      },
      {
        pjx: '诊断流程符合规范',
        aipj: '无风险',
        aism: '',
        zjpj: '',
        zjsm: '同意'
      }],
      tableData3: [{
        pjx: '用药适宜性要求',
        aipj: '高风险',
        aism: '已接受单药治疗仍未达标，依据指南，建议改为双药治疗',
        zjpj: '不同意',
        zjsm: '单药治疗再坚持一个疗程'
      },
      {
        pjx: '无药物相互作用',
        aipj: '无风险',
        aism: '',
        zjpj: '同意',
        zjsm: ''
      },
      {
        pjx: '无配伍禁忌',
        aipj: '无风险',
        aism: '',
        zjpj: '同意',
        zjsm: ''
      },
      {
        pjx: '无人群禁忌',
        aipj: '无风险',
        aism: '',
        zjpj: '同意',
        zjsm: ''
      },
      {
        pjx: '无症状禁忌',
        aipj: '无风险',
        aism: '',
        zjpj: '同意',
        zjsm: ''
      }]
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
    },
    indexMethod (index) {
      return index + 1
    }
  }
}
</script>
<style lang="stylus" scoped>
.appraise-title1 {
    font-family: 'PingFangSC-Semibold';
    font-size: 18px;
    margin-bottom:10px;
    color: #3EABE2;
  }
  .appraise-table1 {
    box-shadow: 0 2px 10px 8px rgba(225,234,246,0.50);
    margin-bottom:30px;
  }
  .appraise-title1.title2 {
    color: #4E85FF;
  }
  .appraise-table1 {
    box-shadow: 0 2px 10px 8px rgba(237,232,248,0.50);
    margin-bottom:30px;
  }
  .appraise-title1.title3 {
    color: #FC7272;
  }
</style>



