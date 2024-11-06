<template>
  <div class="player-card" @click="emitClick">
    <img :src="player.image" alt="Kép" class="player-image" />
    <h3 class="player-name">{{ player.name }}</h3>
    <p class="player-position">{{ player.position }}</p>
  </div>
</template>

<script>
export default {
  props: {
    player: Object, // Elvárás, hogy a szülő komponens adja át a 'player' propot
  },
  methods: {
    emitClick() {
      // Továbbadja a player objektumot a szülőnek
      this.$emit('click', this.player);
    },
  },
};
</script>

<style scoped>
.player-card {
  border: 1px solid #06837F;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.player-card:hover {
  transform: scale(1.05);
}

.player-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 10px;
}

.player-name {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #06837F;
  text-align: center;
}

.player-position {
  padding: 5px;
  font-size: 14px;
  color: #06837F;
  text-align: center;
}
.player-description {
  padding: 5px;
}
</style>
