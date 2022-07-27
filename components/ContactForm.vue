<template lang="">
    <div>
      <section class="single-col-section">
        <div class="container py-5">
            <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-12 text-center">
                <div v-html="title"></div>
                <div class="row my-3">
                  <div class="col"></div>
                  <div class="col-md-8">
                    <p class="color-primary lead">{{ subtitle }}<br></p>
                  </div>
                  <div class="col"></div>
                </div>
                <form method="post">
                  <div class="form-group">
                    <div class="d-lg-flex">
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" placeholder="Nombre *" id="name" name="name" type="text">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" placeholder="Empresa *" id="company" name="company" type="text">
                      </div>
                    </div>
                    <div class="d-lg-flex">
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" placeholder="Email *" id="email" name="email" type="email">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" placeholder="Teléfono *" id="phone" name="phone" type="number">
                      </div>
                    </div>
                    <div class="my-2 px-2 w-100">
                      <textarea class="form-control form-control-lg" id="message" name="message" placeholder="Comentarios" rows="5"></textarea>
                    </div>
                  </div>
                </form>
                <div class="d-lg-flex px-2">
                  <div class="pr-lg-5 text-left">
                    <p class="font-small">
                      Información Protección de datos LOPD 3/2018. Responsable del Tratamiento: Okatent S.L. CIF: B-63802078. Finalidad: Registrar los datos necesarios para ofrecer
                      nuestros servicios. Legitimación: Consentimiento del titular. Derechos: Usted tiene la posibilidad de ejercitar el derecho de acceso, rectificación, supresión y portabilidad,
                      dirigiéndose por escrito a la dirección del centro. Más información en nuestro Aviso Legal, Política de Privacidad y Política de Cookies.
                    </p>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" value="" id="newsletter">
                      <label class="form-check-label font-small" for="newsletter"> Autorizo a Okatent S.L. al envío de información comercial.</label>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary btn-sm w-sm-100" type="button">Enviar</button>
                  </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    title: {
      type: String,
      default: "¿Quieres crear tus <strong>instalaciones de pádel?</strong><br>"
    },
    subtitle: {
      type: String,
      default: "Si deseas instalar una pista de pádel cubierta y quieres que te ayudemos. No lo dudes, llámanos y te asesoraremos para que lo consigas."
    }
  },
  data() {
    return {
      // data
    };
  },
  methods: {
    // some functions
  },
};
</script>

<style>
</style>