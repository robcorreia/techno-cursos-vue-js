<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-if="data">
      <h1>Cursos</h1>
      {{ data }}
    </div>
  </div>
</template>
<script>
import fecthData from '@/mixins/fecthData';

export default {
  name: 'cursos',
  mixins: [fecthData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>
<style></style>