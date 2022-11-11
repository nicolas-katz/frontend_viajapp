<template>
  <div>
    <HeaderSection></HeaderSection>
    <MainSection title="Grecia"></MainSection>
    <section>
      <img src="../assets/aventura.jpg" />
      <div>
        <h2>{{ paquete.title }}</h2>
        <h3>Desde ${{ paquete.price }}</h3>
        <p>{{ paquete.description }}</p>
        <router-link to="/cotizacion">Pedir cotización</router-link>
      </div>
    </section>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
import MainSection from "../components/Main.vue";
export default {
  name: "ItemView",
  components: {
    HeaderSection,
    FooterSection,
    MainSection,
  },
  data() {
    return {
      destino_id: this.$route.params.id,
      paquete: {},
    };
  },
  created() {
    fetch(`http://127.0.0.1:3000/api/v1/plans/${this.destino_id}`)
      .then((response) => response.json())
      .then((json) => (this.paquete = json))
      .catch(() => console.log("error"));
  },
};
</script>

<style scoped>
section {
  padding: 100px 240px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
section img {
  width: 48%;
  height: 480px;

  object-fit: cover;
}
section div {
  width: 48%;
  padding-left: 40px;

  display: flex;
  flex-direction: column;
}
section div h2 {
  color: black;
  font-size: 48px;
  line-height: 58px;
  font-weight: 500;
}
section div h3 {
  margin: 4px 0 20px 0;
  color: black;
  font-size: 28px;
  font-weight: 400;
}
section div p {
  color: grey;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
section div a {
  width: max-content;
  height: 54px;
  margin-top: 32px;
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
section div a:hover {
  background-color: var(--colorHover);

  color: white;
}
</style>
