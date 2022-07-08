<template>
  <div>
    #{{ hashtag }}
  </div>
</template>

<script>
export default {
  name: "Hashtag",
  props: {
    hashtag: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
