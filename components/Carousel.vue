<template>
  <div>
    <!-- <VueSlickCarousel :arrows="true" :dots="true" v-if="items.length">
      <div 
        class="carousel-item"
        :class="{'active': index === 0}"
        v-for="(item, index) in items"
        :key="index"
        >
        <img 
          class="d-block w-100"
          :src="require(`!!assets-loader!@slides/${item.image}`)"
          :alt="item.imageAlt"
          style="height: auto; width: 100%"
        />
        <div v-if="item.title" class="carousel-caption d-none d-md-block">
          <h1>{{ item.title }}</h1>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </VueSlickCarousel> -->
    <div class="mt-5">
        <NuxtLink class="btn btn-white" to="/es/proyectos/" rel="">Ver más</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items:{
      type: Array,
      required: true
    },
  }

}
</script>