<template>
  <v-app id="inspire">
    <TheHeader></TheHeader>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <TheFooter></TheFooter>
  </v-app>
</template>

<script>
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import { SETUSERINFO } from "@/store/actions.type";
export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
  created() {
    //一开始就判断有没有token
    if (JwtService.getToken() === null) {
      //没有token就强制跳到登录页面
      this.$router.push("/login");
    } else {
      //有token再判断是否失效
      this.$store
        .dispatch(SETUSERINFO)
        .then(() => {
          this.$router.push("/home");
        })
        .catch(() => {
          this.$router.push("/login");
        });
    }
  },
};
</script>


<style scoped>
</style>