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
            <p
              class="hero-subtitle"
              v-if="content.subtitle"
              v-html="content.subtitle"
            ></p>
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
              This is a modular pavilion of great size, made up of an anodized
              aluminum structure and high-resistance alloys. It features truss
              aluminum sections and is covered with a highly resistant PVC
              membrane.
              <br />
              <strong
                ><em>
                  If you need to cover six courts or more, this is your
                  model.</em
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
            <nuxt-img
              loading="lazy" src="/images/cubiertas__modelo_arena_padel/completa-tu-pabellon-modular-con-los-cerramientos-del-arena-padel-min.webp"
              alt="Top off your modular pavilion with our Arena side enclosures for the upper canopy."
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
              alt="Firm, safe, and guaranteed anchoring for your Arena pavilion. "
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
            <h2>What Arena model  <strong>do you choose?</strong></h2>
            <Carousel :items="projects" to="/en/projects" button="See more" />
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
                    We have  <strong>more than 5 Arena designs </strong> waiting for you! <br />
                  </h2>
                  <p class="lead text-center">
                    But if none of these designs fit your project, <strong><em>we will create a model from scratch</em></strong> just for you so that you can cover multiple padel courts.
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
            <NuxtLink class="nav-link" rel="" to="/en/covers-and-canopies/single-padel-court-model"
              >See the Single model
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/en/covers-and-canopies/multy-padel"
              >See the Multy Court Cover
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <ContactForm
      :title="content.contact.title"
      :subtitle="content.contact.subtitle"
      lang="en"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { DefaultContent } from "~/types";
const { $SeoMetaData } = useNuxtApp();
const { find } = useStrapi4();
const route = useRoute();
const config = useRuntimeConfig();

const { data } = await useAsyncData("cubierta-arena-padel-page", () =>
  find<DefaultContent>("cubierta-arena-padel-page", { locale: "en" })
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
const pages = computed(() => ({
  en: "/en/covers-and-canopies/arena-padel-court",
  es: "/es/cubiertas/modelo-arena-padel",
  fr: "/fr/couvertures/arena-padel",
  it: "/it/coperture/arena-padel",
}));
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>
