<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    // 我们在组件内就可以通过 this.$store.getters.getTexts 直接获取筛选后的数据，同 state
    // 类似， Vuex 也暴露了 mapGetters 函数帮助我们获取 getters 方法
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
