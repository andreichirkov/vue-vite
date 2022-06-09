<template>
  <div class="card">
    <div class="title">
      {{ pokemon.name }}
    </div>
    <div class="content">
      <img :src="pokemon.sprite" alt="img">
    </div>
    <div class="description" v-for="type in pokemon.types" :key="type">
      {{ type }}
    </div>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
  name: "Card",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  created() {
  },

}

</script>

<style scoped>

img {
  width: 100%;
}

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}

.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title, .content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}

.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
