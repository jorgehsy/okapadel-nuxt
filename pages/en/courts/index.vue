<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-pistas
      "
      id=""
    >
      <div class="hero-bg hero-pistas"></div>
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
              Organize tournaments with our “BASIC COURT” and “PANORAMIC COURT” models: 
              <strong>“BASIC COURT”</strong> y
              <strong>“PANORAMIC COURT”.</strong> <br> They are manufactured in our facilities with our own design and comply with the regulations of the
              <strong
                ><em
                  >Spanish Padel Federation and the International Padel Federation. </em
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
              src="~/assets/images/pistas/modelo-basic-court-pista-convencional-para-un-deporte-innovador-min.jpg"
              alt="Manufacturers of Padel Courts - International Padel Federation - Okapadel"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-white"
                to="/en/courts/basic-court-model/"
                rel="next"
                >See our Basic Court</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <img
              src="~/assets/images/pistas/modelo-panoramic-court-pista-transparente-para-captar-todas-las-miradas-min.jpg"
              alt="Manufacturers of Panoramic Padel Courts  – Padel Courts by Okapadel"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>

            <div class="button-box">
              <NuxtLink
                class="btn btn-white"
                to="/en/courts/panoramic-court-model/"
                rel="next"
                >See our Panoramic Court</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6 text-center mb-4">
            <h2><strong>The main components </strong> of the courts</h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul lead">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Metal structure:</em></strong>Structure featuring galvanized steel sections and an anti-vibration system.<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Walls:&nbsp;</em></strong
                >Tempered safety glass with polished edges in accordance with UNE Standards.
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Paint:</em></strong> Powder coating for exteriors that is friendly to the environment.<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Grass:</em></strong> Artificial sports grass with different colors.<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Anchoring: </em></strong>Solid fastening with mechanical anchors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ContactForm
      lang="en"
      :title="content.contact.title"
      :subtitle="content.contact.subtitle"
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

const { data } = await useAsyncData("pista-page", () =>
  find<DefaultContent>("pista-page", { locale: "en" })
);

const content = computed(() => data.value.data.attributes);

const pages = computed(() => ({
  en: "/en/courts",
  es: "/es/pistas",
  fr: "/fr/courts",
  it: "/it/campi",
}));
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>