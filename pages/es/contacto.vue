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

    <ContactForm 
      title="<h2>¿Quieres montar <br> un <strong> club de pádel</strong>?</h2>" 
      subtitle="Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas." />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const pages = computed (() => ({
  es: '/es/contacto',
  en: '/en/contact-us',
  it: '/it/contatti',
  fr: '/fr/contact',
}))

</script>
