<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-pista-panoramic
      "
      id=""
    >
    <div class="hero-bg hero-pista-panoramic"></div>
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
              Una pista panorámica diáfana equipada
              <strong><em>para llevar el juego a otro nivel.</em></strong
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
            <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/la-pista-de-padel-panoramic-court-min.webp" alt="Pista de pádel panorámica diáfana de alta calidad" />
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
            <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/sujecion-min.webp" alt="Sujecciones y anclajes para las pistas panorámicas de Okapadel" />
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
            <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/vidrios-templados-min.webp" alt="Vidrios templados para pistas panorámicas de pádel - Okapadel Panoramic Court" />
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
              <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/pintura-min.webp" alt="Pinturas ecológicas de gran durabilidad"/>
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
            <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/cesped-min.webp" alt="Césped pistas de pádel panorámicas"/>
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
            <nuxt-img  loading="lazy" src="/images/pistas__modelo_panoramic_court/iluminacion-min.webp" alt="Iluminación LED para pistas de pádel"/>
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
            <nuxt-img  loading="lazy" src="/images/personalizacion.svg" alt="Tu pista panorámica de pádel adaptada a tus necesidades e imagen." />
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
            <NuxtLink class="nav-link" rel="" to="/es/pistas/modelo-basic-court"
              >Ver pista basic
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <ContactForm :title="content.contact.title" :subtitle="content.contact.subtitle"  />
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
  'panoramic-court-page',
  () => find<DefaultContent>('panoramic-court-page', {locale: 'es'})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/courts/panoramic-court-model',
  es: '/es/pistas/modelo-panoramic-court',
  fr: '/fr/courts/modele-panoramic-court',
  it: '/it/campi/modello-panoramic-court',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>
