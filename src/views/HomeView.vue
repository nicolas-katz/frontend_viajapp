<template>
  <div>
    <HeaderSection />
    <main>
      <h1>Olvidate de los tramites, <span>disfruta ViajApp.</span></h1>
      <div>
        <router-link to="cotizacion">Cotización</router-link>
        <router-link to="destinos">Ver destinos</router-link>
      </div>
    </main>
    <section class="home__services">
      <div class="services__container">
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
            />
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
          </svg>
          <h4>Integral</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-exclamation-triangle"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
            />
            <path
              d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
            />
          </svg>
          <h4>Bajo impacto</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-cloud-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path
              d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
            />
          </svg>
          <h4>Sustentable</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="solutions__container">
        <div class="solutions__box">
          <div class="solutions__text">
            <h4>Brindamos experiencias de <span>alta calidad</span>.</h4>
            <div class="solutions__items">
              <p>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    /></svg
                ></span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                vel.
              </p>
              <p>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    /></svg
                ></span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                vel.
              </p>
              <p>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    /></svg
                ></span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                vel.
              </p>
            </div>
          </div>
          <img src="../assets/servicios.jpg" />
        </div>
      </div>
      <div class="destinos__container">
        <h6>Destinos</h6>
        <h2>Conoce nuestro portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          nemo excepturi debitis quam inventore qui consequatur tempora laborum
          veniam delectus.
        </p>
        <div class="destinos__box">
          <div class="destinos__item">
            <img src="../assets/aventura.jpg" />
            <h5>Aventura</h5>
          </div>
          <div class="destinos__item">
            <img src="../assets/fiesta.jpg" />
            <h5>Fiesta</h5>
          </div>
          <div class="destinos__item">
            <img src="../assets/historia.jpg" />
            <h5>Historia</h5>
          </div>
          <div class="destinos__item">
            <img src="../assets/relax.jpg" />
            <h5>Relax</h5>
          </div>
        </div>
        <router-link to="/destinos">Ver todos</router-link>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "HomeView",
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
  padding: 240px 60px 140px 60px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  background-image: radial-gradient(
      circle at 20% 14%,
      rgba(27, 27, 27, 0.05) 0%,
      rgba(27, 27, 27, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 100%
    ),
    radial-gradient(
      circle at 18% 51%,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 100%
    ),
    radial-gradient(
      circle at 29% 38%,
      rgba(160, 160, 160, 0.05) 0%,
      rgba(160, 160, 160, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 100%
    ),
    linear-gradient(90deg, rgb(35, 74, 255), rgb(132, 161, 173));

  text-align: center;
}
main h1 {
  color: white;
  font-size: 67px;
  line-height: 84px;
  font-weight: 400;
}
main h1 span {
  display: block;
}
main div {
  margin-top: 28px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
main div a {
  width: max-content;
  height: 54px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid white;
  border-radius: 40px;
  transition: all 0.6s;

  color: black;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
}
main div a:hover,
main div a:last-child {
  background-color: transparent;

  color: white;
}
main div a:last-child {
  margin-left: 20px;
}
main div a:last-child:hover {
  background-color: white;

  color: black;
}
.home__services {
  width: 100%;
  height: max-content;
  padding: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home__services .services__container {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.home__services .services__container .item {
  width: 28%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}
.home__services .services__container .item svg {
  width: 42px;
  height: 42px;

  color: var(--colorPrincipal);
}
.home__services .services__container .item h4 {
  margin: 28px 0 14px 0;
  color: black;
  font-size: 30px;
  font-weight: 400;
}
.home__services .services__container .item p {
  color: black;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
}
.home__services .solutions__container {
  width: 100%;
  margin-top: 140px;
}
.home__services .solutions__container .solutions__box {
  width: 100%;
  height: 640px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.home__services .solutions__container .solutions__box img {
  width: 50%;
  height: 100%;

  object-fit: cover;
}
.home__services .solutions__container .solutions__box .solutions__text {
  width: 50%;
  height: 100%;
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: black;
}
.home__services .solutions__container .solutions__box .solutions__text h4 {
  margin-bottom: 32px;

  color: white;
  font-size: 42px;
  font-weight: 400;
}
.home__services .solutions__container .solutions__box .solutions__text h4 span {
  text-decoration: underline;
}
.home__services
  .solutions__container
  .solutions__box
  .solutions__text
  .solutions__items {
  display: flex;
  flex-direction: column;
}
.home__services
  .solutions__container
  .solutions__box
  .solutions__text
  .solutions__items
  p {
  margin: 14px 0;

  display: flex;
  flex-direction: row;

  color: white;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
}
.home__services
  .solutions__container
  .solutions__box
  .solutions__text
  .solutions__items
  p
  span {
  min-width: 34px;
  min-height: 34px;
  max-width: 34px;
  max-height: 34px;
  margin-right: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--colorHover);
  border-radius: 50%;

  color: white;
}
.home__services .destinos__container {
  width: 100%;
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home__services .destinos__container h6 {
  width: max-content;
  height: max-content;
  padding: 8px 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(41, 66, 179, 0.322);
  border-radius: 40px;

  color: rgb(41, 67, 179);
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.home__services .destinos__container h2 {
  margin: 14px 0 18px 0;

  color: black;
  font-size: 52px;
  line-height: 58px;
  font-weight: 400;
  text-align: center;
}
.home__services .destinos__container p {
  width: 70%;

  color: black;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  text-align: center;
}
.home__services .destinos__container .destinos__box {
  width: 100%;
  margin-top: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.home__services .destinos__container .destinos__box .destinos__item {
  position: relative;

  width: 24%;
}
.home__services .destinos__container .destinos__box .destinos__item img {
  width: 100%;
  height: 420px;

  object-fit: cover;
}
.home__services .destinos__container .destinos__box .destinos__item h5 {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;

  max-width: max-content;
  height: max-content;
  padding: 8px 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(104, 78, 223, 0.281);
  border-radius: 40px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.281);

  color: white;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.home__services .destinos__container a {
  width: max-content;
  height: 54px;
  margin-top: 60px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--colorPrincipal);
  border-radius: 40px;
  transition: all 0.6s;

  color: white;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
}
.home__services .destinos__container a:hover {
  background-color: var(--colorHover);

  color: white;
}
</style>
