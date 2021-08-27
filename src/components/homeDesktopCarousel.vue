<template>
  <div>
    <div class="desktop-hot row justify-content-center no-gutters">
      <div class="col-1 hot-title-box">
        <div class="hot-title">
          <h2>基地看点</h2>
        </div>
      </div>
      <div class="col-7 offset-1 carousel-1-box">
        <div class="bd-example carousel-1">
          <div id="BigCarousel-1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators BigCarousel-1-indicators">
              <li data-target="#BigCarousel-1" data-slide-to="0" class="active"></li>
              <li data-target="#BigCarousel-1" data-slide-to="1"></li>
              <li data-target="#BigCarousel-1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(each, index) in carousels"
                :key="index"
                :class="index == 0 ? 'active' : ''"
                @click="switch_page(each.content_class, each.link)"
              >
                <div class="carousel-1-img-box">
                  <img :src="'/media/' + each.img_filename" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption d-none d-md-block carousel-1-text-box">
                  <h5>{{ each.title }}</h5>
                  <p>{{ each.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 carousel-2-box">
        <div class="bd-example carousel-2">
          <div id="BigCarousel-2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(each, index) in carousels.slice(1)"
                :key="index"
                @click="switch_page(each.content_class, each.link)"
                :class="index == 0 ? 'active' : ''"
              >
                <div class="carousel-2-img-box">
                  <img :src="'/media/' + each.img_filename" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption d-none d-md-block carousel-2-text-box">
                  <h3>{{ each.title }}</h3>
                </div>
              </div>
              <div class="carousel-item" @click="switch_page(last_carousel.content_class, last_carousel.link)">
                <div class="carousel-2-img-box">
                  <img :src="'/media/' + last_carousel.img_filename" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-caption d-none d-md-block carousel-2-text-box">
                  <h3>{{ last_carousel.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      carousels: [],
      last_carousel: "",
      switch_to_article: {
        funcName: "articleClassDetail",
        page_info: {
          get_content_href: "",
          article_id: 0
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
  mounted() {
    $("#BigCarousel-2").carousel({
      interval: 1000000000
    });
    $("#BigCarousel-1").on("slid.bs.carousel", function() {
      var evt = window.event || arguments[0];
      $("#BigCarousel-2").carousel(evt.to);
      $("#BigCarousel-2").carousel("pause");
    });

    this.get_carousels();
  },
  methods: {
    get_carousels: function() {
      this.$http.get("/basic/carousel/?place=2").then(result => {
        this.carousels = result.body.reverse();
        this.last_carousel = this.carousels[0];
      });
    },
    switch_page: function(content_class, id) {
      let temp = NaN;

      switch (content_class) {
        case 1:
          temp = this.switch_to_introduction;

          break;
        case 2:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href = "/news/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 3:
        case 4:
        case 5:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href = "/notice/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 6:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href = "/article/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 7:
          temp = this.switch_to_aboutUs;

          break;
      }
      
      this.$emit("switch_page", temp);
    }
  }
};
</script>

<style scoped>
.carousel-inner h5 {
  font-size: 3rem;
}

p {
  opacity: 0.7;
  padding-top: 10px;
}

.desktop-hot {
  margin-top: -150px;
  margin-bottom: 10rem;
}

.hot-title {
  background-color: white;
  width: 8rem;
}

.hot-title-box {
  left: 8.333333%;
}

.hot-title > h2 {
  color: #003262;
  width: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  font-size: 36px;
}

.carousel-1 {
  height: 40rem;
  padding-left: 5rem;
}

.carousel-2 {
  height: 20rem;
  margin-top: 7rem;
  left: -7rem;
  position: relative;
}

.carousel-1-img-box,
.carousel-2-img-box {
  height: 80%;
}

.carousel-1-text-box,
.carousel-2-text-box {
  background-color: white;
  position: relative !important;
  bottom: unset !important;
  left: unset !important;
  right: unset !important;
  margin-right: 20%;
  color: black;
  transform: translateY(-50%);
}

.carousel-1-text-box {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
  padding-left: 3rem;
  text-align: left;
}

.carousel-2-text-box {
  padding: unset !important;
}

.carousel-1-img-box > img,
.carousel-2-img-box > img {
  height: -webkit-fill-available;
}

.carousel-indicators .active {
  background-color: #003262;
}

.carousel-indicators li {
  border-radius: 7px;
  height: 12px !important;
  width: 12px !important;
  border: unset !important;
}

#BigCarousel-1,
#BigCarousel-2 {
  cursor: pointer;
}

#BigCarousel-1:hover >>> h5 {
  color: #003262;
}

#BigCarousel-2:hover h3 {
  color: #003262;
}

h3 {
  line-height: 5rem;
}
</style>