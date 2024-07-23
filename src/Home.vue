<template>
  <div>
    <h1>loading...</h1>
    <p v-if="message">{{ message }}</p>
    <p v-if="error">
      <code>{{ error }}</code>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import liff from "@line/liff";

export default defineComponent({
  data() {
    return {
      message: "",
      error: ""
    };
  },
  mounted() {
    liff
        .init({
          liffId: import.meta.env.VITE_LIFF_ID
        })
        .then(() => {
          this.message = "LIFF init succeeded.";
        })
        .catch((e: Error) => {
          this.message = "LIFF init failed.";
          this.error = `${e}`;
        });
  }
});
</script>