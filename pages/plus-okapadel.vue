<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-okapadel"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">Más allá de <strong>Okapadel</strong></h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <h2 class="fw-section-title">
              Fabricamos <strong> pabellones modulares</strong> para múltiples
              usos
            </h2>
            <p>
              A través del
              <strong
                >grupo
                <a
                  href="https://okatent.com/historia"
                  rel=""
                  target="_blank"
                  >Okatent</a
                ></strong
              >, empresa a la cual pertenece Oka-padel, diseñamos y fabricamos
              <a href="https://okatent.com/usos/" rel="external" target="_blank"
                >naves prefabricadas</a
              >
              para cubrir almacenes industriales, pistas deportivas y todo tipo
              de eventos. Estas estructuras son las que se usan para cubrir el
              espacio Okapadel, adaptadas a las medidas y necesidades de pádel.
              Descubre nuestros pabellones.
            </p>
            <div class="button-box mb-3">
              <NuxtLink
                class="btn btn-secondary"
                rel="external"
                to="https://okatent.com"
                target="_blank"
                >Ver pabellones
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              src="/okapadel/cubre-tu-pista-con-un-diseno-ganador-min.jpg"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img 
              src="/okapadel/enamorate-de-la-arquitectura-textil--min.jpg"
              alt="Cubierta para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6">
            <h2 class="g-text fw-section-title pb-0 mb-0">
              Enamórate de la <strong>arquitectura Textil </strong>
            </h2>
            <p>
              Sorpréndete con las formas que crean nuestras estructuras tensadas
              y la versatilidad que ofrecen a la hora de cubrir cualquier
              espacio. La arquitectura textil de Okatent se integra respetando
              el entorno y mejorando su aspecto visual. ¿Quieres descubrir la
              Arquitectura Textil?
            </p>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel="external"
                to="https://okatent.com/"
                >Ver Arquitectura textil
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-0">
      <div class="container">
        <div
          class="row d-flex align-items-center flex-column-reverse flex-md-row"
        >
          <div class="col-md-6">
            <h2 class="fw-section-title pb-0 mb-0">
              Descubre la calidad de nuestras <strong>carpas plegables</strong>
            </h2>
            <h3 class="fw-section-subtitle pt-1 pb-1">
              Una cubierta, infinidad de posibilidades
            </h3>
            <p class="color-primary">
              En Okatent fabricamos estructuras plegables muy versátiles y con
              prestaciones de alta cali-dad. Tenemos dos modelos de carpas con
              estructura de aluminio y cubierta ignífuga e im-permeable,
              pensados para usos profesionales y particulares. ¿Quieres ver
              nuestras car-pas?
            </p>
            <div class="button-box">
              <NuxtLink
                class="btn btn-secondary"
                rel=""
                to="https://okatent.com"
                >Ver carpas plegables
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img 
              src="/okapadel/descubre-la-calidad-de-nuestras-carpas-plegables-min.jpg"
              alt="Cubierta para pistas de pádel dobles"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactForm
      title="¿Quieres crear un <strong>espacio de pádel?</strong>"
      subtitle="Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas."
    />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "+Okapadel",
  },
};
</script>
