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
              Tente modulaire avec structure métallique recouverte d’une membrane textile tendue. L’absence de piliers centraux 
              <strong
                ><em
                  >de ce bâtiment permet de couvrir les courts de padel individuels sans obstacles.</em
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
              src="~/assets/images/cubiertas__modelo_single_padel/permiten-una-instalacion-rapida-y-rentable-min.webp"
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
              src="~/assets/images/cubiertas__modelo_single_padel/_descubre-los-cerramientos-del-single-padel-min.webp"
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
              src="~/assets/images/cubiertas__modelo_single_padel/y-las-fijaciones-de-la-cubierta-individual-min.webp"
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
              Quelle couverture Single Padel <strong>est la vôtre?</strong>
            </h2>
            <Carousel :items="projects" to="/fr/projets/" button="Voir plus" />
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
                    <strong>Plus de 17 modèles </strong>de couverture Single vous attendent ! <br />
                  </h2>
                  <p class="lead text-center">
                    Si vous cherchez 
                    <strong><em>des dimensions particulières</em></strong> pour couvrir vos installations, notre équipe technique se chargera de créer un modèle de couverture adapté à votre court individuel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center next-page-button">
          <div class="col-md-6 text-left">
            <NuxtLink class="nav-link" rel="" to="/fr/couvertures/arena-padel"
              ><i class="fa-fw fa-solid fa-plus g-text"></i>Voir la couverture Arena
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/fr/couvertures/multy-padel"
              ><i class="fa-fw fa-solid fa-plus g-text"></i>Voir la couverture Multy
            </NuxtLink>
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
const { $SeoMetaData } = useNuxtApp()
const { find } = useStrapi4()
const route = useRoute()
const config = useRuntimeConfig();;

const { data } = await useAsyncData("cubierta-single-padel-page", () =>
  find<DefaultContent>("cubierta-single-padel-page", { locale: "fr" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-first-slide-min.webp",
    imageAlt: "cubierta-de-single-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-second-slide-min.webp",
    imageAlt: "cubierta-de-single-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-single-padel-es-la-tuya-third-slide-min.webp",
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
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>