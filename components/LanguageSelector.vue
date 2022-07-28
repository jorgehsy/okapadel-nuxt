<template>
  <div>
    <div class="row position-relative lang-selector">
      <div class="col-md-12">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" v-if="currentLang !== 'es'">
            <button class="btn btn-link" @click="changeLanguage('es')">
              ES
            </button>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'en'">
            <button class="btn btn-link" @click="changeLanguage('en')">
              EN
            </button>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'fr'">
            <button class="btn btn-link" @click="changeLanguage('fr')">
              FR
            </button>
          </li>
          <li class="list-group-item" v-if="currentLang !== 'it'" >
            <button class="btn btn-link" @click="changeLanguage('it')">
              IT
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "es",
    };
  },
  computed: {
    currentLang() {
      return this.$route.path.split('/')[1];
    },
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
      window.location.href = `/${lang}/`;
      // this.$router.push(`/${lang}/`);
    },
  },
};
</script>
