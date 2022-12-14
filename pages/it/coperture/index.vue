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
              Gli sport di racchetta come il padel sono soggetti a vento, pioggia, sole e abbagliamento, quindi la scelta di una copertura è essenziale per poterli praticare nelle migliori condizioni.
            </p>
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/cubre-tu-pista-con-un-diseno-ganador-min.webp"
              alt="Padel 365 giorni all’anno"
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
              Coprite la vostra pista con un <strong>design vincente!</strong>
            </h2>
            <p class="text-center">

              Coprire un campo da padel non è la stessa cosa che coprirne diversi, ecco perché abbiamo creato tre modelli di coperture per campi da paddle progettati per soddisfare le vostre esi-genze. Il modello
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel individuales"
                    >Single</span
                  ></em
                ></strong
              >, per campi singoli, il modello 
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel dobles"
                    >Multy</span
                  ></em
                ></strong
              >
              per campi doppi e il modello 
              <strong
                ><em
                  ><span title="Nave para múltiples pistas de pádel"
                    >Arena</span
                  ></em
                ></strong
              >
              per campi multipli. <br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/cubierta-single-padel-min.webp"
              alt="Copertura per campi da padel individuali"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/it/coperture/single-padel"
                >Vedere la copertura del Single padel
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
                to="/it/coperture/multy-padel"
                >Vedi coperture Multy Padel
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/cubierta-multy-padel-min.webp"
              alt="Copertura per campi da padel doppi"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/nave-arena-padel-min.webp"
              alt="Copertura per più campi da padel"
            />
          </div>
          <div class="col-md-6">
           <div v-html="content.thirdSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/it/coperture/arena-padel"
                >Vedi coperture Modello Arena
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
              <strong>Accessori</strong> che accompagnano le copertura...
            </h2>
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>
                  Gonne
                  </em></strong> per evitare riflessi
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><em><strong>Teloneria tetto pressurizzato </strong> </em>
                  per evitare il ristagno dell’acqua
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >
                Chiusure 
                <strong><em>
                  microforate </em></strong> per consentire la ventilazione<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Laterali  <strong><em>con pannelli sándwich </em></strong> per mantere chiuso lo spazio interno
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Porte di accesso </em></strong> pedonali o sezionali.
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/los-accesorios-que-acompanan-a-las-cubiertas-min.webp"
              alt="Modelli di copertura per campi da padel"
            />
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
  'cubierta-page',
  () => find<DefaultContent>('cubierta-page', {locale: "it"})
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
