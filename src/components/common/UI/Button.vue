<template>
  <button :type="type" :class="'button-component py-2 px-3 btn btn-' + btnClassName">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnClassName: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
    },
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/indents';
@import '~@/styles/colors';
@import '~@/styles/anotherConstants';

%btn-main {
  border: 1px solid $twitter-blue;
  border-radius: 20px;
  letter-spacing: 0.02em;
  font-family: $font-fredoka;
}

.btn-twitter {
  color: $twitter-blue !important;
  font-weight: 500;
  @extend %btn-main;

  &:hover {
    background-color: rgba($twitter-blue, 0.1);
  }
}

.btn-add {
  border: 1px solid $twitter-blue;
  background-color: $twitter-blue;
  color: white !important;
  font-weight: 400;
  @extend %btn-main;

  &:hover {
    background-color: rgba(white, 0.1);
    color: rgba($twitter-blue, 0.8) !important;
  }
}
</style>
