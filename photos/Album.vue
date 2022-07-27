<template>
  <button @click="click">
    {{album.title}}
  </button>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Album",
  props: {
    album: {
      //id
      //title
      type: Object,
      required: true
    }
  },

  setup(props) {
    const store = useStore()

    const click = () => {
      store.dispatch('photos/getByAlbum', { album: props.album })
    }

    return {
      click
    }
  }
}
</script>

<style scoped>
button {
  background: darkgoldenrod;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
}
button:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>
