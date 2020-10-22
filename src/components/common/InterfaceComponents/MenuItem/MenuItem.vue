<template>
  <router-link :to="link">
    <FontAwesomeIcon :icon="icon"/>
    {{ text }}
  </router-link>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "MenuItem",
  components: {
    FontAwesomeIcon
  },
  props: {
    link: {
      type: Object,
      required: true
    },
    icon: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/_colors.scss";
@import '~@/styles/_anotherConstants.scss';

a {
  font-family: $font-fredoka;
  letter-spacing: 0.01em;
  font-size: 1.15rem;
  color: $gray-6;
  padding-left: 5px;

  &:hover {
    color: $gray-7;
  }

  svg {
    margin-right: 10px;
  }
}
</style>
