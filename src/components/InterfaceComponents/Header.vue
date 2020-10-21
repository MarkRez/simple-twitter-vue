<template>
  <header class="fixed-top py-3 px-5">
    <div class="container-fluid">
      <div class="row">
        <span class="logo">Simple Twitter</span>
        <div class="nav-div ml-auto">
          <div v-if="isAuthenticated !== null">
            <div v-if="!isAuthenticated">
              <router-link :to="{ name: 'Login' }">Login</router-link>
              <router-link :to="{ name: 'Registration' }">Registration</router-link>
            </div>
            <div v-else>
              <a href="#" @click="handleClick">Logout</a>
            </div>
          </div>
          <ContentLoader v-else :width="125" :height="30">
            <rect x="0" y="0" rx="7" ry="7" width="125" height="30" />
          </ContentLoader>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ContentLoader from 'vue-content-loading';
import {mapState} from 'vuex'

export default {
  name: "Header",
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false
    },
    handleClick: {
      type: Function
    },
  },
  components: {
    ContentLoader,
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/colors';
@import '~@/styles/indents';
@import '~@/styles/mixins';
@import '~@/styles/anotherConstants';

header {
  background-color: white;
  border-bottom: 1px solid $gray-4;
  @include box-shadow(0px, 5px, 9px, -7px, rgba(214,214,214,1));

  .logo {
    font-family: $font-fredoka;
    font-size: 1.1em;
    font-weight: 400;
  }

  .nav-div {
    a {
      color: black;
      background-color: $gray-3;
      border-radius: 30px;
      margin-left: 10px;
      padding: $small-paddings;
    }
  }

  svg {
    min-width: 125px;
  }
}
</style>
