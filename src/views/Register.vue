<template>
  <div class="container">
    <h2>Register</h2>
    <p>
      <router-link class="text-info" to="/login">Have an account?</router-link>
    </p>

    <form @click.prevent="onSubmit">
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" v-model="email" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-8">
          <input type="plaintext" class="form-control" v-model="username" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
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
        <button type="button" class="btn btn-outline-info pull-xs-right">Register</button>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      this.$store.dispatch(REGISTER,{
        email:this.email,
        username:this.username,
        password:this.password
      }).then(()=>this.$router.push("/home"));
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
.btn{
  margin-left: 6.9vw;
}
</style>