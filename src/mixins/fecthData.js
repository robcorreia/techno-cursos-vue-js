export default {
  data() {
    return {
      loading: true,
      data: null,
    }
  },
  methods: {
    async fetchData(url) {
      this.loading = true
      this.data = null;
      const response = await fetch(`http://localhost:3000${url}`);
      const data = await response.json()

      setTimeout(() => {
        this.data = data
        this.loading = false
      }, 1000)
    }
  },
}