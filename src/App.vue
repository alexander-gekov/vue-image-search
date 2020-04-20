<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h6>Powered By Unsplash.com</h6>
    <form @submit.prevent="formSubmitted()">
      <label for="searchTerm">Keyword: </label>
      <input v-model="searchTerm" type="search" class="u-full-width"
             id="searchTerm" name="searchTerm">
      <button type="submit">Search</button>
    </form>
    <img v-if="loading" class="loading" src="https://i.gifer.com/ZKZg.gif" alt="loading">
    <section class="images">
      <img v-for="image in images" :key="image.id" :src="image.urls.regular" alt="">
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions,import/no-named-as-default
import API from './api.js';

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue Image Search',
      searchTerm: '',
      images: [],
      loading: false,
    };
  },
  components: {
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search(this.searchTerm)
        .then((images) => {
          this.images = images;
          this.loading = false;
        });
    },
  },
};
</script>

<style>
body{
  width: 80%;
  margin: 2em auto 0 auto;
}

img{
  width: 100%;
}

.images{
  column-count: 1;
}

.loading {
  width: 50px;
  padding: 10em 50%;
}

@media (min-width: 750px) {
  .images{
    column-count: 3;
  }
}
</style>
