<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-pista-basic
      "
      id=""
    >
    <div class="hero-bg hero-pista-basic"></div>
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
            <p>
              A compact court that is <strong><em>easy to install and maintain. </em></strong
              ><br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section py-0">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
          </div>
          <div class="col-md-6 two-col-section">
            <img 
              src="~/assets/images/pistas__modelo_basic_court/la-pista-de-padel-basic-court-min.webp"
              alt="Versatile padel courts that are easy to install and maintain. "
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <div v-html="content.secondSection?.leftColumn"></div>
          </div>
          <div class="col-md-6 gray-bg p-5 mt-5">
            <div v-html="content.secondSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img 
              src="~/assets/images/pistas__modelo_basic_court/sujecion-min.webp"
              alt="Anchors and fasteners for our Basic Court model: easy installation and maintenance with total security and all possible guarantees. "
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.thirdSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section py-0">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-lg-12 pb-3">
            <img 
              src="~/assets/images/pistas__modelo_basic_court/vidrios-templados-min.webp"
              alt="Glass panes for padel courts – glass padel courts. "
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.fourthSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img 
              src="~/assets/images/pistas__modelo_basic_court/pintura-min.webp"
              alt="Ecological, zero-VOC paint for padel courts"
            />
          </div>
          <div class="col-md-6 mt-4">
            <div v-html="content.fifthSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-lg-12">
            <img  src="~/assets/images/pistas__modelo_basic_court/cesped-min.webp" alt="Artificial padel court turf. " />
          </div>
          <div class="col-md-6">
            <div v-html="content.sixthSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>


    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img  src="~/assets/images/pistas__modelo_basic_court/iluminacion-min.webp" alt="Padel court spotlights - LED lighting for padel courts." />
          </div>
          <div class="col-md-6">
            <div v-html="content.seventhSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-lg-12">
            <img  src="~/assets/images/personalizacion.svg" />
          </div>
          <div class="col-md-6">
            <div v-html="content.eighthSection?.leftColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center next-page-button">
          <div class="col-md-6 text-center">
            <NuxtLink class="nav-link" rel="" to="/en/courts/panoramic-court-model"
              ><i class="fa-fw fa-solid fa-plus g-text"></i>See our Panoramic Court 
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>


    <ContactForm lang="en" :title="content.contact.title" :subtitle="content.contact.subtitle"  />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DefaultContent } from '~/types'
const { $SeoMetaData } = useNuxtApp()
const { find } = useStrapi4()
const route = useRoute()
const config = useRuntimeConfig();

const { data } = await useAsyncData(
  'basic-court-page',
  () => find<DefaultContent>('basic-court-page', {locale: "en"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/courts/basic-court-model',
  es: '/es/pistas/modelo-basic-court',
  fr: '/fr/courts/modele-basic-court',
  it: '/it/campi/modello-basic-court',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>
