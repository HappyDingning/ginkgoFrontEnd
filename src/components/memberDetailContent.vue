<template>
  <div class="main-text container">
    <div class="mobile-head row justify-content-between mobile">
      <img class="avatar col-6" :src="photo ? photo : '/media/photo/default_avatar.png'" />
      <div class="col-6">
        <div class="basic-info">
          <h1>{{ name }}</h1>
          <h4>{{ duty | indexToTitle }}</h4>
        </div>
      </div>
    </div>
    <div class="desktop-head">
      <img class="avatar" :src="photo ? photo : '/media/photo/default_avatar.png'" />
      <span class="basic-info">
        <span>{{ name }}</span>
        <span>{{ duty | indexToTitle }}</span>
      </span>
    </div>
    <div class="introduction" v-html="introduction"></div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.filter("indexToTitle", function(index) {
  switch (index) {
    case 1:
      return "总负责人";
    case 2:
      return "负责人";
    case 3:
      return "指导老师";
    case 4:
      return "管理人员";
    case 5:
      return "队长";
    case 6:
      return "团支部书记";
    case 7:
      return "宣传部长";
    case 8:
      return "技术培训部长";
    case 9:
      return "组织部长";
    case 10:
      return "超算基地正式成员";
    case 11:
      return "超算预备队员";
    case 12:
      return "超算爱好者";
  }
});

export default {
  data() {
    return {
      introduction: "",
      name: "",
      duty: "",
      photo: ""
    };
  },
  props: {
    page_info: {
      id: {
        typr: Number,
        default: -1
      }
    }
  },
  mounted() {
    this.get_content();
  },
  methods: {
    get_content: function() {
      this.$http
        .get("/propaganda/member_detail/?id=" + this.page_info.id)
        .then(result => {
          this.introduction = result.body.introduction;
          this.duty = result.body.duty;
          this.name = result.body.name;
          this.photo = result.body.photo;
        });
    }
  }
};
</script>

<style scoped>
.introduction {
  font-size: 1.4rem;
}

h4 {
  margin-top: 1rem;
}

.main-text >>> p {
  text-indent: 2em;
}

@media (max-width: 991px) {
  .desktop-head {
    display: none;
  }

  .basic-info {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .mobile-head {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}

@media (min-width: 992px) {
  .desktop-head {
    float: right;
  }

  .mobile-head {
    display: none;
  }

  .desktop-head {
    width: 16rem;
    margin-left: 1rem;
  }

  .main-text {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .basic-info {
    text-align: center;
    display: block;
    font-size: large;
  }

  .avatar {
    width: 100%;
  }

  .introduction {
    min-height: 250px;
  }
}
</style>