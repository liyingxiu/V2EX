<template>
  <div class="container">
    <h2>登录</h2>
    <p>
      <router-link class="text-info" to="/register">还没有账户？注册一个</router-link>
    </p>

    <form>
      <div class="form-group row" v-if="isEmail">
        <label for="inputEmail" class="col-sm-2 col-form-label">邮箱</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" v-model="email" />
        </div>
      </div>

      <div class="form-group row" v-else>
        <label for="inputUsername" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-8">
          <input type="plaintext" class="form-control" v-model="username" />
        </div>
      </div>

      <div class="btns">
        <button
          type="button"
          class="btn btn-outline-info pull-xs-right"
          @click="isEmail=false"
          v-if="isEmail"
        >使用用户名登录</button>
        <button
          type="button"
          class="btn btn-outline-info pull-xs-right"
          @click="isEmail=true"
          v-else
        >使用邮箱登录</button>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" v-model="password" />
        </div>
      </div>

      <p>{{currentError}}</p>

      <div class="btn">
        <button type="button" class="btn btn-outline-info pull-xs-right" @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type.js";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      isEmail: true,
      email: "",
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["currentError"])
  },
  methods: {
    login() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => this.$router.push("/about"));
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-top: 50px;
  width: 25vw;
}
h2,
p {
  text-align: center;
}
.btn {
  margin-left: 7.7vw;
}
.btns{
  margin-top: 22px;
  margin-bottom: 22px;
  text-align: start;
  margin-left:4.1vw;
}
</style>