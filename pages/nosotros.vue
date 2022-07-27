<template>
  <div>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-nosotros" id="">
      <div class="hero-bg hero-nosotros"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">Bienvenido a <br> <strong>Okapadel</strong> by Okatent</h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>


    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <h2 class="color-primary">¿Qué es  <strong>Okapadel</strong>?</h2>
            <p class="lead ">
              El proyecto se inició debido al auge del pádel en muchas ciudades europeas. Gracias a nuestra experiencia de 15 años en el sector, descubrimos la necesidad que tenían muchos clubs de disponer de un partner que se ocupase de crear un espacio de pádel desde cero.
            </p>
          </div>

          <div class="col-md-6 mt-3"><nuxt-img  src="/nosotros/que-es-okapadel--min.jpg" /></div>
        </div>
      </div>
    </section>

    <section class="two-col-section w-text blue-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img  src="/nosotros/por-que-se-creo_okapadel.-min.jpg" />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title">
              <strong>¿Por qué</strong> se creó Okapadel.
            </h2>
            <p class="lead">
              El proyecto se inició debido al auge del pádel en muchas ciudades europeas. Gracias a nuestra experiencia de 15 años en el sector, descubrimos la necesidad que tenían muchos clubs de disponer de un partner que se ocupase de crear un espacio de pádel desde cero.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section w-text green-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-8">
            <h2 class="fw-section-title">
              Ventajas de ser un servicio <strong>Todo-en-Uno</strong>
            </h2>
            <p class="lead">
              La creación de unas instalaciones de pádel pueden llegar a ser muy costosas en tiempo y dinero, si se contrata más de un proveedor. Por eso, nosotros englobamos todos esos servicios en uno: desde la construcción de la pista a la rotulación de la cubierta de pádel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <h2 class="">Y además, <br> encontramos <strong> patrocinio </strong> <br> para tu club</h2>
            <p class="lead ">
              Okapadel va más allá de la construcción, también te buscamos patrocinador para que tu proyecto te salga mucho más económico. Y no solo eso, también ofrecemos soluciones fi-nancieras de renting.
            </p>
          </div>

          <div class="col-md-6 mt-3"><nuxt-img  src="/nosotros/y-ademas-encontramos-patrocinio-para-tu-club-min.jpg" /></div>
        </div>
      </div>
    </section>

    <ContactForm
      title="¿<strong>Quieres crear</strong> un club de pádel?"
      subtitle="Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas."
    />

    

  </div>
</template>

<script>
export default {
    metaInfo: {
        title: "Nosotros"
    },
}
</script>
