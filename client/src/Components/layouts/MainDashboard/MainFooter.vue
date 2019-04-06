<template>
  <v-footer height="auto" color="primary">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" color="white" @click="footerActions(link)" flat round>{{ link }}</v-btn>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2018 —
        <strong>Fetchr</strong>
      </v-flex>
      
    </v-layout>
  </v-footer>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    links: ["Home", "Courier", "Team", "Scroll up"]
  }),
  methods: {
    footerActions: function(link){
      switch(link){
        case "Home": {
          this.$router.push("/dashboard");
          break;
        }
         case "Courier": {
          this.$router.push("/courier");
          break;
        }
        case "Team": {
          this.$router.push("/home#team");
          break;
        }
        case "Scroll up": {
          this.scrollToTop();
          break;
        }
          break;
      }
    },
    scrollToTop: function() {
      window.scrollTo(0, 0);
    },
  }
};
</script>


<style>
</style>
