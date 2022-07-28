<template>
  //no need for content as redirecting
  <NuxtChild />
</template>

<script setup>
definePageMeta({
  middleware: ["default"]
  // or middleware: 'auth'
})
</script>