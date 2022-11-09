<template>
  <div>
    <h1>404</h1>
    <p>
      No pudimos encontrar la página que estabas buscando. Porfavor vuelve a
      intentar.
    </p>
    <a href="/">Ir al home</a>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;

  text-align: center;
}
div h1 {
  color: white;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 2px;
}
div p {
  max-width: 380px;
  margin: 24px 0;

  color: white;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
}
div a {
  width: max-content;
  height: 54px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(138, 31, 31);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
}
</style>
