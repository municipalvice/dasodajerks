<template>
  <NavigationBar />
  <router-link to="/"></router-link>
  <router-view />
  <FooterBar></FooterBar>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

:root {
  --pink: #E0A0C7;
  --blue: #5AC7D6;
  --purple: #B097C7;
  --violet: #C38CBE;
}
body {
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
.main-logo {
  padding: 0 0.5rem;
  max-width: 90%;
}
</style>
