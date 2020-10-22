<template>
  <div class="login-page row justify-content-center">
    <span class="py-3 px-4 mb-3 rounded error-message" v-if="message">{{message}}</span>
    <login-form @submit="onSubmit" />
  </div>
</template>

<script>
import LoginForm from "@/components/routes/Login/LoginForm";
import { createNamespacedHelpers } from 'vuex';
import { LOG_IN } from '@/store/modules/auth/actions';
const { mapActions } = createNamespacedHelpers('auth');
import { logIn } from "@/api";

export default {
  name: "Login",
  components: {LoginForm},
  data: () => ({
    message: null,
  }),
  methods: {
    ...mapActions({
      logIn: LOG_IN,
    }),
    async onSubmit(data)  {
      try {
        const response = await logIn(data);
        if (response.status === 200) {
          this.message = '';
          localStorage.setItem('_token', response.data.token);
          this.logIn();
          this.$router.push({name: 'Feed'});
        }
      } catch (error) {
        const responseStatus = error.response.status;
        if (responseStatus === 401)  {
          this.message = "Incorrect login or password.";
        } else {
          this.message = "Something went wrong.";
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/_colors.scss";

.error-message {
  width: 400px;
  color: red;
  background-color: $light-pink;
  border: 2px solid $dark-red;
}
</style>
