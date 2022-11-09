<template>
  <div>
    <HeaderSection></HeaderSection>
    <main>
      <h1>Ofertas</h1>
    </main>
    <div class="paquetes__container" v-if="paquetes.length > 0">
      <div class="item" v-for="item in paquetes" :key="item.id">
        <img src="../assets/diversion.jpg" />
        <h3>{{ item.title }}</h3>
      </div>
    </div>
    <div class="paquetes__notfound" v-if="paquetes.length <= 0">
      <h5>No hay paquetes cargados.</h5>
    </div>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
export default {
  name: "PaquetesView",
  components: {
    HeaderSection,
    FooterSection,
  },
  data() {
    return {
      paquetes: [],
    };
  },
  created() {
    fetch("http://127.0.0.1:3000/api/v1/plans/offers")
      .then((response) => response.json())
      .then((json) => (this.paquetes = json));
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: max-content;
  padding: 240px 100px 80px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.281);
  background-image: url(../assets/main.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  text-align: center;
}
main h1 {
  color: white;
  font-size: 48px;
  font-weight: 500;
  text-transform: capitalize;
}
.paquetes__container {
  width: 100%;
  height: max-content;
  padding: 40px 180px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.paquetes__container .item {
  position: relative;

  width: 31%;
  height: 480px;
  margin: 1%;

  display: flex;
  flex-direction: column;
}
.paquetes__container .item img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 2px;
}
.paquetes__container .item h3 {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;

  width: max-content;
  max-width: 70%;
  height: max-content;
  padding: 10px 16px;

  background-color: white;
  border-radius: 40px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);

  color: black;
  font-size: 20px;
  font-weight: 500;
}
.paquetes__notfound {
  padding: 40px 100px;

  display: flex;
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
</style>
