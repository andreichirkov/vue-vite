<template>
  <button>Like</button>
  {{ post.likes }}
<!--  {{ post }}-->
  <hashtag v-for="hashtag in post.hashtags"
           :key="hashtag"
           :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from "./Hashtag.vue";

export default {
  name: "Controls",
  components: {Hashtag},
  props: {

    post: {
      type: Object,
      required: true
    }

  },
  setup(props) {

  }
}
</script>

<style scoped>

</style>
