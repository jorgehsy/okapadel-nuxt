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
              Si tratta di tendostrutture modulari di grandi dimensioni, formate da una struttura in alluminio anodizzato e leghe ad alta resistenza. Ha profili a traliccio ed è ricoperto da una membrana in PVC ad alta resistenza. 
              <strong
                ><em>
                  Se avete bisogno di coprire sei campi o più, questo è il modello che fa per voi.</em
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
            <nuxt-img
              loading="lazy" src="/images/cubiertas__modelo_arena_padel/sorprende-con-un-modelo-de-campeonato-min.webp"
              alt="Abbiamo più di 5  modelli di coperture Arena padel che vi aspettano"
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
            <nuxt-img
              loading="lazy" src="/images/cubiertas__modelo_arena_padel/completa-tu-pabellon-modular-con-los-cerramientos-del-arena-padel-min.webp"
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
            <nuxt-img
              loading="lazy" src="/images/cubiertas__modelo_arena_padel/y-las-fijaciones-de-una-gran-cubierta-min.webp"
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
            <h2>Che tendostruttura Arena Padel <strong>vi piace?</strong></h2>
            <Carousel :items="projects" to="/it/progetti" button="Per saperne di più" />
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
                    Abbiamo <strong>più di 5  modelli</strong> di coperture Arena padel che vi aspettano! <br />
                  </h2>
                  <p class="lead text-center">
                    Ma se nessuno di questi si adatta al vostro progetto, 
                    <strong><em>creeremo il modello da zero </em></strong>
                    per coprire più campi da padel.
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
            <NuxtLink class="nav-link" rel="" to="/it/coperture/multy-padel"
              >Ver cubierta Multy
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/it/coperture/single-padel"
              >Vedi copertura Single 
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

const { data } = await useAsyncData("cubierta-arena-padel-page", () =>
  find<DefaultContent>("cubierta-arena-padel-page", { locale: "it" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-arena-padel-eliges-first-slide--min.webp",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-second-slide--min.webp",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-third-slide--min.webp",
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
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>
