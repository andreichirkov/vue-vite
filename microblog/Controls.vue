<template>
  <button @click="click">Like</button>
  {{ post.likes }}
<!--  {{ post }}-->
  <hashtag v-for="hashtag in post.hashtags"
           :key="hashtag"
           :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from "./Hashtag.vue";
import {store} from "./store.js";

export default {
  name: "Controls",
  components: {Hashtag},
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    const click = () => {
      store.incrementLike(props.post)
    }

    return {
      click
    }
  }
}
</script>

<style scoped>

</style>
