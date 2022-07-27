<template>
  <div>
    <section
      class="
        hero-section
        d-flex
        flex-column
        justify-content-center
        overlay-bg
        hero-home
      "
      id=""
    >
      <div class="hero-bg hero-home"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 text-center w-text">
            <h1 class="hero-title" v-html="content.title"></h1>
            <p class="hero-subtitle" v-html="content.subtitle"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section blue-bg d-flex align-items-center">
      <div class="container">
        <div class="row w-text">
          <div class="col-md-6">
            <h2 class="fw-section-title">
              ¿Qué incluye este <strong>servicio integral?</strong>
            </h2>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                <strong><em>Cubierta y pistas </em></strong>desde un mismo
                fabricante
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                Instalación de cubiertas de
                <strong><em> todos los tamaños</em></strong>
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                Montaje de <strong><em> pistas personalizadas </em></strong>para
                cada cliente
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i
                ></span>
                Proyectos de <strong><em> pádel integrales </em></strong>desde
                cero.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section white-bg d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            <h2 class="fw-section-title">
              <strong>Beneficios</strong><br />
              de Okapadel
            </h2>
            <nuxt-img 
              src="/home/beneficios-de-okapadel.svg"
              alt="beneficios de okapadel"
            />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <ul class="fa-ul">
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Crea tu espacio pádel
                <strong><em>llaves en mano</em></strong>
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                ><strong><em>Despreocúpate</em></strong> de buscar múltiples
                proveedores
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Diseña tu espacio
                <strong><em>a medida</em></strong>
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Celebra competiciones deportivas de
                <strong><em></em>alto nivel</strong>
              </li>
              <li>
                <span class="fa-li g-text"
                  ><i class="fa-solid fa-plus"></i></span
                >Consigue <strong><em>patrocinadores</em> </strong> para tu
                espacio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section w-text green-bg d-flex">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <nuxt-img 
              src="/home/somos-fabricantes-de-espacios-de-padel-min.jpg"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title">
              <strong>Somos fabricantes</strong> de espacios de pádel.
            </h2>
            <p>
              En nuestras
              <strong>instalaciones diseñamos y desarrollamos</strong> todos los
              elementos de construcción de una pista de pádel. Desde las
              cubiertas modulares al césped de la pista, sin descuidar ningún
              detalle como la pintura o la iluminación. Y además,
              <strong>te lo llevamos y te lo montamos donde tu desees.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="fw-section-title">
              <strong>Proyectos</strong> de pádel que hemos realizado
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
  computed: {
    content: () => ({
      title: "Crea tu proyecto de pádel <br> <strong>con Okapadel</strong>",
      subtitle: "Tus pistas de pádel estarán abiertas todo el año",
    }),
  },
  data() {
    return {
      projects: [
        {
          image: "proyectos-de-padel-que-hemos-realizado-first-slide-min.jpg",
          imageAlt: "proyectos-de-padel-que-hemos-realizado",
          title: "",
          subtitle: "",
        },
        {
          image: "proyectos-de-padel-que-hemos-realizado-second-slide-min.jpg",
          imageAlt: "proyectos-de-padel-que-hemos-realizado",
          title: "",
          subtitle: "",
        },
        {
          image: "proyectos-de-padel-que-hemos-realizado-third-slide-min.jpg",
          imageAlt: "proyectos-de-padel-que-hemos-realizado",
          title: "",
          subtitle: "",
        },
      ],
    };
  },
};
</script>

<style>
/*  */
</style>
