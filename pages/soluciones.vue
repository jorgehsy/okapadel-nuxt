<template>
  <Layout>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-soluciones
      "
      id=""
    >
    <div class="hero-bg hero-soluciones"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 text-center w-text">
            <h1 class="hero-title" v-html="content.title">
            </h1>
            <p class="hero-subtitle" v-html="content.subtitle">
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img  src="~/assets/img/soluciones/cubrimos-las-instalaciones-del-club-min.jpg" alt="cubierta pista de padel" />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title color-primary">
              <strong>Cubrimos </strong>las <br> instalaciones del club
            </h2>
            <p>
              Diseñamos, fabricamos e instalamos cubiertas personalizadas para proteger las pistas de pádel y poder <strong><em> jugar los 365 días del año.</em></strong>
            </p>
            <div class="text-center">
              <g-link class="btn btn-secondary" rel="" to="/cubiertas">Ver cubiertas</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img  src="~/assets/img/soluciones/instalacion-de-pistas-de-padel-min.jpg" alt="Instalación de pistas de pádel" />
          </div>
          <div class="col-md-6 order-md-1">
            <h2 class="fw-section-title">
              <strong>Instalación</strong>  de pistas de pádel
            </h2>
            <p class="color-primary">
              Disponemos de dos modelos de pista con un <strong><em>diseño adaptado.</em></strong> Nos encargamos del montaje de pistas de pádel con múltiples materiales, de las paredes de la pista, cristales para pistas de pádel y otros componentes de juego.
            </p>
            <div class="text-center">
              <g-link class="btn btn-secondary" rel="" to="/pistas">Ver pistas</g-link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  src="~/assets/img/soluciones/iluminacion-y-climatizacion-de-pistas-de-padel-min.jpg" alt="cubierta pista de padel" />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title color-primary">
              <strong>Iluminación y climatización</strong> de pistas de pádel
            </h2>
            <p class="mb-4">
              Para mejorar el confort en las instalaciones nos ocupamos de instalar luces y climatización. Además, también rotulamos las instalaciones para personalizarlas con el logo de tu club o el diseño que elijas.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ContactForm  
      title="<strong>¿Quieres construir</strong> una pista de pádel?" 
      subtitle="Si estás pensando en instalar una pista de pádel cubierta en tu club y quieres que te ayudemos. Contacta sin compromiso y te asesoraremos paso a paso para que tus pistas sean un éxito." />
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Soluciones'
  },
  computed: {
    content: () => ({
      title: "Montamos un club de pádel <br> <strong>desde cero </strong>",
      subtitle: ""
    })
  },
}
</script>
