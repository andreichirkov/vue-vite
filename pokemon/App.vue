<template>
  <pokemon-cards
      :pokemons="pokemons"
      :selectedId="selectedId"
      @chosen="fetchEvolutions">
  </pokemon-cards>

  <pokemon-cards
      :pokemons="evolutions">
  </pokemon-cards>
</template>

<script>
import Card from "./Card.vue";
import PokemonCards from "./PokemonCards.vue";

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  name: "App",
  components: {
    PokemonCards,
    Card
  },
  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null
    }
  },
  async created() {
    this.pokemons = await this.fetchData(IDS)
  },
  methods: {
    async fetchData(ids) {
      const responses = await Promise.all(
          ids.map(id => fetch(`${api}/${id}`))
      )

      const json = await Promise.all(
          responses.map(data => data.json())
      )

      return json.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))
    },
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
      this.selectedId = pokemon.id
    }
  }
}

</script>

<style scoped>

</style>
