<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-instalaciones
      "
      id=""
    >
      <div class="hero-bg hero-instalaciones"></div>
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

    <section class="fw-section-subtitle pt-0">
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="col-md-8">
            <h2 class="fw-section-title pb-0">
              <strong>Vende productos</strong> de pádel en tu propia tienda
              especializada.
            </h2>
            <p class="lead text-left">
              Podemos construir una cubierta fija o temporal para que tengas tu
              tienda donde se venda material de tu club o tu patrocinador.
            </p>
            <nuxt-img 
              loading="lazy" src="/images/vende-productos-de-padel-en-tu-propia-tienda-especializada.svg"
              alt="Proveedores material pádel"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/instalaciones_de_padel/alquila-material-deportivo-en-la-carpa-min.webp"
            />
          </div>
          <div class="col-md-6 color-primary">
            <div v-html="content.firstSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section bg-gray">
      <div class="container">
        <div
          class="row d-flex align-items-center flex-column-reverse flex-md-row"
        >
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/instalaciones_de_padel/que-quieres-crear-en-tu-espacio-de-padel--min.webp"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>
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
  'instalaciones-page',
  () => find<DefaultContent>('instalaciones-page', {locale: 'es'})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/padel-facilities',
  es: '/es/instalaciones-de-padel',
  fr: '/fr/installations-de-padel',
  it: '/it/installazioni-di-padel',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>

