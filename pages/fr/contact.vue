<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-contacto" id="">
      <div class="hero-bg hero-contacto"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title"><strong>Contactez-nous</strong></h1>
          </div>
        </div>
        <h2 class='g-text'>Vous voulez monter un <strong>club de padel</strong>?</h2>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>

    <ContactForm lang="fr" 
      title="<h2 class='g-text'>Vous voulez monter un <strong>club de padel</strong>?</h2>" 
      subtitle="Si vous souhaitez installer un court de padel couvert et que vous avez besoin de notre aide, n’hésitez plus, contactez-nous et nous vous orienterons pour y parvenir." />

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
