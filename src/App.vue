<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/InterfaceComponents/Header";
import Footer from "@/components/InterfaceComponents/Footer";
export default {
  components: {Footer, Header}
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
  outline: none;
  box-shadow: none;
}
</style>
