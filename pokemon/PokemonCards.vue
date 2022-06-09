<template>
  <div class="cards">
    <card
        v-for="pokemon in pokemons"
        @click="click(pokemon)"
        class="card"
        :class="{ opace: selectedId && pokemon.id !== selectedId }"
        :key="pokemon.id">

      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite" alt="img">
      </template>

      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "PokemonCards",
  components: {Card},
  props: {
    pokemons: {
      type: Array,
      default: []
    },
    selectedId: {
      type: Number
    }
  },
  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    }
  }
}
</script>

<style scoped>
.opace {
  opacity: 0.5;
}

.card:hover {
  opacity: 1;
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}

.cards {
  display: flex;
}

img {
  width: 100%;
}
</style>
