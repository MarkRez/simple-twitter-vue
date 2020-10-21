<template>
  <div>
    <template v-if="loading">Loading...</template>
    <template v-else>
      <Header :isAuthenticated="true" :user="user"/>
      <Layout :isAuthenticated="true" >
        <router-view/>
      </Layout>
      <Footer />
    </template>
  </div>
</template>

<script>
import Header from "@/components/InterfaceComponents/Header";
import Footer from "@/components/InterfaceComponents/Footer";
import Layout from "@/components/InterfaceComponents/Layout";

export default {
  name: "MainLayout",
  components: {Header ,Footer, Layout},
  computed: {
    loading() {
      return false;
      // this.$store.state.loading
    },
    user(){}
  },
  mounted() {
    // this.$store.dispatch('fetchData')
  }
}
</script>

<style scoped>

</style>
