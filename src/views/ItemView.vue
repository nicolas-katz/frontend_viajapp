<template>
  <div>
    <HeaderSection></HeaderSection>
    <main>
      <h1>{{ paquete.title }}</h1>
    </main>
    <section>
      <img src='../assets/aventura.jpg' />
      <div>
        <h2>{{ paquete.title }}</h2>
        <h3>${{ paquete.price }}</h3>
        <p>{{ paquete.description }}</p>
      </div>
    </section>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
export default {
  name: "ItemView",
  components: {
    HeaderSection,
    FooterSection,
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
      .catch(() => console.log("error"))
  }
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
section {
  padding: 40px 180px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
section img {
  width: 48%;
  height: 540px;

  object-fit: cover;
}
section div {
  width: 48%;
  padding: 40px;

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
  margin: 10px 0 20px 0;
  color: black;
  font-size: 36px;
  line-height: 46px;
  font-weight: 400;
}
section div p {
  color: grey;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
</style>
