<template>
  <div>
    <HeaderSection />
    <main>
      <h5>Agencia de turismo, viajes y excursiones</h5>
      <h1>Olvidate de los tramites, <span>disfruta ViajApp.</span></h1>
      <a href="/contacto">Cotizar viaje</a>
    </main>
    <section>
      <h6>Destinos</h6>
      <h2>Elegi tu paquete favorito</h2>
      <p>
        Conoce todos nuestros paquetes de viajes, elegi el plan de viaje que se
        ajuste a tus necesidades y nosotros te garantizaremos la mejor
        experiencia posible.
      </p>
      <div class="paquetes__container">
        <div class="item" v-for="item in paquetes" :key="item.id">
          <img src="../assets/paisajes.jpg"/>
          <h4>{{ item.title }}</h4>
        </div>
      </div>
      <RouterLink to="/destinos">Ver todos</RouterLink>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "HomeView",
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
    fetch("http://127.0.0.1:3000/api/v1/plans/popular")
      .then((response) => response.json())
      .then((json) => (this.paquetes = json));
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: max-content;
  padding: 240px 100px 140px 100px;

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
main h5 {
  margin-bottom: 16px;

  color: gainsboro;
  font-size: 20px;
  font-weight: 400;
}
main h1 {
  color: white;
  font-size: 68px;
  line-height: 78px;
  font-weight: 400;
}
main h1 span {
  display: block;

  font-weight: 500;
}
main a {
  width: max-content;
  height: 54px;
  margin-top: 28px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(138, 31, 31);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
main a:hover {
  background-color: rgb(85, 12, 12);

  color: white;
}
section {
  width: 100%;
  height: max-content;
  padding: 40px 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;

  font-family: "Roboto Slab", sans-serif !important;
  text-align: center;
}
section h6 {
  width: max-content;
  height: max-content;
  margin-bottom: 16px;
  padding: 8px 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(138, 31, 31, 0.432);
  border-radius: 40px;

  color: rgb(138, 31, 31);
  font-size: 18px;
  font-weight: 700;
}
section h2 {
  color: black;
  font-size: 48px;
  line-height: 58px;
  font-weight: 500;
}
section p {
  width: 70%;
  margin-top: 16px;

  color: grey;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
section .paquetes__container {
  width: 100%;
  margin: 40px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
section .paquetes__container .item {
  position: relative;

  width: 24%;
  height: 480px;
}
section .paquetes__container .item img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 2px;
}
section .paquetes__container .item h4 {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;

  padding: 10px 20px;

  background-color: white;
  border-radius: 40px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);

  color: black;
  font-size: 20px;
  font-weight: 500;
}
section a {
  width: max-content;
  height: 54px;
  padding: 0 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: rgb(138, 31, 31);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}
section a:hover {
  background-color: rgb(85, 12, 12);

  color: white;
}
</style>
