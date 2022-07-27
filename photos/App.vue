<template>
  <router-view />
</template>

<script>
import {ref, onMounted, computed} from "vue";
import Layout from "./Layout.vue";
import {useStore} from "vuex";
import Album from "./Album.vue";

export default {
  components: {
    Layout,
    Album
  },

  setup() {

  }
}

</script>

<style>

</style>
