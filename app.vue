<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const route = useRoute()
  var layout = "spanish";
  const nuxtApp = useNuxtApp()

  const language = route.path.split('/')[1];

  switch (language) {
    case "en":
      layout = "english";
      break;
    case "it":
      layout = "italian";
      break;
    case "fr":
      layout = "french";
      break;

    default:
      layout = "spanish";
      break;
  }

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>