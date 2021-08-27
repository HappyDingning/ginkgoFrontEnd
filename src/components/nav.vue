<template>
  <div class="nav-box">
    <div class="mobile-nav-box">
      <nav class="navbar navbar-dark mobile-nav" style="background-color: #014B7D;">
        <a class="navbar-brand" @click="switch_subnav(1); switch_page(switch_to_home)">
          <img src="/static/img/logo.png" height="30" alt />
          <img src="/static/img/text.png" height="30" />
        </a>
        <div style="float: right;">
          <img
            src="/static/img/menu.svg"
            width="30"
            height="35"
            alt
            class="menu"
            @click="switch_subnav(0)"
          />
          <img
            src="/static/img/cancel.svg"
            width="30"
            height="35"
            alt
            class="cancel"
            @click="switch_subnav(1)"
          />
        </div>
      </nav>
      <nav class="navbar justify-content-start mobile-sub-nav" style="display: none;">
        <ul>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_home)">首页</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_introduction)">基地介绍</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_teachers)">指导老师</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_members)">成员</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_achievement)">成就</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_news_list)">新闻</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_notice_list)">公告</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_article_list)">文章</a>
            </div>
          </li>
          <li>
            <div>
              <a @click="switch_subnav(1); switch_page(switch_to_aboutUs)">关于我们</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="desktop-nav-box">
      <div id="desktop-nav">
        <div class="row no-gutters">
          <div class="col-3 offset-1" style="top: 4rem; cursor: pointer">
            <a @click="switch_page(switch_to_home)">
              <img src="/static/img/logo.png" style="width: 8rem;" />
              <img src="/static/img/text.png" style="height: 4rem;" />
            </a>
          </div>
          <div class="col-7" style="top: 5rem;">
            <ul id="desktop-nav-list" style="float: right;">
              <li>
                <a @click="switch_page(switch_to_introduction)">基地介绍</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_teachers)">指导老师</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_members)">成员</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_achievement)">成就</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_news_list)">新闻</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_notice_list)">公告</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_article_list)">文章</a>
              </li>
              <li>
                <a @click="switch_page(switch_to_aboutUs)">关于我们</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 991px) {
  .desktop-nav-box {
    display: none;
  }

  .cancel {
    display: none;
  }

  .navbar-brand {
    width: 73px;
  }

  .menu {
    margin-left: 4.9rem;
  }

  .mobile-sub-nav {
    padding: 1rem;
    background-color: rgba(44, 44, 44, 0.9);
    color: #ffffff;
    position: absolute;
    width: 100%;
    z-index: 999;
  }

  .mobile-sub-nav li {
    list-style-type: none;
    width: 100%;
  }

  .mobile-sub-nav ul {
    width: 100%;
    padding-left: 0px;
  }

  .mobile-sub-nav div {
    text-align: center;
    font-size: 18px;
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    border-bottom-color: white;
    padding: 1rem 0;
  }

  .mobile-sub-nav a {
    color: white;
  }
}

@media (min-width: 992px) {
  .mobile-nav-box {
    display: none;
  }

  #desktop-nav {
    position: fixed;
    z-index: 20;
    height: 15rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0),
      rgb(0, 0, 0)
    );
  }

  #desktop-nav-list {
    list-style: none;
  }

  #desktop-nav-list > li {
    margin: 0px 0.5rem;
    display: inline;
  }

  #desktop-nav-list a {
    font-size: medium;
    color: white;
    text-decoration: none;
    padding: 1.5rem 0.5rem;
    cursor: pointer;
  }

  #desktop-nav-list a:hover {
    background-color: white;
    color: black;
    border-top: solid 0.4rem #2775b6;
  }
}
</style>

<script>
import Vue from "vue";
import $ from "jquery";

export default {
  data() {
    return {
      switch_to_home: {
        page_info: NaN,
        funcName: "home"
      },
      switch_to_news_list: {
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
      switch_to_notice_list: {
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
      switch_to_article_list: {
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
      switch_to_achievement: {
        funcName: "achievement",
        page_info: NaN
      },
      switch_to_teachers: {
        funcName: "memberList",
        page_info: {
          title: "指导老师",
          memberListContent_info: {
            identity: 0
          }
        }
      },
      switch_to_members: {
        funcName: "memberList",
        page_info: {
          title: "成员",
          memberListContent_info: {
            identity: 1
          }
        }
      },
      switch_to_aboutUs: {
        funcName: "textSection",
        page_info: {
          title: "关于我们",
          page_info: {
            get_text_href: "/article/detail/?id=",
            text_id: 3
          }
        }
      },
      switch_to_introduction: {
        funcName: "textSection",
        page_info: {
          title: "基地介绍",
          page_info: {
            get_text_href: "/article/detail/?id=",
            text_id: 2
          }
        }
      }
    };
  },
  methods: {
    switch_subnav: function(state) {
      if (state) {
        // 关闭菜单
        $(".menu")[0].style.display = "block";
        $(".cancel")[0].style.display = "none";
        $(".mobile-sub-nav")[0].style.display = "none";
        $("body").css("overflow", "unset");
        $("body").height("unset");
        $(".mobile-sub-nav").height("unset");

        return;
      } else {
        // 打开菜单
        $(".menu")[0].style.display = "none";
        $(".cancel")[0].style.display = "block";
        $(".mobile-sub-nav")[0].style.display = "block";
        $("body").css("overflow", "hidden");
        $("body").height("100%");
        $(".mobile-sub-nav").height("100%");

        return;
      }
    },
    switch_page: function(switch_page_info) {
      this.$emit("switch_page", switch_page_info);
    }
  }
};
</script>
