<template>
  <div>
    <section
      class="hero-section d-flex flex-column justify-content-center overlay-bg"
      id=""
    >
      <div class="hero-bg hero-cubierta-arena"></div>
      <div class="container d-flex flex-column align-items-center">
        <div class="row">
          <div class="col-md-12 offset-xl-0 text-center w-text">
            <h1 class="hero-title">
              Pabellón modular <br /><strong>Arena Padel</strong>
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
              Es un pabellón modular de grandes dimensiones, formado por una
              estructura de aluminio anodizado y aleaciones de alta resistencia.
              Cuenta con perfiles de celosía y está cubierto con una membrana de
              PVC de alta resistencia.
              <strong
                ><em>
                  Si necesitas cubrir seis pistas o más, este es tu modelo.</em
                ></strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/sorprende-con-un-modelo-de-campeonato-min.jpg"
              alt="pabellón modular para cubrir de 2 a 6 pistas de pádel"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title color-primary pb-0">
              Sorprende con un modelo de <strong>campeonato</strong>
            </h2>
            <p class="lead">
              El modelo Arena es el modelo de mayor envergadura y prestaciones.
              Su diseño abovedado, unido a su tamaño consiguen instalaciones
              deslumbrantes. Además de cubrir las pistas de tu club de pádel, la
              estructura es un gran reclamo para atraer nuevos jugadores y
              patrocinios. Añade nuestras pistas
              <strong><em>World Padel Tour</em></strong> y ya tienes unas
              inmejorables instalaciones de pá-del.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="two-col-section bg-gray">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/completa-tu-pabellon-modular-con-los-cerramientos-del-arena-padel-min.jpg"
              alt="Completa tu pabellón modular con los cerramientos para cubiertas Arena Padel"
            />
          </div>
          <div class="col-md-6">
            <h2 class="fw-section-title pb-0">
              Completa tu pabellón modular con los cerramientos del <br />
              <strong>Arena Padel</strong>
            </h2>
            <p class="lead">
              Para conseguir el mayor confort y las mejores condiciones de juego
              disponemos de techos presurizados, lonas translúcidas u opacas,
              faldones antirreflejos, cortinas microperforadas, abatibles o
              laterales fijos de panel sándwich. Puedes elegir hasta el color.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-section bg-green">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 order-md-12">
            <img
              src="~/assets/images/cubiertas__modelo_arena_padel/y-las-fijaciones-de-una-gran-cubierta-min.jpg"
              alt="Fijaciones firmes, seguras y garantizadas para tu pabellón Arena Padel"
            />
          </div>
          <div class="col-md-6 color-white">
            <h2 class="fw-section-title pt-0">
              Y las fijaciones de una <strong>gran cubierta</strong>
            </h2>
            <p class="lead">
              Debido a la gran envergadura de este tipo de pabellones se
              calculan cimentaciones mediante solera, riostra corrida o zapatas
              individuales acorde a las medidas de cada estructura y teniendo en
              cuenta su ubicación.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="fw-section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>¿Qué cubierta Arena Padel <strong>eliges?</strong></h2>
            <Carousel :items="projects" />
          </div>
        </div>
      </div>
    </section>

    <section class="green-bg overlaped-box">
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
                    ¡Tenemos <strong>más de 5 diseños</strong> Arena
                    esperando!<br />
                  </h2>
                  <p class="lead text-center">
                    Pero si ninguno de estos encaja con tu proyecto,
                    <strong><em>crearemos el modelo desde cero</em></strong>
                    para cubrir múltiples pistas de pádel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactForm
      lang="en"
      title="¿Quieres una cubierta<br> <strong>Arena Pádel</strong>?"
      subtitle="Somos tu proveedor todo en uno para instalaciones de
pádel multipista. Si quieres cubrir más de 6 pistas bajo
una misma cubierta tu mejor elección es el modelo
Arena Padel. Consulta tu caso sin compromiso:
aprovecha nuestra larga experiencia en pistas de pádel."
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { DefaultContent } from "~/types";
const { find } = useStrapi4();

const { data } = await useAsyncData("cubierta-arena-padel-page", () =>
  find<DefaultContent>("cubierta-arena-padel-page", { locale: "en" })
);

const projects = computed(() => [
  {
    image: "que-cubierta-arena-padel-eliges-first-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-second-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
  {
    image: "que-cubierta-arena-padel-eliges-third-slide--min.jpg",
    imageAlt: "cubierta-de-arena-padel-que-hemos-realizado",
    title: "",
    subtitle: "",
  },
]);

const content = computed(() => data.value.data.attributes);
</script>
