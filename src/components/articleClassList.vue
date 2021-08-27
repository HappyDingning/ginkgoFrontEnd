<template>
  <div>
    <headPic></headPic>
    <div class="container">
      <articleClassTitle :title="page_info.title"></articleClassTitle>
      <articleClassListContent :page_info="page_info.page_info" @switch_page="switch_page"></articleClassListContent>
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

Vue.component("articleClassListContent", function(resolve) {
  require(["./articleClassListContent.vue"], resolve);
});

export default {
  props: {
    page_info: {
      title: "",
      page_info: {
        get_content_href: "",
        get_detail_content_href: "",
        funcName: ""
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