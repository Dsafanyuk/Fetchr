<template>
  <body>
    <CourierHeader> </CourierHeader>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card-box">
            <h4 class="m-t-0 m-b-20 header-title"><b>Inbox</b></h4>

            <div class="inbox-widget nicescroll mx-box" tabindex="5000" style="overflow: hidden; outline: none;">
              <ChatRoom></ChatRoom>
              <ChatRoom></ChatRoom>
              <ChatRoom></ChatRoom>
              <ChatRoom></ChatRoom>

            </div>
          </div>
        </div>

        <div class ="col-lg-8">
            <Conversation></Conversation>
        </div>



      </div>
  </div>
  </body>
</template>

<script>
  import CourierHeader from "../mini-components/Courier/CourierHeader.vue";
  import ChatRoom   from "../mini-components/Courier/ChatRoom.vue";
  import Conversation  from "../mini-components/Courier/Conversation.vue";

  export default {
    data() {
      return {};
    },
    components: {
      CourierHeader: CourierHeader,
      ChatRoom     : ChatRoom,
      Conversation : Conversation,

    },
  }
</script>



<style scoped="true">
  @import "../assets/courier/css/core.css";
  @import "../assets/courier/css/materialdesignicons.css";
  @import "../assets/courier/css/components.css";

.container {
  margin-top: 100px !important;
}
</style>
