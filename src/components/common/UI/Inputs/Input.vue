<template>
  <div>
    <label v-if="labelText" :for="id" class="input-component-label">
      {{ labelText }}
    </label>
    <input
        class="form-control component-input"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import Button from "@/components/common/UI/Button";
export default {
  name: "Input",
  components: {Button},
  props: {
    id: String,
    labelText: String,
    placeholder: String,
    type: String,
    value: [String, Number, Boolean],
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/colors";
@import '~@/styles/anotherConstants';

.input-component-label {
  font-family: $font-fredoka;
  color: $gray-6;
}

.component-input {
  &:focus {
    border-color: $twitter-blue;
    outline: 0 !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
</style>
