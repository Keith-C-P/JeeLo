<template>
  <Card>
    <template #title>
      <h3>{{ title }}</h3>
    </template>
    <template #content>
      <p>{{ content }}</p>
    </template>
  </Card>
</template>

<script>
import { Card } from "primevue/card";

export default {
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
