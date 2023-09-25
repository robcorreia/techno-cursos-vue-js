<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-if="data">
      <h1>Home</h1>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fecthData.js'


export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home')
  }

}
</script>