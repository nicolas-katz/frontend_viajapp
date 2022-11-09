<template>
  <header>
    <nav>
      <ul>
        <RouterLink to="/"><img src="../assets/logo.png" alt="Logo" /></RouterLink>
        <RouterLink to="/destinos"><li>Destinos</li></RouterLink>
        <RouterLink to="/ofertas"><li>Ofertas</li></RouterLink>
        <RouterLink to="/nosotros"><li>Nosotros</li> </RouterLink>
        <RouterLink to="/contacto"><li>Contacto</li></RouterLink>
      </ul>
    </nav>
    <nav>
      <ul>
        <RouterLink to="/admin"><li>ACCESO ADMIN</li></RouterLink>
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
  padding: 24px 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;

  font-family: "Roboto Slab", sans-serif !important;
}

header nav:first-child ul a:first-child {
  margin-left: 0;
  margin-right: 80px;
}

header nav ul a img {
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
  font-weight: 600;
  text-decoration: none;
}
nav ul a:last-child {
  margin-right: 0;
}
nav ul a li {
  list-style: none;
}

nav ul a:hover {
  color: rgb(85, 12, 12);
}
nav:last-child ul a {
  width: max-content;
  height: 54px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(138, 31, 31);
  border-radius: 40px;

  letter-spacing: 2px;
}
nav:last-child ul a:hover {
  background-color: rgb(85, 12, 12);

  color: white;
}
</style>
