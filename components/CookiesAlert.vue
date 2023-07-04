<template lang="">
  <div class="cookies-alert" v-if="!accepted && timeCheck">
    <div class="container d-flex justify-content-between align-items-center">
      <p> 
          {{text}}
          <!-- Para personalizar tus cookies haz <button class="btn btn-link">click aquí.</button> -->
      </p>
      <button class="btn btn-secondary btn-small" @click="acceptCookies()"> {{button}} </button>
    </div>
  </div>
</template>

<script>
export default {  
  name: "CookiesAlert",

  props:{
    text: {
      type: String,
      default: "Utilizamos cookies para fines analíticos y supervisar sus hábitos de navegación."
    },
    button: {
      type: String,
      default: "Aceptar"
    }
  },

  data() {
    return {
      timeCheck: false,
      accepted: false
    };
  },

  mounted() {
    setTimeout(() => {
      this.timeCheck = true;
    }, 2000);

    if (process.client){
      this.accepted = localStorage.getItem("cookiesAccepted");
    }
  },

  methods: {
    acceptCookies() {
      if (!process.client) return;

      localStorage.setItem("cookiesAccepted", true);
      this.accepted = true;
    },
  },
};
</script>