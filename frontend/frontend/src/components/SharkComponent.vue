<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SharkComponent",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getResponse() {
      const path = "http://localhost:5000/shark";
      axios
        .get(path)
        .then((response) => {
          console.log(response.data);
          this.msg = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getResponse();
  },
};
</script>
