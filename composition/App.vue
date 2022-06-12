<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  setup() {
    const count = ref(0)
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increment = () => {
      count.value++
    }

    const increase = (n) => {
      numbers[n]++
    }

    return {
      count,
      increment,
      numbers,
      increase
    }
  }
}

</script>

<style scoped>
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>

