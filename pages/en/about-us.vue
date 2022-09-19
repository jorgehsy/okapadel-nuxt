<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-nosotros" id="">
      <div class="hero-bg hero-nosotros"></div>
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

          <div class="col-md-6 mt-3"><nuxt-img  loading="lazy" src="/images/nosotros/que-es-okapadel--min.jpg" /></div>
        </div>
      </div>
    </section>

    <section class="two-col-section w-text blue-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img  loading="lazy" src="/images/nosotros/por-que-se-creo_okapadel.-min.jpg" />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section w-text green-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-8">
            <h2 class="fw-section-title">
              Advantages of our <strong>All-In-One</strong> Service.
            </h2>
            <p class="lead">
              The creation of padel facilities can be very expensive in terms of time and money if more than one supplier is contracted. For this reason, we include all the necessary services in one: from the assembly of the padel court to the signage to accompany it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <div v-html="content.thirdSection?.leftColumn"></div>
          </div>

          <div class="col-md-6 mt-3"><nuxt-img  loading="lazy" src="/images/nosotros/y-ademas-encontramos-patrocinio-para-tu-club-min.jpg" /></div>
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
  'nosotros-page',
  () => find<DefaultContent>('nosotros-page', {locale: "en"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/about-us',
  es: '/es/nosotros',
  fr: '/fr/a-propos-de-nous',
  it: '/it/noi',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>

