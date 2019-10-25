<template>
  <div>
  <router-link to='/goPage'><a>页面局部跳转</a></router-link>
    <el-button type="primary" @click="goFirst()">test</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  inject: ['reload'], // 用父组件App.vue下的provide注入的依赖
  methods: {
    goFirst: function () {
      // this.reload()
      this.$router.push('/box')
    }
  }
}
</script>

<style scoped>

</style>
