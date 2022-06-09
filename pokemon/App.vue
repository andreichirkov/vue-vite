<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"/>
  </div>
</template>

<script>
import Card from "./Card.vue";

const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      pokemons: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const responses = await Promise.all(
          ids.map(id => fetch(`${api}/${id}`))
      )

      const json = await Promise.all(
          responses.map(data => data.json())
      )

      this.pokemons = json.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))
    }
  }
}

</script>

<style scoped>
.cards {
  display: flex;
}


</style>
