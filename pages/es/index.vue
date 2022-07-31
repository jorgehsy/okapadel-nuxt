<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-home
      "
      id=""
    >
      <div class="hero-bg hero-home"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 text-center w-text">
            <h1 class="hero-title" v-html="content.title"></h1>
            <p class="hero-subtitle" v-if="content.subtitle" v-html="content.subtitle"></p>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>
    <section class="fw-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6" v-html="content.firstSection?.leftColumn">
          </div>
          <div class="col-md-6 d-flex align-items-center" v-html="content.firstSection?.rightColumn">
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section white-bg d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            <div v-html="content.secondSection?.leftColumn"></div>
            <img 
              src="~/assets/images/home/beneficios-de-okapadel.svg"
              alt="beneficios de okapadel"
            />
          </div>
          <div class="col-md-6 d-flex align-items-center" v-html="content.secondSection?.rightColumn">
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section w-text green-bg d-flex">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img 
              src="~/assets/images/home/somos-fabricantes-de-espacios-de-padel-min.jpg"
            />
          </div>
          <div class="col-md-6" v-html="content.thirdSection?.rightColumn">
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="fw-section-title">
              <strong>Proyectos</strong> de pádel que hemos realizado
            </h2>
            <Carousel :items="projects" to="/es/proyectos/" />
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
  'homepage',
  () => find<DefaultContent>('homepage', {locale: 'es'})
)

const projects = computed (() => [
  {
    image: "proyectos-de-padel-que-hemos-realizado-first-slide-min.jpg",
    imageAlt: "proyectos-de-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "proyectos-de-padel-que-hemos-realizado-second-slide-min.jpg",
    imageAlt: "proyectos-de-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "proyectos-de-padel-que-hemos-realizado-third-slide-min.jpg",
    imageAlt: "proyectos-de-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
])

const content = computed (() => data.value.data.attributes)
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(metaData, siteUrl);

useHead(metaDataParsed);
</script>
