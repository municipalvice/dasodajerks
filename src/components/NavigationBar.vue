<template>
  <nav>
    <SidebarMenu v-if="!isSidebarHidden" @closeSidebar="toggleSidebar"></SidebarMenu>
    <i
      class="bi bi-list menu-button"
      @click="toggleSidebar"
    ></i>
    <div class="nav-bar-logo">Seriously Sustainable Soda</div>
  </nav>
</template>

<script>
import SidebarMenu from "./SidebarMenu";

export default {
  name: "NavigationBar",
  methods: {
    toggleSidebar: function () {
      this.isSidebarHidden = !this.isSidebarHidden;
    },
  },
  data() {
    return {
      isSidebarHidden: true,
    };
  },
  components: { SidebarMenu },
};
</script>

<style scoped>
nav {
  height: 3rem;
  width: 100%;
  display: flex;
  order: -1;
  align-items: center;
  border-bottom: solid black 1px;
}
.menu-button {
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  margin: 0 0 0 0.3rem;
  padding: 0;
}
.nav-bar-logo {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>
