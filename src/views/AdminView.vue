<template>
  <div>
    <HeaderSection></HeaderSection>
    <MainSection title="Administrador"></MainSection>
    <section>
      <div class="add__destinos">
        <h3>Crear destinos</h3>
        <form id="form" @submit.prevent="create_plan()" method="post">
          <div>
            <label for="title">Nombre</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Nombre"
              minlength="3"
              maxlength="20"
              v-model="title"
              required
            />
          </div>
          <div>
            <label for="price">Precio</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Precio"
              min="1"
              max="100000"
              v-model="price"
              required
            />
          </div>
          <div>
            <label for="offer">¿Tiene oferta? (True o False)</label>
            <input
              type="tel"
              name="offer"
              id="offer"
              placeholder="¿Tiene oferta?"
              minlength="4"
              maxlength="5"
              v-model="offer"
              required
            />
          </div>
          <div>
            <label for="popular">¿Es popular? (True o False)</label>
            <input
              type="text"
              name="popular"
              id="popular"
              placeholder="¿Es popular?"
              minlength="4"
              maxlength="5"
              v-model="popular"
              required
            />
          </div>
          <div>
            <label for="description">Descripción</label>
            <textarea
              name="message"
              id="description"
              minlength="6"
              maxlength="200"
              placeholder="Descripción"
              v-model="description"
              required
            ></textarea>
          </div>
          <button type="submit">Crear destino</button>
        </form>
      </div>
      <div class="get__budgets">
        <h3>Ver pedidos de cotizaciones</h3>
        <div v-for="budget in budgets" :key="budget.id">
          <p>
            Nombre: {{ budget.name }} - email: {{ budget.email }} - tel:
            {{ budget.phone }} - budget: {{ budget.budget }} - message:
            {{ budget.message }}
          </p>
        </div>
      </div>
    </section>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
import MainSection from "../components/Main.vue";
import axios from "axios";
export default {
  name: "AdminView",
  components: {
    HeaderSection,
    FooterSection,
    MainSection,
  },
  data() {
    return {
      budgets: [],
      title: "",
      price: "",
      description: "",
      offer: "",
      popular: "",
      img: "",
    };
  },
  methods: {
    create_plan() {
      axios
        .post("http://127.0.0.1:3000/api/v1/plans", {
          title: this.title,
          price: this.price,
          description: this.description,
          offer: this.offer,
          popular: this.popular,
          img: "url",
        })
        .then((res) => res)
        .then((data) => console.log(data))
        .then(() => this.$router.push({ name: "DestinosRoute" }))
        .catch((e) => {
          console.log(e);
          this.$router.push({ name: "NotFound" });
        });
    },
  },
  created() {
    fetch("http://127.0.0.1:3000/api/v1/budgets")
      .then((fetchResponse) => fetchResponse.json())
      .then((jsonResponse) => (this.budgets = jsonResponse));
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: max-content;
  padding: 0 280px 80px 280px;
}
section h3 {
  margin: 80px 0;
  color: black;
  font-size: 36px;
  font-weight: 500;
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

  background-color: var(--colorPrincipal);
  border: none;
  border-radius: 40px;

  color: white;
}
section form button:hover {
  background-color: var(--colorHover);
}
</style>
