<template>
  <input type="text" :value="currentTag" @input="setHashtag">
  <card v-for="post in filteredPosts" :key="post.id">
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
import {computed} from "vue";
import {store} from "./store";
import Card from "../pokemon/Card.vue";
import Controls from "./Controls.vue";

export default {
  components: {
    Controls,
    Card
  },
  setup() {
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
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

