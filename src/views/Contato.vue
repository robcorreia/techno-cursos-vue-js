<template>
  <div>
    <h1>Contato</h1>
    <p>{{ data }}</p>
  </div>
</template>
<script>
export default {
  name: 'contato',
  data() {
    return {
      data: null,
    }
  },
  methods: {
    async fetchData() {
      const response = await fetch('http://localhost:3000/contato');
      const data = await response.json()
      console.log(data)
      this.data = data
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
<style></style>