<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-soluciones
      "
      id=""
    >
    <div class="hero-bg hero-soluciones"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 text-center w-text">
            <h1 class="hero-title" v-html="content.title">
            </h1>
            <p class="hero-subtitle" v-if="content.subtitle" v-html="content.subtitle">
            </p>
          </div>
        </div>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img  loading="lazy" src="/images/soluciones/cubrimos-las-instalaciones-del-club-min.webp" alt="Padel court canopy." />
          </div>
          <div class="col-md-6">
            <div class="mb-3" v-html="content.firstSection?.rightColumn"></div>
            <div class="text-center">
              <NuxtLink class="btn btn-secondary" rel="" to="/en/covers-and-canopies"
              >See Court Covers and Canopies</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img loading="lazy" src="/images/soluciones/instalacion-de-pistas-de-padel-min.webp" alt="Installation of padel courts" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="mb-3" v-html="content.secondSection?.leftColumn"></div>
            <div class="text-center">
              <NuxtLink class="btn btn-secondary" rel="" to="/en/courts"
              >See Courts</NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  loading="lazy" src="/images/soluciones/iluminacion-y-climatizacion-de-pistas-de-padel-min.webp" alt="Lighting, climate control, and personalized signage for padel courts" />
          </div>
          <div class="col-md-6">
            <div v-html="content.thirdSection?.rightColumn"></div>
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
  'soluciones-page',
  () => find<DefaultContent>('soluciones-page', {locale: "en"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  es: '/es/soluciones',
  en: '/en/solutions',
  it: '/it/soluzioni',
  fr: '/fr/solutions',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>

