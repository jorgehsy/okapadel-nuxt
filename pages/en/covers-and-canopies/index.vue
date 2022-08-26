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
      <div class="hero-bg hero-cubiertas"></div>
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
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-10">
            <p class="text-center">
              Racket sports like padel and tennis are susceptible to wind, rain, sun, and glare; thus, choos-ing a good cover/canopy/enclosure is essential to be able to <strong>enjoy these sports under the best of conditions</strong>.
            </p>
            <img 
              src="~/assets/images/cubiertas/cubre-tu-pista-con-un-diseno-ganador-min.webp"
              alt="Play padel 365 days a year."
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-12">
            <h2 class="fw-section-title text-center">
              Cover your court with a <strong>winning design!</strong>
            </h2>
            <p class="text-center">
              Covering one padel court is not the same as covering several, that's why we have created three cover models designed to meet your needs. <br>The 
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel individuales"
                    >Single</span
                  ></em
                ></strong
              > model, for individual courts; the
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel dobles"
                    >Multy</span
                  ></em
                ></strong
              >
              model for two courts; and the 
              <strong
                ><em
                  ><span title="Nave para múltiples pistas de pádel"
                    >Arena</span
                  ></em
                ></strong
              >
              model for multiple courts. <br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/cubierta-single-padel-min.webp"
              alt="Cover for individual padel courts."
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/en/covers-and-canopies/single-padel-court-model/"
                >See the Single model
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6">
            <div v-html="content.secondSection?.leftColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/en/covers-and-canopies/multy-padel/"
                >See the Multy Court Cover
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/cubierta-multy-padel-min.webp"
              alt="Cover for two padel courts"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/nave-arena-padel-min.webp"
              alt="Large-scale model for multiple padel courts"
            />
          </div>
          <div class="col-md-6">
           <div v-html="content.thirdSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/en/covers-and-canopies/arena-padel-court/"
                >See the Arena Court Cover
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg">
      <div class="container w-text">
        <div
          class="
            row
            flex-column-reverse flex-md-row
            d-flex
            align-items-center
          "
        >
          <div class="col-md-6">
            <h2 class="fw-section-title">
              <strong>The accessories </strong>that accompany our canopies...
            </h2>
            <p>Turn your canopy into a complete pavilion to suit you.</p>
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Skirts </em></strong> to avoid reflections.
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Curved roofs </em></strong> to prevent water from collecting on top.
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Micro-perforated </em></strong>enclosures to allow for ventilation.<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Sandwich panel </em></strong> sides to keep the space closed.
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Pedestrian <strong><em>Access</em></strong> and sectional doors.
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/los-accesorios-que-acompanan-a-las-cubiertas-min.webp"
              alt="Set up a large-scale padel facility – ideal for an indoor padel club."
            />
          </div>
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
  'cubierta-page',
  () => find<DefaultContent>('cubierta-page', {locale: "en"})
)

const content = computed (() => data.value.data.attributes)

const pages = computed (() => ({
  en: '/en/covers-and-canopies',
  es: '/es/cubiertas',
  fr: '/fr/couvertures',
  it: '/it/coperture',
}))
const siteUrl = `${config.SITE_URL}${route.fullPath}`;
const metaData = data?.value?.data?.attributes?.seo;
const metaDataParsed = $SeoMetaData(data?.value, siteUrl);

useHead(metaDataParsed);
</script>
