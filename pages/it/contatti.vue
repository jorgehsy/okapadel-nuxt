<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-contacto" id="">
      <div class="hero-bg hero-contacto"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">Contacta con <strong>nosotros</strong></h1>
          </div>
        </div>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>

    <ContactForm lang="it" 
      title="¿Quieres construir <br> un <strong> club de pádel</strong>?" 
      subtitle="¿Quieres construir un club de pádel? Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas." />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const pages = computed (() => ({
  en: '/en/contact-us',
  es: '/es/contacto',
  fr: '/fr/contact',
  it: '/it/contatti',
}))

</script>
