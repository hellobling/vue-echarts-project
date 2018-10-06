<template>
  <div class="g-content-box">
    <div class="g-page-title">质控申请</div>
    <div class="choose-file">
      <input type="text" class="choose-file-con" placeholder="选择数据文件" readonly>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :show-file-list="false"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary" class="enter-btn">导入</el-button>
      </el-upload>
    </div>
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
        <el-form-item prop="state">
          <span class="g-red">*</span>
          <el-select v-model="formInline.state" placeholder="上传状态">
            <el-option label="状态1" value="状态1"></el-option>
            <el-option label="状态2" value="状态2"></el-option>
          </el-select>
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
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          align="center"
          type="selection">
        </el-table-column>
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
          prop="state"
          label="上传状态"
          align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.state=='0'" class="g-no-color">未上传</span>
            <span v-else class="g-yes-color">已上传</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="scsj"
          label="上传时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="drsj"
          label="导入时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
          align="center">
          <template slot-scope="scope">
          <el-button
            class="g-delete"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            size="mini">
            删除
          </el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="g-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="50"
        prev-text="上一页"
        next-text="下一页"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="500">
      </el-pagination>
    </div>
    <div class="apply-btn-box">
      <span class="apply-btn-control">申请质控</span>
      <span class="apply-btn-all">全部申请</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      formInline: {
        office: '',
        disease: '',
        project: '',
        date1: '',
        state: ''
      },
      tableData: [{
        xuhao: '1',
        oldnum: 'XH10765',
        keshi: '消化科',
        jb: '肠胃炎',
        age: '18',
        zkxm: '膝关节',
        state: '0',
        scsj: '2018-9-10',
        drsj: '2018-9-15'
      }, {
        xuhao: '2',
        oldnum: 'XH10763',
        keshi: '消化科',
        jb: '肠胃炎',
        age: '24',
        zkxm: '胸部',
        state: '1',
        scsj: '2018-8-27',
        drsj: '2018-9-11'
      }],
      multipleSelection: [],
      currentPage: 1
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    deleteRow (index, rows) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        rows.splice(index, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .choose-file {
    height:36px;
    position:relative;
    margin-bottom:30px;
  }
  .choose-file-con {
    margin-right:24px;
    width:380px;
    height:36px;
    border:none;
    line-height:36px;
    background: #C4E4FF;
    box-shadow: 0 2px 16px 4px rgba(212,237,251,0.72);
    border-radius: 4px;
    font-size: 14px;
    color: #44759E;
    padding-left:15px;
  }
  .upload-demo {
    display:inline;
  }
  .enter-btn {
    width:150px;
    height:34px;
    font-size: 14px;
    color: #C8C8C8;
    background:#fff;
    border: 1px solid #C5C5C5;
    border-radius: 60px;
  }
  .apply-btn-box {
    height:40px;
    line-height:40px;
    font-size:16px;
    color:#fff;
  }
  .apply-btn-box span{
    display:inline-block;
    text-align:center;
    width:120px;
    height:40px;
    border-radius: 40px;
    cursor:pointer;
  }
  .apply-btn-control {
    background: #C9C9C9;
    margin-right:30px;
  }
  .apply-btn-all {
    background-image: linear-gradient(-180deg, #A1DCFF 0%, #449CE1 97%);
  }
</style>



