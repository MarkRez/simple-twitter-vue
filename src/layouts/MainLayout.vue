<template>
  <div>
      <Header />
      <Layout>
        <router-view/>
      </Layout>
      <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/InterfaceComponents/Header";
import Footer from "@/components/common/InterfaceComponents/Footer";
import Layout from "@/components/common/InterfaceComponents/Layout";

export default {
  name: "MainLayout",
  components: {Header ,Footer, Layout},
}
</script>

<style scoped>

</style>
