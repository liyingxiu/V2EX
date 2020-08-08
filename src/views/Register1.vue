<template>
  <div class="container">
    <h2>注册</h2>
    <p>
      <router-link class="text-info" to="/login">已经有账户了？直接登录</router-link>
    </p>

    <form>
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-3 col-form-label">邮箱</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" v-model="email" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputUsername" class="col-sm-3 col-form-label">用户名</label>
        <div class="col-sm-8">
          <input type="plaintext" class="form-control" v-model="username" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" v-model="password" />
        </div>
      </div>
      <!-- <div class="form-group row">
        <label for="Confirm" class="col-sm-2 col-form-label">Confirm</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" v-model="email" />
        </div>
      </div>-->
      <div class="btn">
        <button type="button" class="btn btn-outline-info pull-xs-right" @click="onSubmit">注册</button>
      </div>
      <p>{{currentError}}</p>
    </form>
  </div>
</template>

<script>
import { REGISTER } from "@/store/actions.type.js";
import { mapGetters } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["currentError"])
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => this.$router.push("/login"));
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
  margin-left: 8.7vw;
}
</style>