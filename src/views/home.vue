<template>
  <div class="text-container text-center">
    <span v-for="(char, index) in displayedText" :key="index" class="char">{{
      char
    }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "This is the Footballers Project.",
      displayedText: "",
    };
  },
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      let index = 0;
      const interval = setInterval(() => {
        this.displayedText += this.text[index];
        index++;
        if (index === this.text.length) {
          clearInterval(interval);
        }
      }, 100);
    },
  },
};
</script>

<style scoped>
.text-container {
  font-size: 50px;
  font-family: "Oswald", sans-serif;
  margin: 100px;
}

.char {
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>