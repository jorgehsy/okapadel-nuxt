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
        <LanguageSelector />
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-12">
            <h2 class="fw-section-title text-center">
              ¡Cubre tu pista con un <strong>diseño ganador!</strong>
            </h2>
            <p class="text-center">
              No es lo mismo cubrir una pista de pádel que cubrir varias, por
              eso hemos creado tres modelos de cubiertas pensados para
              satisfacer tus necesidades. El modelo
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel individuales"
                    >Single</span
                  ></em
                ></strong
              >, para pistas individuales, el modelo
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel dobles"
                    >Multy</span
                  ></em
                ></strong
              >
              para pistas dobles y el modelo
              <strong
                ><em
                  ><span title="Nave para múltiples pistas de pádel"
                    >Arena</span
                  ></em
                ></strong
              >
              para multiples pistas.<br />
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
              src="~/assets/images/cubiertas/cubierta-single-padel-min.jpg"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6">
            <div v-html="content.firstSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/es/cubiertas/modelo-single-padel/"
                >Ver cubierta Single Pádel
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
                to="/es/cubiertas/modelo-multy-padel/"
                >Ver cubierta Multy Pádel
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/cubierta-multy-padel-min.jpg"
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
            <img 
              src="~/assets/images/cubiertas/nave-arena-padel-min.jpg"
              alt="Montar nave de pádel, ideal para club de pádel indoor"
            />
          </div>
          <div class="col-md-6">
           <div v-html="content.thirdSection?.rightColumn"></div>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="next"
                to="/es/cubiertas/modelo-arena-padel/"
                >Ver nave Arena Pádel
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
              <strong>Los accesorios </strong>que acompañan a las cubiertas...
            </h2>
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Faldones</em></strong> para evitar los reflejos
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Techos hinchados</em></strong> para evitar la
                estancación de agua
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Cerramientos <strong><em>microperforados</em></strong> para
                permitir la ventilación<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Laterales de <strong><em>panel sándwich</em></strong> para
                mantener cerrado un espacio
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Puertas de acceso</em></strong> peatonales o
                seccionales
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <img 
              src="~/assets/images/cubiertas/los-accesorios-que-acompanan-a-las-cubiertas-min.jpg"
            />
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
const { find } = useStrapi4()

const { data } = await useAsyncData(
  'cubierta-page',
  () => find<DefaultContent>('cubierta-page', {locale: 'es'})
)

const content = computed (() => data.value.data.attributes)

</script>
