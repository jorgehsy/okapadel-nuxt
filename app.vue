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
// You might choose this based on an API call or logged-in status
</script>