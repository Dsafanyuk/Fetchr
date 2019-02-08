<template>

  <body>
    <CourierHeader> </CourierHeader>
    <CourierSummaryCard class="summarycard"> </CourierSummaryCard>

  </body>



</template>

<script>
  import  CourierHeader from "../mini-components/Courier/CourierHeader.vue";
  import  CourierSummaryCard from "../mini-components/Courier/CourierSummaryCard.vue"

  export default {
    data() {
      return {};
    },
    components: {
      CourierHeader          : CourierHeader,
      CourierSummaryCard     : CourierSummaryCard ,
    },
    methods: {

    }
  };
</script>

<style scoped="true">
.summarycard{
  margin-top: 100px;
}

</style>
