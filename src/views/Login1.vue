<template>
  <div class="container">
    <form>
      <div class="section" v-if="isEmail">
        <p class="section-txt">
          邮箱/
          <u @click.prevent="change">用户名登录</u>
        </p>
        <input type="text" class="input" v-model="email" />
        <div class="line-box">
          <div class="line"></div>
        </div>
      </div>

      <div class="section" v-else>
        <p class="section-txt">
          用户名/
          <u @click.prevent="change">邮箱登录</u>
        </p>
        <input type="text" class="input" v-model="username" />
        <div class="line-box">
          <div class="line"></div>
        </div>
      </div>

      <div class="section">
        <p class="section-txt">密码</p>
        <input type="text" class="input" />
        <div class="line-box">
          <div class="line"></div>
        </div>
      </div>

      <div>
        <router-link class="text-info" to="/register">还没有账户？注册一个</router-link>
      </div>

      <button type="submit">登录</button>
    </form>

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

      <!-- <div class="btns">
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
      </div>-->

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
      password: "",
    };
  },
  computed: {
    ...mapGetters(["currentError"]),
  },
  methods: {
    change() {
      this.isEmail = !this.isEmail;
      console.log(this.isEmail);
    },
    login() {
      this.$store
        .dispatch(LOGIN, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => this.$router.push("/about"));
    },
  },
};
</script>

<style scoped>
body {
  background: rgb(53,166,194);
}
form {
  width: 60%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
.section {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.section-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}
.section-txt u{
  cursor:pointer;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #bcbcbc;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(53,166,194);
  transition: ease 0.6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220, 220, 220);
  font-weight: bold;
  color: rgb(120, 120, 120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease 0.3s;
}

button:hover {
  background: rgb(53,166,194);
  color: #ffffff;
}
</style>