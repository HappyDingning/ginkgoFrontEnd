<template>
  <div>
    <headPic></headPic>
    <div class="container">
      <articleClassTitle :title="page_info.title"></articleClassTitle>
      <memberListContent :page_info="page_info.memberListContent_info" @switch_page="switch_page"></memberListContent>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("headPic", function(resolve) {
  require(["./headPic.vue"], resolve);
});

Vue.component("articleClassTitle", function(resolve) {
  require(["./articleClassTitle.vue"], resolve);
});

Vue.component("memberListContent", function(resolve) {
  require(["./memberListContent.vue"], resolve);
});

export default {
  props: {
    page_info: {
      title: "",
      memberListContent_info: {
        identity: {
          typr: Number,
          default: -1
        }
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

<style scoped>
</style>