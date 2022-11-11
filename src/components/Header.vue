<template>
  <header>
    <RouterLink to="/"><img src="../assets/logo.png" alt="Logo" /></RouterLink>
    <nav>
      <ul>
        <RouterLink to="/"><li>Home</li></RouterLink>
        <RouterLink to="/destinos"><li>Destinos</li></RouterLink>
        <RouterLink to="/nosotros"><li>Nosotros</li> </RouterLink>
        <RouterLink to="/cotizacion"><li>Cotización</li></RouterLink>
        <RouterLink to="/admin"><li>Administrador</li></RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: max-content;
  padding: 20px 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
}

header img {
  width: 120px;

  object-fit: contain;
}

nav ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

nav ul a {
  margin: 0 24px;

  transition: all 0.6s;

  color: white;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
}
nav ul a:last-child {
  margin-right: 0;
}
nav ul a li {
  list-style: none;
}

nav ul a:hover {
  color: var(--colorHover);
}
</style>
