<template>
  <div>
    <h1>Home</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {
      data: null,
    }
  },
  methods: {
    async fetchData() {
      const response = await fetch('http://localhost:3000/home');
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