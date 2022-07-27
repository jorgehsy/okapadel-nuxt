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
      <div class="hero-bg hero-proyectos"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">
              Proyectos de pádel <br> realizados por <br> <strong>todo el mundo</strong>
            </h1>
            <p class="d-none hero-subtitle"></p>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>

    <section>
      <div class="container">
        <div class="grid-project"  v-if="projects.length">
          <div class="item-project" v-for="project in projects" :key="project.id">
            <nuxt-img  :src="project.image" />
            <h3 class="cards-title">{{ project.name }}</h3>
          </div>
        </div>
      </div>
    </section>


    <ContactForm />
  </div>
</template>

<script>
import LanguageSelector from '../components/LanguageSelector.vue'
export default {
    metaInfo: {
        title: "Proyectos"
    },
    data() {
        return {
            projects: [
                { id: 1, image: "proyectos/proyectos-arena-padel-milan-min.jpg", name: "Arena Padel Milán", description: "..." },
                { id: 2, image: "proyectos/proyectos-multy-padel-baskonia-victoria-spain-min.jpg", name: "Multy Padel Baskonia Victoria España", description: "..." },
                { id: 3, image: "proyectos/proyectos-multy-padel-dunk-min.jpg", name: "Multy Padel Dunk", description: "..." },
                { id: 4, image: "proyectos/proyectos-multy-padel-lagrajera-logrono-spain-min.jpg", name: "Multy Padel Lagrajera Logrono España", description: "..." },
                { id: 5, image: "proyectos/proyectos-multy-padel-odrimont-belgium-min.jpg", name: "Multy Padel Odrimont Bélgica", description: "..." },
                { id: 6, image: "proyectos/proyectos-multy-padel-toulouse-france-min.jpg", name: "Multy Padel Toulouse Francia", description: "..." },
                { id: 7, image: "proyectos/proyectos-multy-padel-wolouwe-belgium-min.jpg", name: "Multy Padel Wolouwe Bélgica", description: "..." },
                { id: 8, image: "proyectos/proyectos-single-padel-jodoine-belgium-min.jpg", name: "Single Padel Jodoine Bélgica", description: "..." },
                { id: 9, image: "proyectos/proyectos-single-padel-tremblay-france-min.jpg", name: "Single Padel Tremblay Francia", description: "..." },
            ]
        };
    },
    components: { LanguageSelector }
}
</script>
