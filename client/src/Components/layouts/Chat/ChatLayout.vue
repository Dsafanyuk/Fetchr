<template>
  <v-app>
    <MainHeader v-model="search" @selectedCategory="selectedCategory = $event"></MainHeader>
    <router-view ></router-view>
    <v-layout row class="chat_container" >
      <v-flex xs12 sm3 md3 offset-sm1>


        <chatRoom @showRoom="fetchMessages"> </chatRoom>
      </v-flex>
</v-layout>
    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import MainHeader from "../MainDashboard/MainHeader.vue";
import chatRoom from './ChatRoom.vue'
import MainFooter from "../MainDashboard/MainFooter.vue";
export default {
  data() {
    return {
      search: "",
      selectedCategory: "Popular"
    };
  },
  components: {
    MainHeader: MainHeader,
    MainFooter: MainFooter,
    chatRoom  : chatRoom

  }
};
</script>
<style>
.chat_container {
  margin-top : 100px 
}
</style>
