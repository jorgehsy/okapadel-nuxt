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
    <div class="hero-bg hero-cubierta-single"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">
              Carpa modular <br /><strong>Single Padel</strong>
            </h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>

    <section class="fw-section-subtitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="lead">
              Es una carpa modular con estructura metálica cubierta con una
              membrana textil tensada. Esta nave no tiene pilares centrales y
              <strong
                ><em
                  >permite cubrir pistas de pádel individuales de forma
                  diáfana.</em
                ></strong
              ><br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section pt-2">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img 
              src="~/assets/img/cubiertas__modelo_single_padel/permiten-una-instalacion-rapida-y-rentable-min.jpg"
              alt="carpa modular para pistas de pádel individuales"
            />
          </div>
          <div class="col-md-6 order-md-12">
            <h2 class="fw-section-title">
              Permiten una instalación <strong>rápida y rentable.</strong>
            </h2>
            <p class="lead">
              Las carpas de pequeño formato necesitan menos material y la
              instalación de las estructuras se puede
              <strong><em>realizar en 72 horas.</em></strong> Gracias a nuestra
              experiencia podemos reducir costes y aconsejarte como sacarle el
              mayor rendimiento.<br />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <nuxt-img 
              src="~/assets/img/cubiertas__modelo_single_padel/_descubre-los-cerramientos-del-single-padel-min.jpg"
              alt="Completa la cubierta de tu pista de pádel a tu manera"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <h2 class="fw-section-title">
              Descubre los cerramientos del <br />
              <strong>Single Padel.</strong>
            </h2>
            <p class="lead">
              Para jugar en las mejores condiciones disponemos de techos
              presurizados, lonas translúcidas u opacas, faldones antireflejos,
              cortinas microperforadas, abatibles o laterales fijos de panel
              sándwich. <strong><em>Puedes elegir hasta el color.</em></strong
              ><br />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img 
              src="~/assets/img/cubiertas__modelo_single_padel/y-las-fijaciones-de-la-cubierta-individual-min.jpg"
              alt="Sujeta sólidamente y sin complicaciones la cubierta de tu pista de pádel"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pt-0">
              Y las fijaciones de la <strong>cubierta individual.</strong>
            </h2>
            <p class="color-primary">
              Las estructuras Single se sujetan con distintos sistemas de
              fijación. Al ser naves de poca envergadura no precisan
              cimentaciones de gran formato y suelen utilizarse tacos de
              expansión mecánicos para su conexión entre estructura y solera.<br />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="fw-section-title pt-0">
              ¿Qué cubierta de Single Padel <strong>es la tuya?</strong></h2>
            <Carousel :items="projects" />
          </div>
        </div>
      </div>
    </section>

    <section class="blue-bg overlaped-box">
      <div class="container w-text">
        <div
          class="
            row
            flex-column-reverse flex-md-row
            two-col-section
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <div class="col-md-6 overlaped-col">
            <div class="container">
              <div class="row bg-dark-gray">
                <div class="col-md-12 p-3 color-secondary text-center">
                  <h2>
                    ¡Tenemos <strong>más de 17 diseños</strong> Single
                    esperando!<br />
                  </h2>
                  <p class="lead text-center">
                    Y si necesitas
                    <strong><em>una medida especial</em></strong> para cubrir
                    tus instalaciones, nuestro equipo técnico se encargará de
                    crear un modelo de cubierta especial para tu pista
                    individual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm title="¿Quieres una cubierta <br><strong>Single Pádel</strong>?" subtitle="Si deseas instalar una pista de pádel cubierta en tu
club y quieres que te ayudemos. No lo dudes,
llámanos y te asesoraremos para que lo consigas." />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Modelo Single Padel",
  },
  data(){
    return {
      projects:[
        {
          image: 'que-cubierta-de-single-padel-es-la-tuya-first-slide-min.jpg',
          imageAlt: 'cubierta-de-single-padel-que-hemos-realizado',
          title: '',
          subtitle: ''
        },
        {
          image: 'que-cubierta-de-single-padel-es-la-tuya-second-slide-min.jpg',
          imageAlt: 'cubierta-de-single-padel-que-hemos-realizado',
          title: '',
          subtitle: ''
        },
        {
          image: 'que-cubierta-de-single-padel-es-la-tuya-third-slide-min.jpg',
          imageAlt: 'cubierta-de-single-padel-que-hemos-realizado',
          title: '',
          subtitle: ''
        },
      ]
    }
  }
};
</script>
