<template>
  <div>
    <HeaderSection></HeaderSection>
    <main>
      <h1>Nosotros</h1>
    </main>
    <section>
      <img src="../assets/aventura.jpg" />
      <p>
        Somos una agencia de viajes especializada en experiencias, dedicada a
        crear paquetes de alto impacto en el viajero para aprovechar al máximo
        cada presupuesto, y de bajo impacto en el ambiente para hacerlo de forma
        sustentable.
        <br /> <br>
        Nuestro objetivo es que dediques tus vacaciones a disfrutar, ocupándonos
        nosotros del estrés. Hacernos cargo de lo que no querés hacerte cargo es
        nuestra misión. Entendemos la forma digital en la que querés manejarte,
        por lo que nos enfocamos en brindarte una experiencia transmedia, donde,
        mediante redes sociales, una página web de última generación y
        especialistas en turismo, nos encargamos de hacer de tu viaje una
        experiencia inolvidable.
        <br /> <br>
        Que no te limiten las fronteras para viajar en la forma en la que querés
        viajar, para vivir la vida que querés vivir. Ideamos paquetes de
        destinos de acuerdo al objetivo de las vacaciones, donde incluimos, no
        sólo pasajes, hoteles y traslados, sino excursiones y actividades
        personalizadas. Visitá Destinos para enterarte de a dónde ir si buscás
        Aventura, Fiesta, Historia o Relax.
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
