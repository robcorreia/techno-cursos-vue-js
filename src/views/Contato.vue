<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>
        <ul>
          <li v-for="(item, index) in data.contato"><strong>{{ index }}:</strong> {{ item }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import fetchData from '@/mixins/fecthData.js'


export default {
  name: 'contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato')
  }
}
</script>
<style></style>