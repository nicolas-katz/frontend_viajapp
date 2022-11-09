<template>
  <div>
    <HeaderSection></HeaderSection>
    <main>
      <h1>Contacto</h1>
    </main>
    <section>
      <form
        @submit.prevent="postPlan()"
        method="post"
      >
        <div>
          <label for="name">Tu nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tu nombre"
            minlength="3"
            maxlength="20"
            v-model="name"
            required
          />
        </div>
        <div>
          <label for="email">Tu email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Tu email"
            minlength="6"
            maxlength="40"
            v-model="email"
            required
          />
        </div>
        <div>
          <label for="phone">Tu teléfono</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Tu teléfono"
            minlength="8"
            maxlength="20"
            v-model="phone"
            required
          />
        </div>
        <div>
          <label for="budget">Tu presupuesto (en dólares)</label>
          <input
            type="number"
            name="budget"
            id="budget"
            placeholder="Tu presupuesto"
            min="1"
            max="1000000"
            v-model="budget"
            required
          />
        </div>
        <div>
          <label for="plan">Elegi tu plan</label>
          <input
            type="text"
            name="plan"
            id="plan"
            minlength="4"
            maxlength="40"
            placeholder="Elige tu plan"
            v-model="plan"
            required
          />
        </div>
        <div>
          <label for="message">Tu mensaje</label>
          <textarea
            name="message"
            id="message"
            minlength="6"
            maxlength="200"
            placeholder="Tu mensaje"
            v-model="message"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
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
  // data() {

  // },
  // methods() {
  //   postPlan() {
  //     fetch('http://127.0.0.1:3000/api/v1/plans', {
  //     })
  //       .then((res) => console.log(res))
  //       .catch(()=> console.log("error"))
  //   };
  // };
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
section form {
  width: 100%;
  max-width: 600px;
  height: max-content;

  display: flex;
  flex-direction: column;
}
section form div {
  width: 100%;

  display: flex;
  flex-direction: column;
}
section form div label {
  margin-bottom: 14px;

  color: grey;
  font-size: 16px;
  font-weight: 400;
}
section form div input,
section form div textarea,
section form button {
  width: 100%;
  height: 54px;
  margin-bottom: 20px;
  padding: 0 20px;

  border: 1px solid gainsboro;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.6s;

  color: black;
  font-size: 16px;
  font-weight: 400;
}
section form div textarea {
  height: 100px;
  padding-top: 20px;
}
section form div input::placeholder,
section form div textarea::placeholder {
  color: black;
}
section form button {
  width: max-content;
  padding: 0 40px;

  background-color: rgb(138, 31, 31);
  border: none;
  border-radius: 40px;

  color: white;
}
section form button:hover {
  background-color: rgb(85, 12, 12);
}
</style>
