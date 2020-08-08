<template>
  <form>
    <v-text-field v-if="isUsernameLogin"
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="用户名"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field v-else 
      v-model="email"
      :error-messages="emailErrors"
      label="邮箱"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="密码"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn @click="change" style="margin-right:15px" v-if="!isUsernameLogin">使用用户名登录</v-btn>
    <v-btn @click="change" style="margin-right:15px" v-else>使用邮箱登录</v-btn>
    <v-btn class="mr-4" @click="submit">登录</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
import { LOGIN } from "@/store/actions.type.js";
import { mapGetters } from "vuex";

export default {
  name:"Login",

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },

  data: () => ({
    isUsernameLogin:true,
    name: "",
    email: "",
    password: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("用户名至多10个字符");
      !this.$v.name.required && errors.push("用户名未输入");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("邮箱必须是合法的");
      !this.$v.email.required && errors.push("邮箱未输入");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("密码未输入");
      !this.$v.password.minLength &&
        errors.push("密码至少6个字符");
      return errors;
    },
    ...mapGetters(["currentError"]),
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    change() {
      this.isUsernameLogin = !this.isUsernameLogin;
      console.log(this.isUsernameLogin);
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
  background: rgb(53, 166, 194);
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
</style>