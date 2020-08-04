<template>
  <error-content code="500" desc="服务器出问题了" :src="src"/>
</template>

<script>
import error404 from '@/assets/images/common/error-500.png'
import errorContent from './error-content.vue'
export default {
  name: 'error_500',
  components: {
    errorContent
  },
  data () {
    return {
      src: error404
    }
  }
}
</script>
