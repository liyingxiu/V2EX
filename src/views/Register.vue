<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="姓名"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
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
    <v-text-field
      v-model="repeatPassword"
      :error-messages="repeatPasswordErrors"
      label="再次输入密码"
      required
      @input="$v.repeatPassword.$touch()"
      @blur="$v.repeatPassword.$touch()"
    ></v-text-field>

    <p>
      <router-link class="text-info" to="/login">已有账户，直接登录</router-link>
    </p>

    <v-btn class="mr-4" @click="submit">注册</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  sameAs,
  minLength,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeatPassword: { required, sameAsPassword: sameAs("password")},
  },

  data: () => ({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters");
      return errors;
    },
    repeatPasswordErrors(){
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.required && errors.push("Password needs to be confirmed");
      !this.$v.repeatPassword.sameAsPassword && errors.push("Passwords must be identical");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
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
  margin: 20px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
a{
  text-decoration: none;
  cursor: pointer;
}
</style>