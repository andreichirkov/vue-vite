<template>
  <h4>{{ post.title }}</h4>
  <p>{{ post.content }}</p>
</template>

<script>
import {computed} from "vue";
import {testPosts} from "../microblog/testPosts.js";
import {useRoute} from 'vue-router'

export default {
  name: "Post",
  setup() {
    const route = useRoute()
    const post = computed(() =>
        testPosts.find(x => x.id === parseInt(route.params.id, 10))
    )

    return {
      post
    }
  }
}
</script>

<style scoped>

</style>
