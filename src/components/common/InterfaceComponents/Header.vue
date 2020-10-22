<template>
  <header class="fixed-top align-items-center py-3 px-5">
    <div class="container-fluid">
      <div class="row">
        <span class="logo">Simple Twitter</span>
        <div class="nav-div ml-auto">
          <div v-if="!loading">
            <template v-if="!isAuthenticated">
              <router-link :to="{ name: 'Login' }">Login</router-link>
              <router-link :to="{ name: 'Registration' }">Registration</router-link>
            </template>
            <template v-else>
              <a href="#" @click="handleClickLogout">Logout</a>
            </template>
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
import { createNamespacedHelpers } from 'vuex';
import { LOG_OUT } from '@/store/modules/auth/actions';
const { mapActions, mapState } = createNamespacedHelpers('auth');

export default {
  name: "Header",
  components: {
    ContentLoader,
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      isAuthenticated: state => state.loggedIn
    })
  },
  methods: {
    ...mapActions({
      logOut: LOG_OUT,
    }),
    async handleClickLogout() {
      this.logOut();
      this.$router.push({name: 'Login'});
    },
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/_colors.scss';
@import '~@/styles/_indents.scss';
@import '~@/styles/_mixins.scss';
@import '~@/styles/_anotherConstants.scss';

header {
  background-color: $twitter-blue;
  border-bottom: 1px solid $gray-4;
  @include box-shadow(0px, 5px, 9px, -7px, rgba(214,214,214,1));
  font-family: $font-fredoka;

  .logo {
    font-size: 1.1em;
    font-weight: 400;
    color: white;
  }

  .nav-div {
    a {
      color: $gray-6;
      background-color: white;
      border-radius: 30px;
      margin-left: 10px;
      padding: $small-paddings;
      transition: color .3s ease, background-color .3s ease;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }

  svg {
    min-width: 125px;
  }
}
</style>
