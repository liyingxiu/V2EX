<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view />
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import {SETUSERINFO} from "@/store/actions.type";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    //一开始就判断有没有token
    if (JwtService.getToken() === null) {
      //没有token
      this.$router.push("/login");
    } else {
      //有token再判断是否失效
      this.$store
        .dispatch(SETUSERINFO)
        .then()
        .catch(() => {this.$router.push("/login")});
    }
  }
};
</script>


<style scoped>
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>