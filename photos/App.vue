<template>
  <Layout>
    <template #header>
      Header
    </template>

    <template #sidebar>
      <div v-for="album in albums" :key="album.id">
        {{ album.title }}
      </div>
    </template>

    <template #content>
      content
    </template>
  </Layout>
</template>

<script>
import {ref, onMounted, computed} from "vue";
import Layout from "./Layout.vue";
import {useStore} from "vuex";

export default {
  components: {
    Layout
  },

  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('albums/fetch')
    })

    const albums = computed(() => {
      return store.state.albums.all
    })

    return {
      albums
    }
  }
}

</script>

<style>
body {
  margin: 0;
}
</style>
