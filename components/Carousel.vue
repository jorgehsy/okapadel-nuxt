<template>
  <div>
      <Carousel v-if="items.length" :wrapAround="true" :items-to-show="1">
        <Slide
          v-for="(item, index) in items"
          :key="index"
          >
          <div class="carousel__item">
            <img 
              :src="`/_nuxt/assets/images/slides/${item.image}`"
              :alt="item.imageAlt"
              style="height: auto; width: 100%"
            />
          </div>
          <div v-if="item.title" class="carousel-caption d-none d-md-block">
            <h1>{{ item.title }}</h1>
            <p>{{ item.subtitle }}</p>
          </div>
        </Slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </Carousel>
    <div class="mt-5">
      <a class="btn btn-white" :href="to" rel="">{{ button }}</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default defineComponent({
  props: {
    items:{
      type: Array,
      required: true
    },
    to:{
      type: String,
      required: true
    },
    button:{
      type: String,
      default: "Ver más"
    }
  },
  data() {
    return {
      //
    }
  },
  methods: {
    
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>
