<template>
  <div class="sidebar-menu">
    <i class="bi bi-x-lg close-button" @click="$emit('close')"></i>
    <a class="menu-item" href="">Where to Buy</a>
    <a class="menu-item" href="">Support Us</a>
    <router-link to="/flavors" class="menu-item" href="">Da Flavors</router-link>
    <a class="menu-item" href="">The Plastic Problem</a>
    <a class="menu-item" href="">Our Company</a>
    <a class="menu-item" href="">Home</a>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--pink);
  overflow: hidden;
}
.menu-item {
  margin: 0.3rem 1rem;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}
.close-button {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
}
</style>
