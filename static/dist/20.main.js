(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{77:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mobile"},[i("card",{attrs:{card_info:e.news_card_info},on:{switch_page:e.switch_page}}),e._v(" "),i("card",{attrs:{card_info:e.notice_card_info},on:{switch_page:e.switch_page}}),e._v(" "),i("card",{attrs:{card_info:e.article_card_info},on:{switch_page:e.switch_page}})],1)};a._withStripped=!0,i(0).a.component("card",(function(e){i.e(14).then(function(){var t=[i(88)];e.apply(null,t)}.bind(this)).catch(i.oe)}));var n={data:()=>({news_card_info:{card_name:"新闻",logo_src:"/static/img/news.svg",get_content_href:"/news/list/?num=",load_more_page_info:{funcName:"articleClassList",page_info:{title:"新闻",page_info:{get_content_href:"/news/list/?num=",get_detail_content_href:"/news/detail/?id=",funcName:"articleClassDetail"}}},detail_page_info:{page_info:{get_content_href:"/news/detail/?id=",article_id:0},funcName:"articleClassDetail"}},notice_card_info:{card_name:"公告",logo_src:"/static/img/notice.svg",get_content_href:"/notice/list/?num=",load_more_page_info:{funcName:"articleClassList",page_info:{title:"公告",page_info:{get_content_href:"/notice/list/?num=",get_detail_content_href:"/notice/detail/?id=",funcName:"articleClassDetail"}}},detail_page_info:{page_info:{get_content_href:"/notice/detail/?id=",article_id:0},funcName:"articleClassDetail"}},article_card_info:{card_name:"文章",logo_src:"/static/img/article.svg",get_content_href:"/article/list/?num=",load_more_page_info:{funcName:"articleClassList",page_info:{title:"文章",page_info:{get_content_href:"/article/list/?num=",get_detail_content_href:"/article/detail/?id=",funcName:"articleClassDetail"}}},detail_page_info:{page_info:{get_content_href:"/article/detail/?id=",article_id:0},funcName:"articleClassDetail"}}}),methods:{switch_page:function(e){this.$emit("switch_page",e)}}},c=i(3),_=Object(c.a)(n,a,[],!1,null,null,null);_.options.__file="src/components/homeMobile.vue";t.default=_.exports}}]);