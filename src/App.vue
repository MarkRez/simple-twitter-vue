<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/common/InterfaceComponents/Header";
import Footer from "@/components/common/InterfaceComponents/Footer";
import { createNamespacedHelpers } from 'vuex';
import { LOG_IN } from '@/store/modules/auth/actions';
import { SET_LOADING } from '@/store/modules/auth/mutations';
const { mapActions, mapMutations } = createNamespacedHelpers('auth');

export default {
  components: {Footer, Header},
    methods: {
      ...mapActions({
        logIn: LOG_IN,
      }),
      ...mapMutations({
        setLoading: SET_LOADING,
      }),
  },
  mounted() {
    if (localStorage.getItem('_token')) {
      this.logIn();
    } else {
      this.setLoading(false);
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/colors';
@import '~@/styles/anotherConstants';

body {
  font-family: 'Syne', sans-serif!important;

  h1, h2, h3, h4, h5, h6 {
    font-family: $font-fredoka;
  }
}

a {
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none!important;
    color: black;
  }
}

.btn:focus, textarea:focus {
  outline: none!important;
  box-shadow: none!important;
}
</style>
