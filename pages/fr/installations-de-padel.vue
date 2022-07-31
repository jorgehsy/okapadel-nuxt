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
            <h1 class="hero-title">
              <strong>Crea una comunidad </strong> al rededor de tus nuevas
              instalaciones de pádel.
            </h1>
            <p class="d-none hero-subtitle"></p>
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
            <img 
              src="~/assets/images/vende-productos-de-padel-en-tu-propia-tienda-especializada.svg"
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
            <img 
              src="~/assets/images/instalaciones_de_padel/alquila-material-deportivo-en-la-carpa-min.jpg"
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
            <img 
              src="~/assets/images/instalaciones_de_padel/que-quieres-crear-en-tu-espacio-de-padel--min.jpg"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.secondSection?.rightColumn"></div>
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
  'instalaciones-page',
  () => find<DefaultContent>('instalaciones-page', {locale: "fr"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/padel-facilities',
  es: '/es/instalaciones-de-padel',
  fr: '/fr/installations-de-padel',
  it: '/it/installazioni-di-padel',
}))
useHead({
  title: data.value.data.attributes.seo.metaTitle,
  meta:[
    { name: 'description', content: data.value.data.attributes.seo.metaDescription},
    { name: 'keywords', content: data.value.data.attributes.seo.keywords},
    { name: 'robots', content: data.value.data.attributes.seo.metaRobots},
    { name: 'title', content: data.value.data.attributes.seo.metaTitle},
  ],
  link:[
    { rel: 'canonical', href: data.value.data.attributes.seo.canonicalURL},
  ],
  viewport: data.value.data.attributes.seo.metaViewport,
});
</script>

