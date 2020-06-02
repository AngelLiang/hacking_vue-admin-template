<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles'
            :key='role'>{{role}}</span></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    // https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
