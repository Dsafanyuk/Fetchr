<template>
  <v-app>
    <CourierHeader></CourierHeader>
    <CourierDashboard></CourierDashboard>
  </v-app>
</template>

<script>
import CourierHeader from "./CourierHeader.vue";
import CourierDashboard from "./components/CourierDashboard.vue";
import CourierModule from "../../../store/modules/courier";

export default {
  components: {
    CourierHeader: CourierHeader,
    CourierDashboard: CourierDashboard
  },
  created: function() {
    this.$store.registerModule("courier", CourierModule);
  },
  beforeDestroy: function() {
    this.$store.unregisterModule("courier", CourierModule);
  }
};
</script>

<style lang="css">
</style>
