<template>
  <body class="fixed-left">

      <!-- Begin page -->
      <div id="wrapper">
  <DashboardHeader> </DashboardHeader>
</div>
</body>



</template>

<script>
import DashboardHeader from "./mini-components/DashboardHeader.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    DashboardHeader: DashboardHeader,
  },
  methods: {

  }
};
</script>

<style scoped="true">
@import "dashboard_assets/css/core.css";
@import "dashboard_assets/css/bootstrap.min.css";
@import "dashboard_assets/css/components.css";
@import "dashboard_assets/css/icons.css";
@import "dashboard_assets/css/pages.css";
@import "dashboard_assets/css/responsive.css";

</style>
