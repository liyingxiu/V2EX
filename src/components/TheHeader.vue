<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>首页</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>


    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down searchBar"
    ></v-text-field>

    <v-toolbar-title>
      <router-link to="/login">登录</router-link>
    </v-toolbar-title>
    <v-toolbar-title>
      <router-link to="/register">注册</router-link>
    </v-toolbar-title>
    <v-toolbar-title>
      <router-link class="navbar-brand" to="/about" v-if="isAuthenticated">我的</router-link>
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
.v-application a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}
.router-link-exact-active {
  /* background-color: rgb(96,111,191); */
}

.searchBar {
  width: 1px;
  margin-left: 100px;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeader",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>