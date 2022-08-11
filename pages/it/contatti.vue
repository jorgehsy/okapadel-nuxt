<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-contacto" id="">
      <div class="hero-bg hero-contacto"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title"><strong>Contattaci</strong></h1>
          </div>
        </div>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>

    <ContactForm lang="it" 
      title="<h2 class='g-text'>Vuoi creare un <strong>club di paddle?</strong></h2>" 
      subtitle="Se vuoi installare un campo da padel coperto e vuoi che ti aiutiamo. Non esitare, chiamaci e ti consiglieremo per ottenerlo." />

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
