<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
export default {
  name: "MainSection",
  props: ["title"],
};
</script>

<style scoped>
main {
  width: 100%;
  height: max-content;
  padding: 220px 100px 60px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;

  text-align: center;
}
main h1 {
  color: white;
  font-size: 42px;
  font-weight: 400;
}
</style>
