<template>
  <h2>Posts</h2>
  <ul>
    <li
      v-for="post in testPosts"
      :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>

  <router-view/>
</template>

<script>
import { testPosts } from "../microblog/testPosts.js";

export default {
  name: "Posts",
  setup() {
    return {
      testPosts
    }
  }
}
</script>

<style scoped>

</style>
