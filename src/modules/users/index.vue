<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('users.username')">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('users.email')" min-width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('users.isActive')" min-width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.isActive }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('users.createDatetime')" align="center" prop="createDatetime" min-width="200">
        <template slot-scope=" scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createDatetime }}</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.number" :total="listPagination.total" background layout="total, sizes, prev, pager, next, jumper" @size-change="onSizeChange" @current-change="onCurrentChange" />
    </div>
  </div>
</template>

<script>
import usersApi from '@/modules/users/apis'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },

  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        perPage: 10
      },
      listPagination: {
        page: 1,
        perPage: 10,
        total: 0
      }
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.listLoading = true
      usersApi.getList(this.listQuery).then(response => {
        console.log(response.data)
        this.list = response.data
        this.listPagination = response.pagination
        this.listLoading = false
      })
    },
    // 每页大小改变
    onSizeChange(val) {
      this.listQuery.perPage = val
      this.fetchData()
    },
    // 页数改变
    onCurrentChange(val) {
      this.listQuery.page = val
      this.fetchData()
    }

  } // methods
}
</script>
