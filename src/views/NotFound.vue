<template>
  <div class="not-found-page">
    <ErrorComponent>Error 404! Page not found.</ErrorComponent>
  </div>
</template>

<script>
import ErrorComponent from "@/components/UI/ErrorComponent";

export default {
  name: "NotFound",
  components: {
    ErrorComponent
  }
}
</script>

<style scoped>

</style>
