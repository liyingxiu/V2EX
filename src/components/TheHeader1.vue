<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <router-link class="navbar-brand" to="/">首页</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>

        <router-link class="navbar-brand" to="/login">登录</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <router-link class="navbar-brand" to="/register">注册</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div>
        <router-link class="navbar-brand" to="/about" v-if="isAuthenticated">我的</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </nav>
  </div>
</template>

<style scoped>
a{
  color: #17a2b8;
}
.router-link-exact-active{
  color: rgb(19, 15, 10);
}
nav{
  display: flex;
  justify-content: space-around;
  padding-left: 150px;
  padding-right: 150px;
}

</style>

<script>
import {mapGetters} from "vuex";
export default {
  name: "TheHeader",
  computed:{
    ...mapGetters(['isAuthenticated']),
  }
};
</script>