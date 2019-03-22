<template>
<v-app>
  <MainHeader v-model="search" @selectedCategory="selectedCategory = $event"></MainHeader>
  <router-view></router-view>
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
