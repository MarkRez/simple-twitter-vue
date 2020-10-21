<template>
  <div>
    <Header :isAuthenticated="false" />
    <Layout :isAuthenticated="false" >
      <router-view/>
    </Layout>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/InterfaceComponents/Footer";
import Header from "@/components/InterfaceComponents/Header";
import Layout from "@/components/InterfaceComponents/Layout";
export default {
name: "AuthLayout",
  components: {Layout, Header ,Footer}
}
</script>

<style scoped>

</style>
