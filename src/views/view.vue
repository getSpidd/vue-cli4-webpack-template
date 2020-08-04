<template>
  <div>
    <header-components></header-components>
    <router-view />
  </div>
</template>

<script>
import HeaderComponents from '@/views/layout/header'
export default {
  name: 'view-router',
  components: {
    HeaderComponents
  }
}
</script>
