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
import Footer from "@/components/common/InterfaceComponents/Footer";
import Header from "@/components/common/InterfaceComponents/Header";
import Layout from "@/components/common/InterfaceComponents/Layout";
export default {
name: "AuthLayout",
  components: {Layout, Header ,Footer}
}
</script>

<style scoped>

</style>
