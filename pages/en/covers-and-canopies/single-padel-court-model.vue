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
              This is a modular pavilion with a metal structure that is covered with a tensile fabric mem-brane. 
              This construction does not have central pillars and 
              <strong
                ><em
                  >allows for individual padel courts to be covered with an open-plan design.</em
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
              alt="Single Model: A pavilion for an individual padel court in 72 hours. "
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
              alt="Top off the canopy for your padel court your way. "
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
              alt="Anchor the canopy for your padel court solidly and without complications"
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
              What Single model <strong>is for you?</strong>
            </h2>
            <Carousel :items="projects" to="/en/projects" button="See more" />
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
                    We have more than <strong>17 Single canopy designs</strong> waiting for you! <br />
                  </h2>
                  <p class="lead text-center">
                    And if you need 
                    <strong><em>a special size</em></strong> to cover your facilities, our technical team will take care of cre-ating a special model for your individual court.
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
            <NuxtLink class="nav-link" rel="" to="/en/covers-and-canopies/multy-padel"
              >See the Multy Court Cover
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/en/covers-and-canopies/arena-padel-court"
              >See the Arena Court Cover
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <ContactForm :title="content.contact.title" :subtitle="content.contact.subtitle" lang="en" />
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
  find<DefaultContent>("cubierta-single-padel-page", { locale: "en" })
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
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>