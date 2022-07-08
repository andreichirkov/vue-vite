<template>
  <router-link to="/posts" >Posts</router-link>

  <router-view />
</template>

<script>


export default {
  components: {

  },
  setup() {

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

