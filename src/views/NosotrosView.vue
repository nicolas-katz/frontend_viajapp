<template>
  <div>
    <HeaderSection></HeaderSection>
    <main>
      <h1>Nosotros</h1>
    </main>
    <section>
      <img src="../assets/aventura.jpg" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus earum
        ea sit sequi quos. Cum voluptas expedita ratione voluptatem, dicta alias
        assumenda fugiat at magni nemo nostrum, ducimus itaque placeat! <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut,
        expedita magnam repudiandae quam, sint facere officiis assumenda velit
        at a rerum neque ut, eveniet hic illo consequatur impedit vero. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        perferendis nostrum doloremque nesciunt. Voluptatibus nobis similique
        expedita incidunt? Sed deleniti delectus nesciunt, mollitia ipsa illo
        voluptatibus soluta temporibus molestias incidunt.
      </p>
      <div>
        <img src="../assets/aventura.jpg" />
        <img src="../assets/aventura.jpg" />
        <img src="../assets/aventura.jpg" />
      </div>
    </section>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
export default {
  name: "NosotrosView",
  components: {
    HeaderSection,
    FooterSection,
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
section {
  padding: 40px 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
section img {
  width: 100%;
  height: 420px;

  object-fit: cover;
}
section p {
  margin: 68px 0;

  color: grey;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
section div {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
section div img {
  width: 32%;
  height: 480px;

  object-fit: cover;
}
</style>
