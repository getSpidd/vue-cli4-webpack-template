<template>
  <error-content code="404" desc="您的页面好像飞走了~" :src="src" />
</template>

<script>
import error404 from '@/assets/images/common/error-404.png'
import errorContent from './error-content.vue'
export default {
  name: 'error_404',
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
