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
            <img  src="~/assets/images/soluciones/cubrimos-las-instalaciones-del-club-min.jpg" alt="cubierta pista de padel" />
          </div>
          <div class="col-md-6">
            <div class="mb-3" v-html="content.firstSection?.rightColumn"></div>
            <div class="text-center">
              <NuxtLink class="btn btn-secondary" rel="" to="/fr/couvertures/"
              >Ver cubiertas</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img src="~/assets/images/soluciones/instalacion-de-pistas-de-padel-min.jpg" alt="Instalación de pistas de pádel" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="mb-3" v-html="content.secondSection?.leftColumn"></div>
            <div class="text-center">
              <NuxtLink class="btn btn-secondary" rel="" to="/fr/courts/"
              >Ver pistas</NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 ">
            <img  src="~/assets/images/soluciones/iluminacion-y-climatizacion-de-pistas-de-padel-min.jpg" alt="cubierta pista de padel" />
          </div>
          <div class="col-md-6">
            <div v-html="content.thirdSection?.rightColumn"></div>
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
const { find } = useStrapi4()

const { data } = await useAsyncData(
  'soluciones-page',
  () => find<DefaultContent>('soluciones-page', {locale: "fr"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  es: '/es/soluciones',
  en: '/en/solutions',
  it: '/it/soluzioni',
  fr: '/fr/solutions',
}))
useHead({
  title: data?.value?.data?.attributes?.seo?.metaTitle,
  meta:[
    { name: 'description', content: data?.value?.data?.attributes?.seo?.metaDescription},
    { name: 'keywords', content: data?.value?.data?.attributes?.seo?.keywords},
    { name: 'robots', content: data?.value?.data?.attributes?.seo?.metaRobots},
    { name: 'title', content: data?.value?.data?.attributes?.seo?.metaTitle},
  ],
  link:[
    { rel: 'canonical', href: data?.value?.data?.attributes?.seo?.canonicalURL},
  ],
  viewport: data?.value?.data?.attributes?.seo?.metaViewport,
});
</script>

