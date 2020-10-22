<template>
  <ValidationObserver class="col-lg-7" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" class="w-100" novalidate>
      <ValidationProvider rules="required|min:3|max:50" v-slot="{ errors }">
        <Input
            class="mb-3"
            type="text"
            id="login"
            labelText="Login"
            placeholder="Enter your login"
            v-model="login"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider rules="required|min:4|max:50" v-slot="{ errors }">
        <Input
            class="mb-4"
            type="password"
            id="password"
            labelText="Password"
            placeholder="Enter your password"
            v-model="password"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="w-100 text-center">
        <Button style="width: 85px;" type="submit" btnClassName="add">
          Login
        </Button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import Input from "@/components/common/UI/Inputs/Input";
import Button from "@/components/common/UI/Button";
import {ValidationObserver, ValidationProvider} from 'vee-validate';
import {extend} from 'vee-validate';
import {required, min, max} from 'vee-validate/dist/rules';

extend('min', {
  ...min,
  message: 'Too short!'
});

extend('max', {
  ...max,
  message: 'Too long!'
});

extend('required', {
  ...required,
  message: 'This field is required.'
});

export default {
  name: "LoginForm",
  components: {Button, Input, ValidationProvider, ValidationObserver},
  data: () => ({
    login: null,
    password: null,
  }),
  methods: {
    onSubmit() {
      this.$emit('submit', this.$data)
    },
  }
}
</script>

<style scoped lang="scss">
form {
  span {
    color: red;
  }
}
</style>
