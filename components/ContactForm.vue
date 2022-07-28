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
                        <input class="form-control form-control-lg" :placeholder="`${content.name} *`" id="name" name="name" type="text">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :placeholder="`${content.company} *`" id="company" name="company" type="text">
                      </div>
                    </div>
                    <div class="d-lg-flex">
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :placeholder="`${content.email} *`" id="email" name="email" type="email">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :placeholder="`${content.phone} *`" id="phone" name="phone" type="number">
                      </div>
                    </div>
                    <div class="my-2 px-2 w-100">
                      <textarea class="form-control form-control-lg" id="message" name="message" :placeholder="`${content.message} *`" rows="5"></textarea>
                    </div>
                  </div>
                </form>
                <div class="d-lg-flex px-2">
                  <div class="pr-lg-5 text-left">
                    <p class="font-small">
                      {{ content.foot }}
                    </p>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" value="" id="newsletter">
                      <label class="form-check-label font-small" for="newsletter"> {{ content.newsletter }}</label>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary btn-sm w-sm-100" type="button">{{ content.button }}</button>
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
    },
    lang: {
      type: String,
      default: "es"
    },
  },
  computed: {
    content() {
      switch (this.lang) {
        case "en":
          return {
            name: "Name",
            company: "Company",
            email: "Email",
            phone: "Phone",
            message: "Message",
            foot: "Information in compliance with the Organic Law on Data Protection, Law 3/2018. Data Controller: Okatent S.L.  TIN: B63802078. Purpose: To record the data needed to offer our services. Legal grounds for data processing: Consent from the data holder. Rights: You may exercise your rights to access, rectify, delete, and request data portability by writing to the company's address. More information in our Legal Notice, Privacy Policy, and Cookies Policy.",
            newsletter: "I authorize OKATENT, S.L. to send sales information..",
            button: 'Send'
          }
        case "it":
          return {
            name: "Name",
            company: "Company",
            email: "Email",
            phone: "Phone",
            message: "Message",
            foot: "Information in compliance with the Organic Law on Data Protection, Law 3/2018. Data Controller: Okatent S.L.  TIN: B63802078. Purpose: To record the data needed to offer our services. Legal grounds for data processing: Consent from the data holder. Rights: You may exercise your rights to access, rectify, delete, and request data portability by writing to the company's address. More information in our Legal Notice, Privacy Policy, and Cookies Policy.",
            newsletter: "I authorize OKATENT, S.L. to send sales information..",
            button: 'Enviar'
          }
        case "fr":
          return {
            name: "Name",
            company: "Company",
            email: "Email",
            phone: "Phone",
            message: "Message",
            foot: "Information in compliance with the Organic Law on Data Protection, Law 3/2018. Data Controller: Okatent S.L.  TIN: B63802078. Purpose: To record the data needed to offer our services. Legal grounds for data processing: Consent from the data holder. Rights: You may exercise your rights to access, rectify, delete, and request data portability by writing to the company's address. More information in our Legal Notice, Privacy Policy, and Cookies Policy.",
            newsletter: "I authorize OKATENT, S.L. to send sales information..",
            button: 'Enviar'
          }
      
        default:
          return {
            name: "Nombre",
            company: "Empresa",
            email: "Email",
            phone: "Teléfono",
            message: "Comentarios",
            foot: "Información Protección de datos LOPD 3/2018. Responsable del Tratamiento: Okatent S.L. CIF: B-63802078. Finalidad: Registrar los datos necesarios para ofrecer nuestros servicios. Legitimación: Consentimiento del titular. Derechos: Usted tiene la posibilidad de ejercitar el derecho de acceso, rectificación, supresión y portabilidad, dirigiéndose por escrito a la dirección del centro. Más información en nuestro Aviso Legal, Política de Privacidad y Política de Cookies.",
            newsletter: "Autorizo a Okatent S.L. al envío de información comercial.",
            button: 'Enviar'
          }
      }
    }
  },
};
</script>

<style>
</style>