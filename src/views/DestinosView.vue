<template>
  <div>
    <HeaderSection></HeaderSection>
    <MainSection title="Destinos"></MainSection>
    <div class="filters__container">
      <h3>Filtros de busqueda</h3>
      <form id="form" @submit.prevent="getDestinos()">
        <select name="filter" id="filter">
          <option value="todos" selected>Todos</option>
          <option value="popular">Populares</option>
          <option value="offer">Con oferta</option>
        </select>
        <input type="submit" value="Filtrar" />
      </form>
    </div>
    <div class="paquetes__container" v-if="paquetes.length > 0">
      <div class="item" v-for="item in paquetes" :key="item.id">
        <router-link to="/destinos/cec62520609f11ed91060c7a15e88487">
          <img src="../assets/aventura.jpg" />
          <h4>{{ item.title }}</h4>
          <h5>Desde ${{ item.price }}</h5>
        </router-link>
      </div>
    </div>
    <div class="paquetes__notfound" v-if="paquetes.length <= 0">
      <h5>No hay destinos cargados.</h5>
      <router-link to="/admin">Crear nuevo destino</router-link>
    </div>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
import MainSection from "../components/Main.vue";
export default {
  name: "PaquetesView",
  components: {
    HeaderSection,
    FooterSection,
    MainSection,
  },
  methods: {
    getDestinos() {
      const option = document.querySelector("select").value;
      switch (option) {
        case "todos":
          fetch("http://127.0.0.1:3000/api/v1/plans")
            .then((fetchResponse) => fetchResponse.json())
            .then((jsonResponse) => (this.paquetes = jsonResponse));
          break;
        case "popular":
          fetch("http://127.0.0.1:3000/api/v1/plans/popular")
            .then((fetchResponse) => fetchResponse.json())
            .then((jsonResponse) => (this.paquetes = jsonResponse))
          break;
        case "offer":
          fetch("http://127.0.0.1:3000/api/v1/plans/offers")
            .then((fetchResponse) => fetchResponse.json())
            .then((jsonResponse) => (this.paquetes = jsonResponse))
          break;
        default:
          break;
      }
    },
  },
  data() {
    return {
      paquetes: [],
      url: "http://127.0.0.1:3000/api/v1/plans",
    };
  },
  created() {
    fetch(this.url)
      .then((fetchResponse) => fetchResponse.json())
      .then((jsonResponse) => (this.paquetes = jsonResponse));
  },
};
</script>

<style scoped>
.filters__container {
  padding: 80px 180px 0 180px;

  display: flex;
  flex-direction: column;
}
.filters__container h3 {
  color: black;
  font-size: 26px;
  font-weight: 500;
}
.filters__container form {
  width: max-content;
  height: 54px;
  margin-top: 32px;
}
.filters__container form select,
.filters__container form input {
  width: 360px;
  height: 100%;
  padding: 0 20px;

  border: 1px solid gainsboro;
  border-radius: 0;
  cursor: pointer;
  outline: none;

  color: black;
  font-size: 18px;
}
.filters__container form input {
  width: max-content;
  margin-left: 18px;
  padding: 0 40px;

  background-color: var(--colorPrincipal);
  border-color: var(--colorPrincipal);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
}
.filters__container form input:hover {
  background-color: var(--colorHover);
  border-color: var(--colorHover);
}
.paquetes__container {
  width: 100%;
  height: max-content;
  padding: 60px 180px 80px 180px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.paquetes__container .item {
  width: 31%;
  height: max-content;
  margin: 2% 1%;
}
.paquetes__container .item a {
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;

  color: black;
  text-decoration: none;
}
.paquetes__container .item a:hover {
  color: black;
}
.paquetes__container .item a img {
  width: 100%;
  height: 480px;

  object-fit: cover;
}
.paquetes__container .item a h4 {
  margin-top: 20px;

  color: black;
  font-size: 20px;
  font-weight: 500;
}
.paquetes__container .item a h5 {
  margin-top: 4px;

  color: black;
  font-size: 18px;
  font-weight: 400;
}
.paquetes__notfound {
  padding: 40px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}
.paquetes__notfound h5 {
  color: black;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
}
.paquetes__notfound a {
  width: max-content;
  height: 54px;
  margin-top: 20px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--colorPrincipal);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
}
.paquetes__notfound a:hover {
  background-color: var(--colorHover);

  color: white;
}
</style>
