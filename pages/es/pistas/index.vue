<template>
  <div>
    
    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-pistas" id="">
      <div class="hero-bg hero-pistas"></div>
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
            <p class="lead">Organiza torneos de pádel con nuestras pistas: <strong>“BASIC COURT”</strong> y <strong>“PANORAMIC
                COURT”.</strong> Se fabrican en nuestras instalaciones con un diseño propio y cumplen con la normativas de la Federación Española de Pádel y la Federación Internacional del Pádel </p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img  loading="lazy" src="/images/pistas/modelo-basic-court-pista-convencional-para-un-deporte-innovador-min.webp" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/>
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/es/pistas/modelo-basic-court"
               rel="next">Ver pista Basic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  loading="lazy" src="/images/pistas/modelo-panoramic-court-pista-transparente-para-captar-todas-las-miradas-min.webp" />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>

            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/es/pistas/modelo-panoramic-court"
               rel="next">Ver pista Panoramic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6 text-center mb-4">
            <h2><strong>Los componentes principales </strong>de las pistas.</h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul lead">
              <li> 
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Estructura metálica:</em></strong> Estructura con perfiles de acero galvanizado y sistema antivibración.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Parede:&nbsp;</em></strong>Vidrios templados de seguridad con cantos pulidos según normal UNE.
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Pintura:</em></strong> Pintura en polvo para exteriores amigable con el medio ambiente.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Césped:</em></strong> Césped artificial deportivo con distintos colores.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Sujeción: </em></strong>Anclaje sólido realizado con tacos mecánicos.
              </li>
            </ul>
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
  'pista-page',
  () => find<DefaultContent>('pista-page', {locale: 'es'})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/courts',
  es: '/es/pistas',
  fr: '/fr/courts',
  it: '/it/campi',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>