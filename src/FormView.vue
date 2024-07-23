<template>
  <div>
    <h1>Form View</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p>Form ID: {{ formId }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      formId: '',
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.formId = urlParams.get('id') || '';
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Form submitted:', this.formData);
      // You can add API calls or other logic here
    }
  }
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>