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

          <div class="col-md-6 mt-3"><nuxt-img  loading="lazy" src="/images/nosotros/que-es-okapadel--min.webp" /></div>
        </div>
      </div>
    </section>

    <section class="two-col-section w-text blue-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img  loading="lazy" src="/images/nosotros/por-que-se-creo_okapadel.-min.webp" />
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
              Ventajas de ser un servicio <strong>Todo-en-Uno</strong>
            </h2>
            <p class="lead">
              La creación de unas instalaciones de pádel pueden llegar a ser muy costosas en tiempo y dinero, si se contrata más de un proveedor. Por eso, nosotros englobamos todos esos servicios en uno: desde el montaje de la pista a la rotulación de la cubierta de pádel.
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

          <div class="col-md-6 mt-3"><nuxt-img  loading="lazy" src="/images/nosotros/y-ademas-encontramos-patrocinio-para-tu-club-min.webp" /></div>
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
  'nosotros-page',
  () => find<DefaultContent>('nosotros-page', {locale: 'es'})
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

