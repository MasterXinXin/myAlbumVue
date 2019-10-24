<template src="@/components/html/box.html"></template>

<script>
import Button from './button.vue'// 引入子组件
export default {
  components: {
    'v-button': Button
  },
  data () {
    return {
      text: '按键的name'
    }
  },
  methods: {
    changeText (value) { // 自定义事件修改text的值
      this.text = value
    }
  }
}
</script>

<style scoped>

</style>
