<template>
  <form @submit.prevent="submit">
    <my-input
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        :error="username.error"
        @update="update"
    />
    <my-input
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        type="password"
        @update="update"
    />
    <my-button
        background="darkslateblue"
        color="white"
        :disabled="!valid"
    />
  </form>
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
      // valid: true,
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },
  computed: {
    valid() {
      return (
        !this.username.error && !this.password.error
      )
    }
  },
  methods: {
    submit($event) {

    },
    update({ name, value, error }) {
      this[name].value = value
      this[name].error = error
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
