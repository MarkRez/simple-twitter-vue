<template>
  <div class="error-component w-100 text-center mt-4 py-4">
    <h3 class="mb-0">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
name: "ErrorComponent"
}
</script>

<style scoped lang="scss">
@import '../../../styles/mixins';
@import '../../../styles/colors';

  .error-component {
    border: 1px solid #f1f1f1;
    border-radius: 25px;
    @include box-shadow(0, 0, 25px, 2px, rgba(214,214,214,0.7));
    background-color: $blue-turquoise;
    background-image: $blue-turquoise-gradient;
  }
</style>
