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
              Si tratta di una tendostruttura modulare con una struttura metallica ricoperta da una membra-na tessile tesa. Questa tendostruttura non ha pilastri centrali e 
              <strong
                ><em
                  >permette di coprire i singoli campi da paddle in modo aperto.</em
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
              alt="Modelli Single: Tendostrutture per campi da padel individuali in 72 ore"
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
              alt="Completate la copertura del campo da padel a modo vostro"
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
              alt="Fissa solidamente la copertura del campo da padel senza complicazioni"
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
              <strong>Qual è la vostra </strong>copertura single padel?
            </h2>
            <Carousel :items="projects" to="/it/progetti/" button="Per saperne di più" />
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
                    Abbiamo <strong>più di 17 modelli </strong> di coperture Single padel che vi aspettano!<br />
                  </h2>
                  <p class="lead text-center">
                    E se avete bisogno 
                    <strong><em>di una misura speciale </em></strong> per coprire le vostre strutture, il nostro team tecnico creerà un modello di copertura su misu-ra per il vostro campo.
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
            <NuxtLink class="nav-link" rel="" to="/it/coperture/arena-padel"
              >Ver cubierta Arena
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/it/coperture/multy-padel"
              >Vedi copertura Multy 
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
  find<DefaultContent>("cubierta-single-padel-page", { locale: "it" })
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
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>