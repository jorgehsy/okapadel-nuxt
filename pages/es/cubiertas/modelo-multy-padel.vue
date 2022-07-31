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
            <h1 class="hero-title" v-html="content.title"></h1>
            <p class="hero-subtitle" v-if="content.subtitle" v-html="content.subtitle"></p>
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
            <div v-html="content.firstSection?.rightColumn"></div>
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
            <div v-html="content.secondSection?.leftColumn"></div>
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
            <div v-html="content.thirdSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>¿Qué cubierta de Multy Padel <strong>te gusta?</strong></h2>
            <Carousel :items="projects" to="/es/proyectos/" />
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

    <ContactForm :title="content.contact.title" :subtitle="content.contact.subtitle"  />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { DefaultContent } from "~/types";
const { find } = useStrapi4();

const { data } = await useAsyncData("cubierta-multy-padel-page", () =>
  find<DefaultContent>("cubierta-multy-padel-page", { locale: "es" })
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