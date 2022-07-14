<template>
  <h3>New Post</h3>
  <form @submit.prevent="submit">
    <input type="text" v-model="newPost.title" placeholder="Title">
    <br>
    <textarea
        cols="50"
        rows="10"
        v-model="newPost.content"
    />
    <br>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import {reactive} from "vue";
import {usePosts} from "./usePosts.js";
import {useRoute} from 'vue-router'

export default {
  name: "NewPost",
  setup() {
    const route = useRoute()
    const postStore = usePosts()

    const newPost = reactive({
      title: '',
      content: ''
    })

    const submit = () => {
      postStore.addPost({
        id: postStore.posts.value.length + 1,
        title: newPost.title,
        content: newPost.content
      })
    }

    return {
      newPost,
      submit
    }
  }
}
</script>

<style scoped>

</style>
