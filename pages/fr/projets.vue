<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
      "
      id=""
    >
      <div class="hero-bg hero-proyectos"></div>
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

    <section>
      <div class="container">
        <div class="grid-project"  v-if="projects.length">
          <div class="item-project" v-for="project in projects" :key="project.id">
            <img  :src="project.image" />
            <h3 class="cards-title">{{ project.name }}</h3>
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
  'proyecto-page',
  () => find<DefaultContent>('proyecto-page', {locale: "fr"})
)

const content = computed (() => data.value.data.attributes)
const projects = computed (() => [
    { id: 1, image: "/_nuxt/assets/images/proyectos/proyectos-arena-padel-milan-min.jpg", name: "Arena Padel Milán", description: "..." },
    { id: 2, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-baskonia-victoria-spain-min.jpg", name: "Multy Padel Baskonia Victoria España", description: "..." },
    { id: 3, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-dunk-min.jpg", name: "Multy Padel Dunk", description: "..." },
    { id: 4, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-lagrajera-logrono-spain-min.jpg", name: "Multy Padel Lagrajera Logrono España", description: "..." },
    { id: 5, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-odrimont-belgium-min.jpg", name: "Multy Padel Odrimont Bélgica", description: "..." },
    { id: 6, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-toulouse-france-min.jpg", name: "Multy Padel Toulouse Francia", description: "..." },
    { id: 7, image: "/_nuxt/assets/images/proyectos/proyectos-multy-padel-wolouwe-belgium-min.jpg", name: "Multy Padel Wolouwe Bélgica", description: "..." },
    { id: 8, image: "/_nuxt/assets/images/proyectos/proyectos-single-padel-jodoine-belgium-min.jpg", name: "Single Padel Jodoine Bélgica", description: "..." },
    { id: 9, image: "/_nuxt/assets/images/proyectos/proyectos-single-padel-tremblay-france-min.jpg", name: "Single Padel Tremblay Francia", description: "..." },
])

const pages = computed (() => ({
  en: '/en/projects',
  es: '/es/proyectos',
  fr: '/fr/projets',
  it: '/it/progetti',
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
