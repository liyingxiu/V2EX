<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import { SETUSERINFO } from "@/store/actions.type";
export default {
  name: "App",
  components: {},
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
/* #app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
} */
</style>