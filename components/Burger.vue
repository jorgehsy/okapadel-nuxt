<template>
    <div class="burger" @click="toggle">
        <div class="bm-icon">
            <i class="fa-solid fa-bars"></i>
        </div>
        <slot v-if="active" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
});
</script>
