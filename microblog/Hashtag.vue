<template>
  <div class="hashtag" @click="setHashtag">
    #{{ hashtag }}
  </div>
</template>

<script>
import {store} from "./store.js";

export default {
  name: "Hashtag",
  props: {
    hashtag: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag)
    }

    return {
      setHashtag
    }
  }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
}

.hashtag:hover {
  color: cornflowerblue;
}
</style>
