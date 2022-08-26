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
            <p class="lead">Organizza tornei di padel con i nostri campi: <strong>“BASIC COURT”</strong> y <strong>“PANORAMIC
                COURT”.</strong> Sono prodotti nei nostri stabilimenti con un design proprio e sono conformi ai regolamenti della <strong><em>Federazione Spagnola di Padel e della Federazione Internazionale di Padel. </em></strong><br></p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img  src="~/assets/images/pistas/modelo-basic-court-pista-convencional-para-un-deporte-innovador-min.webp" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/>
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/it/campi/modello-basic-court/"
               rel="next">Vedi campo Basic Court</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <img  src="~/assets/images/pistas/modelo-panoramic-court-pista-transparente-para-captar-todas-las-miradas-min.webp" />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>

            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/it/campi/modello-panoramic-court/"
               rel="next">Vedi campo panoramico</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6 text-center mb-4">
            <h2><strong>Le componenti principali  </strong>del campo.</h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul lead">
              <li> 
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Struttura metallica:</em></strong> struttura con profili in acciaio zincato e sistema antivibrante.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Pareti:</em></strong> vetro di sicurezza temperato con bordi lucidati secondo lo standard UNE.
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Vernice:</em></strong> vernice a polvere ecologica per esterni.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Erba sintetica:</em></strong> erba sintetica artificiale in diversi colori.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Fissaggio:</em></strong> ancoraggio solido realizzato con blocchi meccanici.
              </li>
            </ul>
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
  'pista-page',
  () => find<DefaultContent>('pista-page', {locale: "it"})
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