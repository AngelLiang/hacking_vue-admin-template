<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>

      <el-table-column label="Author" width="110" align="center">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// api
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  // 创建时就获取数据
  created() {
    this.fetchData()
  },
  methods: {
    // 获取数据
    fetchData() {
      this.listLoading = true
      // 调用api的方法，并设置回调函数
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
