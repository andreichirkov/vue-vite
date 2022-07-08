<template>
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
    const filteredPosts = computed(() => {
      if (!store.state.currentTag) {
        return store.state.posts
      }

      return store.state.posts.filter(
        post => post.hashtags.includes(store.state.currentTag)
      )
    })


    return {
      filteredPosts
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

