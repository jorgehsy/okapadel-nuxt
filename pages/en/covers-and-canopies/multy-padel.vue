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
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>
    <section class="fw-section-subtitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="lead">
              This is a modular pavilion with an aluminum or steel structure that is covered with a highly resistant PVC/fabric membrane. <br>This medium-sized model will cover
              <strong><em>from two to six padel courts.</em></strong
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
              src="~/assets/images/cubiertas__modelo_multy_padel/descubre-los-cerramientos-del-multy-padel-min.webp"
              alt="Multy Model: Expandable modular pavilion for padel courts. "
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
              src="~/assets/images/cubiertas__modelo_multy_padel/un-formato-estandar-que-se-adapta-min.webp"
              alt="Top off your padel court canopy in a personalized way. "
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
              src="~/assets/images/cubiertas__modelo_multy_padel/y-las-fijaciones-de-la-cubierta-doble-min.webp"
              alt="We take care of your padel pavilion's anchoring in a totally safe and durable way"
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
            <h2>What Multy canopy <strong>do you like?</strong></h2>
            <Carousel :items="projects" to="/en/projects/" button="See more" />
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
                  <h2>We have <strong>more than 12 Multy pavilion designs</strong> waiting for you! <br />
                  </h2>
                  <p class="lead text-center">
                    If you need a 
                    <strong><em>different structure </em></strong> for your padel courts, we will make a custom design for your canopy for you to cover up to two courts.
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
              ><i class="fa-fw fa-solid fa-plus g-text"></i>See the Single model
            </NuxtLink>
          </div>
          <div class="col-md-6 text-right">
            <NuxtLink class="nav-link" rel="" to="/en/covers-and-canopies/arena-padel-court"
              ><i class="fa-fw fa-solid fa-plus g-text"></i>See the Arena Court Cover
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

const { data } = await useAsyncData("cubierta-multy-padel-page", () =>
  find<DefaultContent>("cubierta-multy-padel-page", { locale: "en" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-de-multy-padel-te-gusta-first-slide-min.webp",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-multy-padel-te-gusta-second-slide-min.webp",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-de-multy-padel-te-gusta-third-slide-min.webp",
    imageAlt: "cubierta-de-multy-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
]);

const content = computed(() => data.value.data.attributes);

const pages = computed (() => ({
  en: '/en/covers-and-canopies/multy-padel',
  es: '/es/cubiertas/modelo-multy-padel',
  fr: '/fr/couvertures/multy-padel',
  it: '/it/coperture/multy-padel',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>