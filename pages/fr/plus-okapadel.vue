<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-okapadel"></div>
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
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/okapadel/cubre-tu-pista-con-un-diseno-ganador-min.webp"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/okapadel/enamorate-de-la-arquitectura-textil--min.webp"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div
          class="row d-flex align-items-center flex-column-reverse flex-md-row"
        >
          <div class="col-md-6">
           <div v-html="content.thirdSection?.leftColumn"></div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/okapadel/descubre-la-calidad-de-nuestras-carpas-plegables-min.webp"
              alt="Cubierta para pistas de pádel dobles"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactForm lang="fr" :title="content.contact.title" :subtitle="content.contact.subtitle"  />
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
  'plus-okapadel-page',
  () => find<DefaultContent>('plus-okapadel-page', {locale: "fr"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/more-okapadel',
  es: '/es/plus-okapadel',
  fr: '/fr/plus-okapadel',
  it: '/it/plus-okapadel',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>

