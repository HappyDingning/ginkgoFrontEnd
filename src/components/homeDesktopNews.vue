<template>
  <div class="desktop-notice row no-gutters justify-content-center">
    <div class="col-4 sub-item-title">
      <h2>
        <b></b>
        新闻
        <b></b>
      </h2>
    </div>
    <div class="col-12"></div>
    <div
      class="col-4 row justify-content-center news"
      v-for="(each, index) in contents"
      :key="index"
      @click="switch_page_info.switch_to_detail_page.page_info.article_id=each.id; switch_page(switch_page_info.switch_to_detail_page)"
    >
      <div class="col-3">
        <h1>{{ each.date | getDay }}</h1>
        <h6>{{ each.date }}</h6>
      </div>
      <div class="col-8 news-title">
        <h3>{{ each.title }}</h3>
        <p>{{ each.description }}</p>
      </div>
    </div>
    <div class="col-4 more-button">
      <a @click="switch_page(switch_page_info.switch_to_list_page)">查看更多新闻</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.filter("getDay", function(value) {
  return value.slice(8);
});

export default {
  data() {
    return {
      contents: [],
      total_num: 3,
      switch_page_info: {
        switch_to_detail_page: {
          page_info: {
            article_id: 0,
            get_content_href: "/news/detail/?id="
          },
          funcName: "articleClassDetail"
        },
        switch_to_list_page: {
          page_info: {
            title: "新闻",
            page_info: {
              get_content_href: "/news/list/?num=",
              get_detail_content_href: "/news/detail/?id=",
              funcName: "articleClassDetail"
            }
          },
          funcName: "articleClassList"
        }
      }
    };
  },
  mounted() {
    this.get_news();
  },
  methods: {
    get_news: function() {
      this.$http.get("/news/list/?num=" + this.total_num).then(result => {
        this.contents = result.body.contents;
      });
    },
    switch_page: function(switch_page_info) {
      this.$emit("switch_page", switch_page_info);
    }
  }
};
</script>

<style scoped>
.more-button {
  text-align: center;
  color: white;
}

.more-button > a {
  border-radius: 5px;
  border-style: solid;
  border-color: aliceblue;
  font-size: 14px;
  line-height: 48px;
  display: block;
  height: 48px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-decoration: none;
  margin-bottom: 240px;
  opacity: 0.7;
  cursor: pointer;
}

.more-button > a:hover {
  opacity: 1;
}

.BigCarousel-1-indicators {
  margin-right: 8.33%;
  bottom: -20px !important;
}

.sub-item-title {
  height: fit-content;
  margin-bottom: 40px;
  margin-top: 160px;
}

h2 {
  text-align: center;
  color: white;
  font-size: 36px;
}

h1,
h6 {
  text-align: center;
}

.news {
  color: white;
  margin-bottom: 60px;
  cursor: pointer;
  opacity: 0.7;
}

.news:hover {
  opacity: 1;
}

p {
  opacity: 0.7;
  padding-top: 10px;
}

.desktop-notice {
  background-image: url(/static/img/home_background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>