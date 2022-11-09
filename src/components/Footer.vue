<template>
  <footer>
    <div>
      <h4>
        <a
          href="https://goo.gl/maps/JLk3rdbndqa2r8BS8"
          target="_blank"
          rel="noopener noreferrer"
          >Av. Cordoba 374, CABA<span>Bs As, Argentina.</span></a
        >
      </h4>
      <a href="mailto:#">hola@viajapp.com</a>
    </div>
    <div>
      <h5>Copyright © 2022</h5>
      <div>
        <a
          href="https://www.instagram.com/ucema_edu/"
          target="_blank"
          rel="noopener noreferrer"
          >instagram</a
        >
        <a
          href="https://www.facebook.com/ucema.edu/"
          target="_blank"
          rel="noopener noreferrer"
          >facebook</a
        >
        <a
          href="https://www.linkedin.com/school/universidad-del-cema/?originalSubdomain=ar"
          target="_blank"
          rel="noopener noreferrer"
          >linkedin</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  width: 100%;
  height: max-content;
  padding: 80px 100px;

  background-color: black;

  display: flex;
  flex-direction: column;

  font-family: "Roboto Slab", sans-serif !important;
}
footer div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
footer div:first-child {
  margin-bottom: 100px;
  padding-bottom: 100px;

  border-bottom: 1px solid gainsboro;
}
footer div h4,
footer div h5,
footer div a {
  color: white;
  font-weight: 400;
  text-decoration: none;
}
footer h4 a {
  font-size: 28px;
  line-height: 38px;
}
footer h4 a span {
  display: block;
}
footer h5 {
  font-size: 22px;
  line-height: 32px;
}
footer a {
  transition: all 0.6s;
  font-size: 22px;
}
footer a:hover {
  color: rgb(85, 12, 12);
}
footer div div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
footer div div a {
  margin: 0 8px;

  font-size: 18px;
}
</style>
