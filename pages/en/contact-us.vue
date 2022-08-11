<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-contacto" id="">
      <div class="hero-bg hero-contacto"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">Contact <strong>us</strong></h1>
          </div>
        </div>
        <LanguageSelector :languagePage="pages" />
      </div>
    </section>

    <ContactForm lang="en" 
      title="<h2 class='g-text'>Would you like to set up <strong> padel club?</strong></h2>" 
      subtitle="If you want to install an indoor padel court and you need our help, don't hesitate to call us and we'll advise you to achieve your dreams." />

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
