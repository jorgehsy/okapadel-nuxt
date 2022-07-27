<template>
  <Layout>
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
      <div class="hero-bg hero-cubiertas"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">
              Tus pistas estarán <strong> abiertas todos los días</strong>
            </h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-12">
            <h2 class="fw-section-title text-center">
              ¡Cubre tu pista con un <strong>diseño ganador!</strong>
            </h2>
            <p class="text-center">
              No es lo mismo cubrir una pista de pádel que cubrir varias, por
              eso hemos creado tres modelos de cubiertas pensados para
              satisfacer tus necesidades. El modelo
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel individuales"
                    >Single</span
                  ></em
                ></strong
              >, para pistas individuales, el modelo
              <strong
                ><em
                  ><span title="Cubierta para pistas de pádel dobles"
                    >Multy</span
                  ></em
                ></strong
              >
              para pistas dobles y el modelo
              <strong
                ><em
                  ><span title="Nave para múltiples pistas de pádel"
                    >Arena</span
                  ></em
                ></strong
              >
              para multiples pistas.<br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              src="~/assets/img/cubiertas/cubierta-single-padel-min.jpg"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6">
            <h2 class="g-text fw-section-title pb-0 mb-0">
              Cubierta<br /><strong>Single Pádel.</strong>
            </h2>
            <h3 class="fw-section-subtitle pt-1 pb-1">
              Cubre una pista de muchas maneras posibles
            </h3>
            <p>
              Pabellón modular para cubrir
              <strong><em>pistas de pádel individuales.</em></strong> ¿Quieres
              ver más sobre la cubierta Single Pádel?<br />
            </p>
            <div class="button-box">
              <g-link
                class="btn btn-secondary"
                rel="next"
                to="/cubiertas/modelo-single-padel"
                >Ver cubierta Single Pádel
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6">
            <h2 class="fw-section-title pb-0 mb-0">
              Cubierta<br /><strong>Multy Pádel.</strong>
            </h2>
            <h3 class="fw-section-subtitle pt-1 pb-1">
              Una cubierta, infinidad de posibilidades
            </h3>
            <p class="color-primary">
              Estructura de tamaño medio para cubrir
              <strong><em>dos pistas o más.</em></strong> ¿Te interesa la
              cubierta Multy Pádel?
            </p>
            <div class="button-box">
              <g-link
                class="btn btn-secondary"
                rel="next"
                to="/cubiertas/modelo-multy-padel"
                >Ver cubierta Multy Pádel
              </g-link>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              src="~/assets/img/cubiertas/cubierta-multy-padel-min.jpg"
              alt="Cubierta para pistas de pádel dobles"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              src="~/assets/img/cubiertas/nave-arena-padel-min.jpg"
              alt="Montar nave de pádel, ideal para club de pádel indoor"
            />
          </div>
          <div class="col-md-6">
            <h2 class="g-text fw-section-title pb-0 mb-0">
              Nave<br /><strong>Arena Pádel.</strong>
            </h2>
            <h3 class="fw-section-subtitle pt-1 pb-1">
              Cubre múltiples pistas a lo grande
            </h3>
            <p>
              Nave de grandes dimensiones para cubrir
              <strong><em>más de 6 pistas de pádel.</em></strong> ¿Buscas
              información sobre la cubierta Arena Pádel?
            </p>
            <div class="button-box">
              <g-link
                class="btn btn-secondary"
                rel="next"
                to="/cubiertas/modelo-arena-padel"
                >Ver nave Arena Pádel
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg">
      <div class="container w-text">
        <div
          class="
            row
            flex-column-reverse flex-md-row
            d-flex
            align-items-center
          "
        >
          <div class="col-md-6">
            <h2 class="fw-section-title">
              <strong>Los accesorios </strong>que acompañan a las cubiertas...
            </h2>
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Faldones</em></strong> para evitar los reflejos
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Techos hinchados</em></strong> para evitar la
                estancación de agua
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Cerramientos <strong><em>microperforados</em></strong> para
                permitir la ventilación<br />
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Laterales de <strong><em>panel sándwich</em></strong> para
                mantener cerrado un espacio
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Puertas de acceso</em></strong> peatonales o
                seccionales
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              src="~/assets/img/cubiertas/los-accesorios-que-acompanan-a-las-cubiertas-min.jpg"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactForm
      title="<strong>¿Quieres cubrir</strong> tus pistas de pádel?"
      subtitle="Quizás tengas una pista de pádel y desees cubrirla o tal vez quieres que te ayudemos a instalar una pista de pádel cubierta. Sea como sea, en Okapadel podemos crear la solución a medida que mejor se adapta a tu club. Cuéntanos tu proyecto sin compromiso y te ayudaremos a hacerlo realidad."
    />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Cubiertas",
  },
};
</script>
