<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg" id="">
      <div class="hero-bg hero-calidad"></div>
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

    <section class="two-col-section bg-green">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  loading="lazy" src="/images/calidad/con-okapadel-ganamos-todos-min.webp" 
            alt="Produttori di campi da padel sostenibili ed ecofriendly" />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6  text-white ">
            <div v-html="content.secondSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary mt-4"
                rel="external"
                target="_blank"
                to="https://okatent.com/certificados"
                >Vedere Certificati 
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img  loading="lazy" src="/images/calidad/certificados-para-tu-club-de-padel-min.webp" />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img  loading="lazy" src="/images/calidad/politicas-de-calidad-okapadel-min.webp" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/></div>
          <div class="col-md-6 mt-3">
            <div v-html="content.thirdSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink class="btn btn-white" to="https://okatent.com/pdfs/calidad-es.pdf" target="_blank" rel="external">Vedi Politica della qualità</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactForm lang="it" :title="content.contact.title" :subtitle="content.contact.subtitle"  />

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
  'calidad-page',
  () => find<DefaultContent>('calidad-page', {locale: "it"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  es: '/es/calidad',
  en: '/en/quality',
  fr: '/fr/qualite',
  it: '/it/qualita',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>

