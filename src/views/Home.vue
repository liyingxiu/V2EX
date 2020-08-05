<template>
  <div class="home">
    <div class="column1 bg-light">
      <ul>
        <li v-for="item in newItems" :key="item.id" v-html="item.title">
          <router-link :to="item.url"></router-link>
        </li>
      </ul>
    </div>

    <div class="column2 bg-light">
      <ul>
        <li v-for="item in hotItems" :key="item.id" v-html="item.title">
          <router-link :to="item.url"></router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import ApiService from "@/common/api.service";
import hotTheme from "@/assets/hotest_theme.json";
import newTheme from "@/assets/newest_theme.json";
import { FETCH_ARTICLES } from "@/store/actions.type.js";
export default {
  name: "Home",
  data() {
    return {
      hotItems: hotTheme,
      newItems: newTheme
    };
  },
  methods: {
    getArticles() {
      this.$store.dispatch(FETCH_ARTICLES,"topics/hot.json");
    }
  }
};
</script>

<style scoped>
.home {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
.column1 {
  width: 75.5%;
  word-wrap: break-word;
  word-break: break-all;
}
.column2 {
  width: 24.5%;
  word-wrap: break-word;
  word-break: break-all;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>