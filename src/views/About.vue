<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p v-if="">  -->
      <!-- username:{{currentUser}} -->
    <!-- </p> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name:"About",
  computed:{
    ...mapGetters(['currentUser']),
  }
}
</script>