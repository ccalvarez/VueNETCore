<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-bind:key="r" v-for="r in this.results">{{ r }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      results: []
    };
  },
  async beforeMount() {
    const r = await fetch(
      process.env.NODE_ENV == "production"
        ? "/VueNETCore/api/values"
        : "/api/values"
    );
    this.results = await r.json();
  }
};
</script>
