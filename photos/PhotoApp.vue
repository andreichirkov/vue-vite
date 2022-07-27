<template>
  <Layout>
    <template #header>
      Header
    </template>

    <template #sidebar>
      <album v-for="album in albums" :key="album.id" :album="album">
        {{ album.title }}
      </album>
    </template>

    <template #content>
      <img
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.thumbnailUrl"
          alt="">
    </template>
  </Layout>
</template>

<script>
import {ref, onMounted, computed} from "vue";
import Layout from "./Layout.vue";
import {useStore} from "vuex";
import Album from "./Album.vue";

export default {
  name: 'PhotoApp',
  components: {
    Layout,
    Album
  },

  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('albums/fetch')
    })

    const albums = computed(() => {
      return store.state.albums.all
    })

    const photos = computed(() => {
      return store.state.photos.all
    })

    return {
      albums,
      photos
    }
  }
}

</script>

<style>
body {
  margin: 0;
}
</style>
