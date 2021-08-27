<template>
  <div>
    <headPic></headPic>
    <memberDetailContent :page_info="page_info"></memberDetailContent>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("headPic", function(resolve) {
  require(["./headPic.vue"], resolve);
});

Vue.component("memberDetailContent", function(resolve) {
  require(["./memberDetailContent.vue"], resolve);
});

export default {
  props: {
    page_info: {
      id: {
        typr: Number,
        default: -1
      }
    }
  },
  methods: {
      switch_page: function(switch_page_info) {
          this.$emit("switch_page", switch_page_info);
      }
  }
};
</script>

<style>
</style>