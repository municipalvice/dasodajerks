<template>
  <div class="button-wrapper">
    <button class="round-button" :style="colorButton">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    text: String,
    color: String,
  },
  computed: {
    colorButton() {
      return {
        "--button-color": this.color,
      };
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.round-button {
  font-size: 1.1rem;
  padding: 0 0.9rem;
  height: 1.9rem;
  color: white;
  background-color: var(--button-color);
  font-weight: bold;
  border: none;
  border-radius: 15pt;
}
</style>
