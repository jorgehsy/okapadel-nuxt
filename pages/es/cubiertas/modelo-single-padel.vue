<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-cubierta-single"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title" v-html="content.title"></h1>
            <p class="hero-subtitle" v-if="content.subtitle" v-html="content.subtitle"></p>
          </div>
        </div>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>

    <section class="fw-section-subtitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="lead">
              Es una carpa modular con estructura metálica cubierta con una
              membrana textil tensada. Esta nave no tiene pilares centrales y
              <strong
                ><em
                  >permite cubrir pistas de pádel individuales de forma
                  diáfana.</em
                ></strong
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
              src="~/assets/images/cubiertas__modelo_single_padel/permiten-una-instalacion-rapida-y-rentable-min.jpg"
              alt="carpa modular para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6 order-md-12">
            <div v-html="content.firstSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_single_padel/_descubre-los-cerramientos-del-single-padel-min.jpg"
              alt="Completa la cubierta de tu pista de pádel a tu manera"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div v-html="content.secondSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div
          class="row d-flex align-items-center flex-column-reverse flex-md-row"
        >
          <div class="col-md-6">
            <img
              src="~/assets/images/cubiertas__modelo_single_padel/y-las-fijaciones-de-la-cubierta-individual-min.jpg"
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
            <h2 class="fw-section-title pt-0">
              ¿Qué cubierta de Single Padel <strong>es la tuya?</strong>
            </h2>
            <Carousel :items="projects" to="/es/proyectos/" />
          </div>
        </div>
      </div>
    </section>

    <section class="blue-bg overlaped-box">
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
                    ¡Tenemos <strong>más de 17 diseños</strong> Single
                    esperando!<br />
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

const { data } = await useAsyncData("cubierta-single-padel-page", () =>
  find<DefaultContent>("cubierta-single-padel-page", { locale: "es" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-first-slide-min.jpg",
    imageAlt: "cubierta-de-single-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-second-slide-min.jpg",
    imageAlt: "cubierta-de-single-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-third-slide-min.jpg",
    imageAlt: "cubierta-de-single-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
]);

const content = computed(() => data.value.data.attributes);
const pages = computed (() => ({
  en: '/en/covers-and-canopies/single-padel-court-model',
  es: '/es/cubiertas/modelo-single-padel',
  fr: '/fr/couvertures/single-padel',
  it: '/it/coperture/single-padel',
}))
useHead({
  title: data?.value?.data?.attributes?.seo?.metaTitle,
  meta:[
    { name: 'description', content: data?.value?.data?.attributes?.seo?.metaDescription},
    { name: 'keywords', content: data?.value?.data?.attributes?.seo?.keywords},
    { name: 'robots', content: data?.value?.data?.attributes?.seo?.metaRobots},
    { name: 'title', content: data?.value?.data?.attributes?.seo?.metaTitle},
  ],
  link:[
    { rel: 'canonical', href: data?.value?.data?.attributes?.seo?.canonicalURL},
  ],
  viewport: data?.value?.data?.attributes?.seo?.metaViewport,
});
</script>