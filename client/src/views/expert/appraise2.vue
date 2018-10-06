<template>
  <div class="g-content-box">
    <div class="appraise-title1">病案质控评价</div>
    <div class="appraise-table1">
      <el-table
      :data="tableData1"
      :header-cell-style="{
            'background-color': '#C4EBFF',
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
      tableData1: [{
        pjx: '主治医师信息',
        aipj: '高风险',
        aism: '主治医师未填写',
        zjpj: '',
        zjsm: ''
      }, {
        pjx: '责任护士信息',
        aipj: '无风险',
        aism: '责任护士未填写',
        zjpj: '',
        zjsm: ''
      }, {
        pjx: '实际住院天数',
        aipj: '无风险',
        aism: '',
        zjpj: '',
        zjsm: ''
      }, {
        pjx: '药物过敏史完整清晰',
        aipj: '高风险',
        aism: '药物过敏史士未填写',
        zjpj: '',
        zjsm: ''
      }],
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
    indexMethod (index) {
      return index + 1
    }
  }
}
</script>
<style lang="stylus" scoped>
  .appraise-title1 {
    font-family: PingFangSC-Semibold;
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



