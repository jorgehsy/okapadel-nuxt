<template>
  <Layout>

    <section class="hero-section d-flex flex-column justify-content-center overlay-bg" id="">
      <div class="hero-bg hero-calidad"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title"><strong>Calidad</strong> dentro y fuera de la pista</h1>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </section>

    <section class="two-col-section bg-green">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6 ">
            <nuxt-img  src="~/assets/img/calidad/con-okapadel-ganamos-todos-min.jpg" alt="Fabricantes de pistas de pádel sostenibles y ecofriendly" />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title">
              Con <strong>Okapadel </strong>ganamos todos
            </h2>
            <p class="lead">
              Como fabricantes de proyectos de pádel, buscamos las mejores soluciones tanto para el deporte como el lugar en el que se desarrolla. Por eso, ponemos todo nuestro empeño en cuidar <a class="text-link color-secondary" href="https://okatent.com/medioambiente/" target="_blank" rel="" >el medioambiente</a>. Por eso, elegimos materiales reciclables como el aluminio o pinturas ecológicas sin disolventes y mantenemos una gran sensibilidad con el cuidado del planeta y el ahorro energético dentro del equipo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section blue-bg">
      <div class="container">
        <div class="row d-flex align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6  text-white ">
            <h2 class="fw-section-title">
              <strong>Certificados </strong>para tu club de pádel
            </h2>
            <p class="lead">
              Creamos instalaciones de pádel que además de ser buenas porque son respetuosas con el planeta, son buenas porque están fabricadas con los máximos estándares. Todas nuestras piezas de aluminio, lonas y otros materiales, están supervisados bajo rigurosos procesos de calidad ¿Quieres comprobarlo? Haz clic y descubre los certificados.
            </p>
            <div class="button-box">
              <g-link
                class="btn btn-secondary mt-4"
                rel="external"
                target="_blank"
                to="https://okatent.com/certificados/"
                >Ver Certificados
              </g-link>
            </div>
          </div>
          <div class="col-md-6">
            <nuxt-img  src="~/assets/img/calidad/certificados-para-tu-club-de-padel-min.jpg" />
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section gray-bg">
      <div class="container">
        <div class="row d-flex align-items-center flex-md-row">
          <div class="col-md-6">
            <nuxt-img  src="~/assets/img/calidad/politicas-de-calidad-okapadel-min.jpg" alt="Fabricantes de pistas de pádel World Padel Tour - Okapadel"/></div>
          <div class="col-md-6 mt-3">
            <h2>Políticas de <strong>calidad</strong> Okapadel</h2>
            <p class="lead">Aquí tienes nuestra política de calidad, donde podrás descubrir cómo trabajamos para mejorar nuestra compañía y hacer que tu experiencia, en el mundo del pádel, sea mejor cada día.</p>
            <div class="button-box">
              <g-link class="btn btn-white" to="https://okatent.com/pdfs/calidad-es.pdf" target="_blank" rel="external">Ver Política de calidad</g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm 
      title="<strong>Contacta</strong><br> con okapadel"
      subtitle="Si deseas saber más sobre la calidad y los certificados de las pistas de pádel, en Okapadel tenemos un equipo preparado para ofrecerte todas las respuestas. ¿No te lo crees? Contáctanos a través del formulario. Puedes preguntarnos cualquier duda que tengas sobre nosotros o contarnos tu proyecto de pádel."
    />



  </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Calidad"
    },
}
</script>
