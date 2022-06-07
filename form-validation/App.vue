<template>
  <my-input
    name="Username"
    :rules="{ required: true, min: 5 }"
  />
  <my-button
    background="darkslateblue"
    color="white"
    :disabled="!valid"
  />
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";

export default {
  name: "App",
  components: {
    MyButton,
    MyInput
  },
  data() {
    return {
      valid: false
    }
  }
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}

button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%);
}
</style>
