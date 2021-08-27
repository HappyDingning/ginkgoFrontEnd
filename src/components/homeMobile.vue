<template>
  <div class="mobile">
    <card @switch_page="switch_page" :card_info="news_card_info"></card>
    <card @switch_page="switch_page" :card_info="notice_card_info"></card>
    <card @switch_page="switch_page" :card_info="article_card_info"></card>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("card", function(resolve) {
  require(["./mobileHomeCard.vue"], resolve);
});

export default {
  data() {
    return {
      news_card_info: {
        card_name: "新闻",
        logo_src: "/static/img/news.svg",
        get_content_href: "/news/list/?num=",
        load_more_page_info: {
          funcName: "articleClassList",
          page_info: {
            title: "新闻",
            page_info: {
              get_content_href: "/news/list/?num=",
              get_detail_content_href: "/news/detail/?id=",
              funcName: "articleClassDetail"
            }
          }
        },
        detail_page_info: {
          page_info: {
            get_content_href: "/news/detail/?id=",
            article_id: 0
          },
          funcName: "articleClassDetail"
        }
      },
      notice_card_info: {
        card_name: "公告",
        logo_src: "/static/img/notice.svg",
        get_content_href: "/notice/list/?num=",
        load_more_page_info: {
          funcName: "articleClassList",
          page_info: {
            title: "公告",
            page_info: {
              get_content_href: "/notice/list/?num=",
              get_detail_content_href: "/notice/detail/?id=",
              funcName: "articleClassDetail"
            }
          }
        },
        detail_page_info: {
          page_info: {
            get_content_href: "/notice/detail/?id=",
            article_id: 0
          },
          funcName: "articleClassDetail"
        }
      },
      article_card_info: {
        card_name: "文章",
        logo_src: "/static/img/article.svg",
        get_content_href: "/article/list/?num=",
        load_more_page_info: {
          funcName: "articleClassList",
          page_info: {
            title: "文章",
            page_info: {
              get_content_href: "/article/list/?num=",
              get_detail_content_href: "/article/detail/?id=",
              funcName: "articleClassDetail"
            }
          }
        },
        detail_page_info: {
          page_info: {
            get_content_href: "/article/detail/?id=",
            article_id: 0
          },
          funcName: "articleClassDetail"
        }
      }
    };
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