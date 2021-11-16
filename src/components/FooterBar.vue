<template>
  <footer id="footer-bar">
    <div class="footer-wrapper">
      <div class="social-icons-row">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-github"></i>
      </div>

      <div class="chi-star-row">
        <span class="chi-star">✶</span>
        <span class="chi-star">✶</span>
        <span class="chi-star">✶</span>
        <span class="chi-star">✶</span>
      </div>
      <div class="made-in">Made in Chicago</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
#footer-bar {
  width: 100%;
  margin-top: 5rem;
  padding: 3rem 0;
  font-weight: bold;
  background-color: var(--purple);
}
.footer-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 250px;
}
.social-icons-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1.3rem;
}
.chi-star-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1.5rem 0;
}
.chi-star {
  font-size: 1.5rem;
  color: darkred;
  padding: 0 0.3rem;
}
.made-in {
  display: flex;
  justify-content: center;
}
</style>
