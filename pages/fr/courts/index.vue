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
            <p class="lead">Organisez des tournois de padel avec nos courts: <strong>“BASIC COURT”</strong> y <strong>“PANORAMIC
                COURT”.</strong> Ces modèles sont fabriqués dans nos installations et sont conformes aux normes de la <strong><em>Fédération espagnole de padel et la Fédération internationale de padel. </em></strong><br></p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img  src="~/assets/images/pistas/modelo-basic-court-pista-convencional-para-un-deporte-innovador-min.jpg" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/>
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/fr/courts/modele-basic-court"
               rel="next">Voir le court Basic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <img  src="~/assets/images/pistas/modelo-panoramic-court-pista-transparente-para-captar-todas-las-miradas-min.jpg" />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>

            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/fr/courts/modele-panoramic-court"
               rel="next">Voir le court Panoramic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6 text-center mb-4">
            <h2><strong>Les principaux composants </strong>des courts.</h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul lead">
              <li> 
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Structure métallique:</em></strong> une structure avec des profilés en acier galvanisé et un système anti-vibration.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Parois:&nbsp;</em></strong> des verres trempés de sécurité avec bords polis conformément à la norme UNE.
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Peinture:</em></strong> peinture en poudre pour extérieurs respectueuse de l’environnement.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Gazon:</em></strong> gazon synthétique pour terrains de sport de différentes couleurs.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Fixation:</em></strong> une fixation solide au moyen de chevilles mécaniques.
              </li>
            </ul>
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
  'pista-page',
  () => find<DefaultContent>('pista-page', {locale: "fr"})
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