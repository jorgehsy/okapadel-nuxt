<template>
    <div data-nosnippet="true">
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
                <template v-if="loading">
                  <div class="mb-4">
                    <h3>Sending...</h3>
                  </div>
                </template>
                <template v-if="error">
                  <div class="mb-4">
                    <h3>Oops!... Something went wrong, please try again later.</h3>
                  </div>
                </template>
                <template v-else-if="sendSuccess">
                  <div class="mb-4">
                    <h3>Message send successfully!</h3>
                  </div>
                </template>
                <form v-else method="post">
                  <div class="form-group">
                    <div class="d-lg-flex">
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :class="{error: !nombre}" :placeholder="`${content.name} *`" id="name" v-model="nombre" name="nombre" type="text">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :class="{error: !empresa}" :placeholder="`${content.company} *`" id="company" v-model="empresa" name="empresa" type="text">
                      </div>
                    </div>
                    <div class="d-lg-flex">
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :class="{error: !email}" :placeholder="`${content.email} *`" id="email" v-model="email" name="email" type="email">
                      </div>
                      <div class="my-2 px-2 w-100">
                        <input class="form-control form-control-lg" :class="{error: !telefono}" :placeholder="`${content.phone} *`" id="phone" v-model="telefono" name="telefono" type="number">
                      </div>
                    </div>
                    <div class="my-2 px-2 w-100">
                      <textarea class="form-control form-control-lg" id="message" :class="{error: !mensaje}" name="mensaje" v-model="mensaje" :placeholder="`${content.message} *`" rows="5"></textarea>
                    </div>
                  </div>
                </form>
                <div class="d-lg-flex px-2">
                  <div class="pr-lg-5 text-left">
                    <p class="font-small">
                      {{ content.foot }}
                    </p>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" value="" v-model="autorizar" id="newsletter">
                      <label class="form-check-label font-small" for="newsletter"> {{ content.newsletter }}</label>
                    </div>
                  </div>
                  <div v-if="!loading && !sendSuccess && !error">
                    <button :disabled="!validated" @click="sendEmail()" class="btn btn-primary btn-sm w-sm-100" type="button">{{ content.button }}</button>
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
  data() {
    return {
      loading: false,
      error: false,
      sendSuccess: false,
      autorizar: true,
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      mensaje: '',
    }
  },
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
  methods: {
    sendEmail(){
      this.loading = true;
      fetch('https://nvz4wu4lbnze6voegojlgcbu4i0sjcgt.lambda-url.eu-west-3.on.aws/?' + new URLSearchParams({
        nombre: this.nombre,
        empresa: this.empresa,
        telefono: this.telefono,
        email: this.email,
        mensaje: this.mensaje,
        autorizar: this.autorizar
      })).then(() => {
        this.sendSuccess = true
      }).catch(() => {
        this.error = true
      }).finally(() => this.loading = false)
    }
  },
  computed: {
    validated(){
      return this.nombre && this.empresa && this.email && this.telefono && this.mensaje
    },
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
            newsletter: "I authorize OKATENT, S.L. to send sales information.",
            button: 'Send'
          }
        case "it":
          return {
            name: "Nome",
            company: "Impresa",
            email: "Email",
            phone: "Phone",
            message: "Richiesta",
            foot: "Informazioni sulla protezione dei dati LOPD 3/2018. Titolare del trattamento: OKATENT, S.L. NIF B6802078. Scopo: registrare i dati necessari per offrire i nostri servizi. Legittimazione: consenso del proprietario. Diritti: Avete la possibilità di esercitare il diritto di accesso, rettifica, cancellazione e portabilità, scrivendo all'indirizzo del centro. Ulteriori informazioni sono contenute nel nostro Avviso legale, nell'Informativa sulla privacy e nella politica sui cookie.",
            newsletter: "Autorizzo OKATENT, S.L. a inviarmi informazioni commerciali.",
            button: 'Inviare'
          }
        case "fr":
          return {
            name: "Nom",
            company: "Entreprise",
            email: "E-mail",
            phone: "Phone",
            message: "Commentaires ",
            foot: "Informations Protection des données LOPD 3/2018. Responsable du traitement : OKATENT, S.L.  NIF B6802078. Finali-té : Enregistrer les données nécessaires afin d’assurer nos services. Fondement juridique : Le consentement du titulaire. Droits : Vous pouvez exercer vos droits d’accès, de rectification, de suppression et de portabilité en vous adressant par écrit à l’adresse du centre. Pour plus d’informations, consultez nos mentions légales, notre politique de confidentialité et notre politique en matière de cookies.",
            newsletter: "J’autorise OKATENT, S.L. à m’envoyer des informations commerciales.",
            button: 'Envoyer'
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
.error{
  border-color: red;
}
</style>