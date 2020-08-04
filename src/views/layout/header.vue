<template>
  <div id="header">
    <div class="header-color-change">
      <span class="theme-color-title-box">{{$t('theme')}}</span>
      <select v-model="activeThemeColor" @change="getCouponSelected">
        <option v-for="item in themeColor"
                :value="item.value"
                :label="item.label"
                :key="item.value">

        </option>
      </select>
      <span class="theme-color-title-box">{{$t('language')}}</span>
      <select v-model="activeLanguage" @change="languageSelectedChange">
        <option v-for="item in languageArr"
                :value="item.value"
                :label="item.name"
                :key="item.value">
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { changeLang } from '@/locale'
import { localSave, localRead } from '@/core/util'
import themeColor from '@/utils/themeColor'
export default {
  name: 'HeaderComponents',
  // 数据
  data () {
    return {
      Name: 'app',
      themeColor: themeColor.themeColor,
      activeThemeColor: '',
      languageArr: [
        {
          name: '中文',
          value: 'zh-CN'
        },
        {
          name: 'English',
          value: 'en-US'
        }
      ],
      activeLanguage: ''
    }
  },
  // 属性监听 用于监听各个变量改变的事件    key==要鉴定属性   value==函数
  watch: {},
  // 计算属性
  computed: {},
  created () {
    this.activeThemeColor = this.themeColor[0].value
    this.activeLanguage = localRead('local')
  },
  // 事件绑定
  methods: {
    getCouponSelected () {
      document.getElementsByTagName('html')[0].className = this.activeThemeColor
      localSave('themeColor', this.activeThemeColor)
    },
    languageSelectedChange () {
      changeLang(this.activeLanguage)
    }
  },
  // 实例加载完毕后
  mounted () {
    // console.log(this.$route.name)   接收来自子级传递的选项卡name
  }
}
</script>

<style lang="less" scoped>

</style>
