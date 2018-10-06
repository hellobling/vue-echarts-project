<template>
  <div class="g-content-box">
    <div class="appraise-box">
      <div class="appraise-bill">
        <table class="table-style" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <td colspan="3">病&nbsp;&nbsp;案</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="7"  style="width:30%;">基本信息</td>
              <td>性别</td>
              <td>男</td>
            </tr>
            <tr>
              <td>国籍</td>
              <td>中国</td>
            </tr>
            <tr>
              <td>民族</td>
              <td>汉族</td>
            </tr>
            <tr>
              <td>年龄</td>
              <td>50</td>
            </tr>
            <tr>
              <td>出生日期</td>
              <td>1968/1/9</td>
            </tr>
            <tr>
              <td>身高</td>
              <td>180cm</td>
            </tr>
            <tr>
              <td>体重</td>
              <td>90kg</td>
            </tr>
            <tr>
              <td rowspan="6">住院信息</td>
              <td>是否住院</td>
              <td>是</td>
            </tr>
            <tr>
              <td>入院时间</td>
              <td>2018/8/20</td>
            </tr>
            <tr>
              <td>入院科别</td>
              <td>眼科</td>
            </tr>
            <tr>
              <td>出院时间</td>
              <td>2018/9/20</td>
            </tr>
            <tr>
              <td>出院科别</td>
              <td>内分泌科</td>
            </tr>
            <tr>
              <td>实际住院天数</td>
              <td>21</td>
            </tr>
            <tr>
              <td rowspan="4">责任人</td>
              <td>责任护士</td>
              <td></td>
            </tr>
            <tr>
              <td>主治医师</td>
              <td>武城</td>
            </tr>
            <tr>
              <td>主治医师</td>
              <td></td>
            </tr>
            <tr>
              <td>住院医师</td>
              <td>伟朝</td>
            </tr>
            <tr>
              <td>过敏史</td>
              <td>药物过敏</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="9">检验检查</td>
              <td>空腹血糖</td>
              <td>7.66mmol/L</td>
            </tr>
            <tr>
              <td>OGTT</td>
              <td>10.0mmol/L</td>
            </tr>
            <tr>
              <td>糖化血红蛋白</td>
              <td>7.17%</td>
            </tr>
            <tr>
              <td>血清肌酐</td>
              <td>120umol/L</td>
            </tr>
            <tr>
              <td>总胆固醇</td>
              <td>4.66mmol/L</td>
            </tr>
            <tr>
              <td>高密度脂蛋白胆固醇</td>
              <td>1.17mmol/L</td>
            </tr>
            <tr>
              <td>低密度脂蛋白胆固醇</td>
              <td>4.17mmol/L</td>
            </tr>
            <tr>
              <td>甘油三酯</td>
              <td>3.5mmol/L</td>
            </tr>
            <tr>
              <td>血钾</td>
              <td>2.9mmol/L</td>
            </tr>
          </tbody>
        </table>
        <table class="table-style bg-col2" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <td colspan="2">诊&nbsp;&nbsp;断</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width:30%;">主要诊断</td>
              <td>2型糖尿病</td>
            </tr>
            <tr>
              <td>其他诊断</td>
              <td>视网膜病变</td>
            </tr>
          </tbody>
        </table>
        <table class="table-style bg-col3" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <td colspan="2">处&nbsp;&nbsp;方</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width:30%;">药品</td>
              <td>瑞格列奈</td>
            </tr>
            <tr>
              <td>用法</td>
              <td>餐前15分钟</td>
            </tr>
            <tr>
              <td>用量</td>
              <td>每次1片，每天2-3次</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="appraise-right">
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
              width="60"
              align="center">
            </el-table-column>
            <el-table-column
              prop="pjx"
              label="评价项"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              label="AI评价"
              width="80"
              align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.aipj }}</span>
                <el-popover trigger="hover" placement="top" v-if="scope.row.aipj!=='无风险'">
                  <p class="tips-style">{{ scope.row.aipj }}</p>
                  <div slot="reference" class="name-wrapper">
                      <i class="el-icon-view"></i>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="zjpj"
              label="专家评价"
              width="120"
              align="center">
              <template slot-scope="scope">
                <el-select v-model="scope.row.agree" placeholder="请选择">
                  <el-option
                    v-for="item in scope.row.zjpj"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              prop="txyj"
              label="意见"
              align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row.txyj" placeholder="请输入内容" clearable></el-input>
              </template>
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
              width="60"
              align="center">
            </el-table-column>
            <el-table-column
              prop="pjx"
              label="评价项"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="aipj"
              label="AI评价"
              width="80"
              align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.aipj }}</span>
                <el-popover trigger="hover" placement="top" v-if="scope.row.aipj!=='无风险'">
                  <p class="tips-style">{{ scope.row.tips }}</p>
                  <div slot="reference" class="name-wrapper">
                      <i class="el-icon-view"></i>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="zjpj"
              label="专家评价"
              width="120"
              align="center">
              <template slot-scope="scope">
                <el-select v-model="scope.row.agree" placeholder="请选择">
                  <el-option
                    v-for="item in scope.row.zjpj"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              prop="txyj"
              label="意见"
              align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row.txyj" placeholder="请输入内容" clearable></el-input>
              </template>
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
              width="60"
              align="center">
            </el-table-column>
            <el-table-column
              prop="pjx"
              label="评价项"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="aipj"
              label="AI评价"
              width="80"
              align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.aipj }}</span>
                <el-popover trigger="hover" placement="top" v-if="scope.row.aipj!=='无风险'">
                  <p class="tips-style">{{ scope.row.tips }}</p>
                  <div slot="reference" class="name-wrapper">
                      <i class="el-icon-view"></i>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="zjpj"
              label="专家评价"
              width="120"
              align="center">
              <template slot-scope="scope">
                <el-select v-model="scope.row.agree" placeholder="请选择">
                  <el-option
                    v-for="item in scope.row.zjpj"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              prop="txyj"
              label="意见"
              align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row.txyj" placeholder="请输入内容" clearable></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="appraise-btn-box">
          <el-button round class="btn-style">暂存</el-button>
          <el-button round class="btn-style">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData1: [
        {
          pjx: '责任护士信息',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        },
        {
          pjx: '实际住院天数',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        }
      ],
      tableData2: [
        {
          pjx: '诊断关联符合要求',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        },
        {
          pjx: '误诊漏诊疾病情况',
          aipj: '低风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          tips: '漏诊高脂血症',
          txyj: '',
          agree: ''
        }
      ],
      tableData3: [
        {
          pjx: '用药适宜性要求',
          aipj: '高风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          tips: '已接受单药治疗仍未达标，依据指南，建议改为双药治疗',
          txyj: '',
          agree: ''
        },
        {
          pjx: '无药物相互作用',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        },
        {
          pjx: '无配伍禁忌',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        },
        {
          pjx: '无人群禁忌',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        },
        {
          pjx: '无症状禁忌',
          aipj: '无风险',
          zjpj: [
            {value: '同意', label: '同意'},
            {value: '不同意', label: '不同意'}
          ],
          txyj: '',
          agree: ''
        }
      ]
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
.appraise-box {
  position:relative;
  min-height:680px;
  overflow:hidden;
}
.appraise-bill {
  position:absolute;
  left:0;
  top:0;
  right:620px;
  height:100%;
  overflow-y:auto;
}
table {
   border-collapse:collapse;
}
.table-style {
  width:100%;
  border:1px solid #eee;
  font-size:14px;
  margin-bottom:10px;

}
.table-style thead tr {
  background:#c4ebff;
}
.table-style.bg-col2 thead tr {
  background:#eae7ff;
}
.table-style.bg-col3 thead tr {
  background:#ffdddc;
}
.table-style thead tr td {
  text-align:center;
  height:40px;
  font-size:16px;
  font-weight:bold;
  color:rgb(73, 73, 73);

}
.table-style td {
  border:1px solid #ebeef5;
  padding:5px 10px;
  color:#606266;
}





.appraise-right {
  float:right;
  width:600px;
}
.appraise-title1 {
  font-family: 'PingFangSC-Semibold';
  font-size: 18px;
  margin-bottom: 10px;
  color: #3EABE2;
}

.appraise-table1 {
  box-shadow: 0 2px 10px 8px rgba(225, 234, 246, 0.5);
  margin-bottom: 30px;
}

.appraise-title1.title2 {
  color: #4E85FF;
}

.appraise-table1 {
  box-shadow: 0 2px 10px 8px rgba(237, 232, 248, 0.5);
  margin-bottom: 30px;
}

.appraise-title1.title3 {
  color: #FC7272;
}
.tips-style {
  width:120px;
}
.appraise-btn-box {
  text-align:center;
  height:40px;
  .btn-style {
    background:#eee;
    padding:12px 36px;
  }
}

</style>



