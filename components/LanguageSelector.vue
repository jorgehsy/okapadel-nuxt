<template>
  <div>
    <div class="row position-relative lang-selector">
      <div class="col-md-12" id="language-selector">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" v-if="currentLang !== 'es' ">
            <a class="btn btn-link" :href="languagePage.es" hreflang="es">
              ES
            </a>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'en'" hreflang="en" >
            <a class="btn btn-link" :href="languagePage.en">
              EN
            </a>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'fr'" hreflang="fr" >
            <a class="btn btn-link" :href="languagePage.fr">
              FR
            </a>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'it'" hreflang="it">
            <a class="btn btn-link" :href="languagePage.it">
              IT
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    languagePage: {
      type: Object,
      default: () => ({
        es: '/es/',
        en: '/en/',
        it: '/it/',
        fr: '/fr/',
      })
    }
  },
  setup() {
    const route = useRoute()
  
    const currentLang = computed(() => {
      return route.path.split('/').length > 2 ? route.path.split('/')[1] : 'es';
    });
  
    return {
      currentLang,
    };
  }
}
</script>
