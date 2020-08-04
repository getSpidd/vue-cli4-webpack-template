<template>
  <div id="index">
    <div class="box">测试样式</div>
  </div>
</template>

<script>
export default {
  name: 'index',
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

  }
}
</script>

<style lang="less" scoped>
.theme(...) {
  .box{
    .wh(20rem,20rem);
    .bg-c(@rgb-color0);
  }
};

</style>
