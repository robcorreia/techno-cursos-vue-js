<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data" class="content">
        <div>
          <h1>Sobre a {{ data.titulo }}</h1>
          <p>{{ data.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avalicaçoes</h2>
            <ul>
              <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design" />
      </div>
    </transition>
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

<style>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  font-size: 1rem;
  margin-bottom: 40px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>