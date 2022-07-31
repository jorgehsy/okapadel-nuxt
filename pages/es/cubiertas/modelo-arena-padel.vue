<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-cubierta-arena"></div>
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
              Es un pabellón modular de grandes dimensiones, formado por una
              estructura de aluminio anodizado y aleaciones de alta resistencia.
              Cuenta con perfiles de celosía y está cubierto con una membrana de
              PVC de alta resistencia.
              <strong
                ><em>
                  Si necesitas cubrir seis pistas o más, este es tu modelo.</em
                ></strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/sorprende-con-un-modelo-de-campeonato-min.jpg"
              alt="pabellón modular para cubrir de 2 a 6 pistas de pádel"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/completa-tu-pabellon-modular-con-los-cerramientos-del-arena-padel-min.jpg"
              alt="Completa tu pabellón modular con los cerramientos para cubiertas Arena Padel"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-green">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/y-las-fijaciones-de-una-gran-cubierta-min.jpg"
              alt="Fijaciones firmes, seguras y garantizadas para tu pabellón Arena Padel"
            />
          </div>
          <div class="col-md-6 color-white">
            <div v-html="content.thirdSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>¿Qué cubierta Arena Padel <strong>eliges?</strong></h2>
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
                    ¡Tenemos <strong>más de 5 diseños</strong> Arena
                    esperando!<br />
                  </h2>
                  <p class="lead text-center">
                    Pero si ninguno de estos encaja con tu proyecto,
                    <strong><em>crearemos el modelo desde cero</em></strong>
                    para cubrir múltiples pistas de pádel.
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
const { $SeoMetaData } = useNuxtApp()
const { find } = useStrapi4()
const route = useRoute()
const config = useRuntimeConfig();;

const { data } = await useAsyncData("cubierta-arena-padel-page", () =>
  find<DefaultContent>("cubierta-arena-padel-page", { locale: "es" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-arena-padel-eliges-first-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-second-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-third-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
]);

const content = computed(() => data.value.data.attributes);

const pages = computed (() => ({
  en: '/en/covers-and-canopies/arena-padel-court',
  es: '/es/cubiertas/modelo-arena-padel',
  fr: '/fr/couvertures/arena-padel',
  it: '/it/coperture/arena-padel',
}))

const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(metaData, siteUrl);

useHead(metaDataParsed);
</script>
