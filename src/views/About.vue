<template>
  <div class="about">
    <h1>关于我</h1>

    <div v-if="isAuthenticated">
      <p>
        <br />
        用户名:{{currentUser.username}}
        <br />
        邮箱:{{currentUser.email}}
        <br />
        昵称:{{currentUser.nickname}}
        <br />
        身份:{{currentUser.roleName}}
        <br />头像:
        <img :src="currentUser.avatar" />
      </p>

      <button type="button" class="btn btn-outline-info pull-xs-right" @click="Logout">退出登录</button>
    </div>


    <p v-else>
      还未登录或注册，请先
      <router-link to="/login">登录</router-link>或
      <router-link to="/register">注册</router-link>.
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {LOGOUT} from "@/store/actions.type.js";
export default {
  name: "About",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods:{
    Logout(){
      this.$store.dispatch(LOGOUT).then(()=>{
        this.$router.push('/login');
      })
    }
  }
};
</script>