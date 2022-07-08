<template>
  <card v-for="post in store.state.posts" :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
import { store } from "./store";
import Card from "../pokemon/Card.vue";
import Controls from "./Controls.vue";

export default {
  components: {
    Controls,
    Card
  },
  setup() {
    return {
      store
    }
  }
}

</script>

<style scoped>
p {
  font-size: 40px;
}

button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>

