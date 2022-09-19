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
              Les sports de raquette comme le padel sont sensibles au vent, à la pluie, au soleil et aux éblouissements, c’est pourquoi disposer d’une couverture est essentiel pour pouvoir <strong>jouer sous les meilleures conditions.</strong>
            </p>
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/cubre-tu-pista-con-un-diseno-ganador-min.jpg"
              alt="Le padel 365 jours par an"
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
              Couvrez votre court avec un <strong>design gagnant!</strong>
            </h2>
            <p class="text-center">
              Couvrir un court ou plusieurs courts, ce n’est pas la même chose, c’est pourquoi nous avons créé trois modèles de couvertures pour courts de padel pour répondre à vos besoins. Le modèle 
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel individuales"
                    >Single</span
                  ></em
                ></strong
              > pour les courts individuels, le modèle 
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel dobles"
                    >Multy</span
                  ></em
                ></strong
              >
              pour les courts doubles et le modèle
              <strong
                ><em
                  ><span title="Nave para múltiples pistas de pádel"
                    >Arena</span
                  ></em
                ></strong
              >
              pour les multiples courts. <br />
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
              loading="lazy" src="/images/cubiertas/cubierta-single-padel-min.jpg"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/fr/couvertures/single-padel"
                >Voir la couverture Single Padel
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
                to="/fr/couvertures/multy-padel"
                >Voir la couverture Multy Padel
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/cubierta-multy-padel-min.jpg"
              alt="Cubierta para pistas de pádel dobles"
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
              loading="lazy" src="/images/cubiertas/nave-arena-padel-min.jpg"
              alt="Montar nave de pádel, ideal para club de pádel indoor"
            />
          </div>
          <div class="col-md-6">
           <div v-html="content.thirdSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/fr/couvertures/arena-padel"
                >Voir le bâtiment Arena Padel
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
              <strong>Les accessoires  </strong>qui accompagnent les couvertures
            </h2>
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Pans </em></strong> anti-reflets
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Toits bombés </em></strong> pour éviter la stagnation de l’eau
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Panneaux <strong><em>microperforés</em></strong> pour assurer la ventilation<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Panneaux <strong><em>latéraux type sandwich</em></strong> pour fermer un espace
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Portes d’accès </em></strong> piétons ou sectionnelles
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              loading="lazy" src="/images/cubiertas/los-accesorios-que-acompanan-a-las-cubiertas-min.jpg"
            />
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
  'cubierta-page',
  () => find<DefaultContent>('cubierta-page', {locale: "fr"})
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
