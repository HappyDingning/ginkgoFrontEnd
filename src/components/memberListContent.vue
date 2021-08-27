<template>
  <div>
    <div class="item">
      <div v-for="(each, index) in members_list" :key="index">
        <h4>{{ index | indexToTitle }}</h4>
        <div class="members row">
          <div
            class="each_member"
            v-for="(each_people, index) in each"
            :key="index"
            @click="switch_page(each_people.id)"
          >
            <div class="picture">
              <img
                class="avatar"
                :src="each_people.photo ? '/media/' + each_people.photo : '/media/photo/default_avatar.png'"
              />
            </div>
            <h5 class="member_name">{{ each_people.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.filter("indexToTitle", function(index) {
  switch (index) {
    case "1":
      return "总负责人";
    case "2":
      return "负责人";
    case "3":
      return "指导老师";
    case "4":
      return "管理人员";
    case "5":
      return "往届队长";
    case "6":
      return "团支部书记";
    case "7":
      return "宣传部长";
    case "8":
      return "技术培训部长";
    case "9":
      return "组织部长";
    case "10":
      return "超算基地正式成员";
    case "11":
      return "超算预备队员";
    case "12":
      return "超算爱好者";
  }
});

export default {
  data() {
    return {
      members_list: {},
      switch_page_info: {
        funcName: "memberDetail",
        page_info: {
          id: 0
        }
      }
    };
  },
  props: {
    page_info: {
      identity: {
        typr: Number,
        default: -1
      }
    }
  },
  mounted() {
    this.get_members_list();
  },
  methods: {
    get_members_list: function() {
      this.$http
        .get("/propaganda/list/?identity=" + this.page_info.identity)
        .then(result => {
          this.members_list = result.body;
        });
    },
    switch_page: function(id) {
      this.switch_page_info.page_info.id = id;
      this.$emit("switch_page", this.switch_page_info);
    }
  }
};
</script>

<style scoped>
.members-list {
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h4 {
  color: black;
  font-weight: 600;
}

h5 {
  text-align: center;
  margin-top: 0.3rem;
  color: black;
  width: 7.7rem;
}

.avatar {
  width: 7.7rem;
  height: 9rem;
}

.each_member {
  width: 7rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.members {
  padding: 1rem;
}

@media (min-width: 992px) {
  .item {
    padding-right: 10rem;
    padding-left: 10rem;
  }

  .each_member {
    cursor: pointer;
  }
}
</style>