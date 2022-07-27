<template>
  <div>
    
    <section class="hero-section d-flex flex-column justify-content-center overlay-bg hero-pistas" id="">
      <div class="hero-bg hero-pistas"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">Creamos pistas de <strong>campeonato</strong></h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>
    <section class="fw-section-subtitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="lead">Organiza torneos de pádel con nuestras pistas: <strong>“BASIC COURT”</strong> y <strong>“PANORAMIC
                COURT”.</strong> Se fabrican en nuestras instalaciones con un diseño propio y cumplen con las normativas
              de la <strong><em>Federación Española de Pádel, Federación Internacional del Pádel y World Padel
                  Tour.</em></strong><br></p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img  src="/pistas/modelo-basic-court-pista-convencional-para-un-deporte-innovador-min.jpg" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/>
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pb-0">Modelo <br> <strong>Basic Court</strong></h2>
            <h3 class="color-primary">Pista convencional para un deporte innovador.</h3>
            <p class="lead"><strong><em>El modelo básico</em></strong> es una pista de pádel clásica de fácil instalación y
              mantenimiento. El modelo incluye la malla lateral continua y los vidrios están totalmente enrasados para
              evitar desvíos de la pelota y
              lesiones de los jugadores ¿Quieres saber más?<br></p>
            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/pistas/modelo-basic-court" rel="next">Ver pista Basic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  src="/pistas/modelo-panoramic-court-pista-transparente-para-captar-todas-las-miradas-min.jpg" />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pb-0">Modelo <br><strong>Panoramic Court</strong></h2>
            <h3 class="color-primary">Pista transparente para captar todas las miradas.</h3>
            <p class="lead"><strong><em>El modelo Panoramic</em></strong> es una pista de pádel panorámica con acabados y detalles de
              alta calidad. El rasgo principal de esta pista son los fondos panorámicos montados con cristales templados
              que permiten una perfecta
              visión del partido. ¿Quieres saber más?<br></p>

            <div class="button-box">
              <NuxtLink class="btn btn-white" to="/pistas/modelo-panoramic-court" rel="next">Ver pista Panoramic</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6 text-center mb-4">
            <h2><strong>Los componentes principales </strong>de las pistas.</h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul lead">
              <li> 
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Estructura metálica:</em></strong> Estructura con perfiles de acero galvanizado y sistema antivibración.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Parede:&nbsp;</em></strong>Vidrios templados de seguridad con cantos pulidos según normal UNE.
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Pintura:</em></strong> Pintura en polvo para exteriores amigable con el medio ambiente.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Césped:</em></strong> Césped artificial deportivo con distintos colores.<br>
              </li>
              <li>
                <span class="fa-li g-text"><i class="fa-solid fa-plus"></i></span>
                <strong><em>Sujeción: </em></strong>Anclaje sólido realizado con tacos mecánicos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ContactForm 
      title="¿Quieres construir una <strong>pista de pádel</strong>?" 
      subtitle="Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas."/>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Pistas",
  },
};
</script>
