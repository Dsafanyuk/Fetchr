<template>

  <body>
    <DashboardHeader> </DashboardHeader>
    <StatsBar> </StatsBar>

  </body>



</template>

<script>
  import DashboardHeader from "./mini-components/DashboardHeader.vue";
  import  StatsBar from "./mini-components/StatsCard.vue"

  export default {
    data() {
      return {};
    },
    components: {
      DashboardHeader: DashboardHeader,
      StatsBar       : StatsBar ,
    },
    methods: {

    }
  };
</script>

<style scoped="true">


</style>
