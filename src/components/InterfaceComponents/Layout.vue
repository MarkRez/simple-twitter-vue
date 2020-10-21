<template>
  <div class="container-fluid layout">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block sidebar">
        <div class="sidebar-sticky p-3 position-fixed">
          <ul class="nav flex-column">
            <li class="mb-2" v-for="item in menuItems">
              <menu-item :icon="item.icon" :link="item.link" :text="item.text" />
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" class="col-md-10">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <slot/>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MenuItem from "@/components/InterfaceComponents/MenuItem/MenuItem";
const { mapGetters } = createNamespacedHelpers('links');

export default {
  name: "Layout",
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false
    }
  },
  components: {MenuItem},
  computed: {
    ...mapGetters([
      'sidebarLinks',
    ]),
    menuItems() {
      return this.isAuthenticated ? this.sidebarLinks.authenticatedLinks : this.sidebarLinks.nonAuthenticatedLinks;
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/colors';

.layout {
  min-height: calc(100vh - 56px);
  padding-top: 80px;
  padding-bottom: 70px;

  .sidebar-sticky {
    background-color: $gray-2;
    border-radius: 15px;
    min-height: 120px;
    min-width: 225px;
  }
}
</style>
