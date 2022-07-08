<template>
  <div class="hashtag" @click="setHashtag">
    #{{ hashtag }}
  </div>
</template>

<script>
export default {
  name: "Hashtag",
  emits: ['setHashtag'],
  props: {
    hashtag: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    // this.$emit - в options api
    const setHashtag = () => {
      ctx.emit('setHashtag', props.hashtag)
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
