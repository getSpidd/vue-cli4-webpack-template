<template>
  <div id="Quit">
    quit
  </div>
</template>

<script>
export default {
  name: 'Quit',
  // 数据
  data () {
    return {
      Name: 'app'
    }
  },
  // 属性监听 用于监听各个变量改变的事件    key==要鉴定属性   value==函数
  watch: {},
  // 计算属性
  computed: {},
  // 事件绑定
  methods: {},
  // 实例加载完毕后
  mounted () {
    // console.log(this.$route.name)   接收来自子级传递的选项卡name
  }
}
</script>

<style lang="less" scoped>

</style>
