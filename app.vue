<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()
var layout = "default";

const language = route.path.split('/')[1];
console.log(language);

switch (language) {
  case "en":
    layout = "enLayout";
    break;
  case "it":
    layout = "itLayout";
    break;
  case "fr":
    layout = "frLayout";
    break;

  default:
    layout = "default";
    break;
}
// You might choose this based on an API call or logged-in status
</script>