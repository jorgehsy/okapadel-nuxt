<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-cubierta-multy"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">
              Pabellón modular <br /><strong>Multy Padel</strong>
            </h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>
    <section class="fw-section-subtitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="lead">
              Es un pabellón modular con estructura de aluminio o acero,
              cubierto con una membrana textil y PVC de alta resistencia. Este
              modelo de medio formato permiten cubrir
              <strong><em>desde dos hasta seis pistas de pádel.</em></strong
              ><br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_multy_padel/descubre-los-cerramientos-del-multy-padel-min.jpg"
              alt="pabellón modular para cubrir de 2 a 6 pistas de pádel"
            />
          </div>
          <div class="col-md-6 order-md-12">
            <h2 class="fw-section-title pt-0">
              <strong>Un formato estándar</strong> que se adapta
            </h2>
            <p class="color-primary">
              El modelo Multy está pensado para cubrir cualquier espacio de
              forma simple. Además, al ser una estructura modular se puede
              <strong><em> ampliar de forma longitudinal.</em></strong> Si en el
              futuro necesitas ampliar tu espacio de pádel este es tu modelo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_multy_padel/un-formato-estandar-que-se-adapta-min.jpg"
              alt="Completa de forma personalizada la cubierta de tus pistas de pádel"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pt-0">
              Descubre los cerramientos del <br />
              <strong>Multy Padel.</strong>
            </h2>
            <p class="lead">
              Al cubrir más de dos pistas es importante tener en cuenta las
              condiciones de juego. Por eso, disponemos de techos presurizados,
              lonas translúcidas u opacas, faldones antireflejos, cortinas
              microperforadas, abatibles o laterales fijos de panel sándwich.
              <strong><em>Puedes elegir hasta el color.</em></strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img
              src="~/assets/images/cubiertas__modelo_multy_padel/y-las-fijaciones-de-la-cubierta-doble-min.jpg"
              alt="Sujeta sólidamente y sin complicaciones la cubierta de tu pista de pádel"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pt-0">
              Y las fijaciones de la <strong>cubierta doble.</strong>
            </h2>
            <p class="lead">
              Para el anclaje de los pabellones Multy es necesario la
              realización de zapatas individuales o riostra continua y éstas
              dependerán del tamaño de la cubierta. Habitualmente la conexión
              entre la estructura y las cimentaciones se realiza mediante taco
              químico.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>¿Qué cubierta de Multy Padel <strong>te gusta?</strong></h2>
            <Carousel :items="projects" to="/fr/projets/" button="Voir plus" />
          </div>
        </div>
      </div>
    </section>

    <section class="green-bg overlaped-box">
      <div class="container w-text">
        <div
          class="
            row
            flex-column-reverse flex-md-row
            two-col-section
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <div class="col-md-6 overlaped-col">
            <div class="container">
              <div class="row bg-dark-gray">
                <div class="col-md-12 p-3 color-secondary text-center">
                  <h2>
                    ¡Tenemos <strong>más de 12 diseños</strong> de pabellones
                    Multy esperandote!<br />
                  </h2>
                  <p class="lead text-center">
                    Y si necesitas
                    <strong><em>una medida especial</em></strong> para cubrir
                    tus instalaciones, nuestro equipo técnico se encargará de
                    crear un modelo de cubierta especial para tu pista
                    individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactForm
      lang="en"
      title="¿Quieres una cubierta <br><strong>Multy Pádel</strong>?"
      subtitle="Consulta sin compromiso las oportunidades y
posibilidades de nuestros proyectos y cubiertas
para pistas de pádel dobles, todas las
necesidades las atiende Okapadel."
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { DefaultContent } from "~/types";
const { find } = useStrapi4();

const { data } = await useAsyncData("cubierta-multy-padel-page", () =>
  find<DefaultContent>("cubierta-multy-padel-page", { locale: "en" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-de-multy-padel-te-gusta-first-slide-min.jpg",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-multy-padel-te-gusta-second-slide-min.jpg",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-multy-padel-te-gusta-third-slide-min.jpg",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
]);

const content = computed(() => data.value.data.attributes);
</script>
