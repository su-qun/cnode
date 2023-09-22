<template>
  <div class="cell">
    <div class="img">
      <router-link
        :to="{
          name: 'user',
          params: { loginname: author.loginname },
        }"
      >
        <img :src="author.avatar_url" alt="" />
      </router-link>
    </div>
    <div class="count">
      <span class="reply">{{ reply_count }}</span
      ><span class="visit">/{{ visit_count }}</span>
    </div>
    <el-tag
      :type="top || good ? 'success' : 'info'"
      :effect="top || good ? 'dark' : 'light'"
      size="mini"
      >{{ { top, good, tab } | transfromTopicType }}</el-tag
    >
    <div class="title" @click="goToDetail">
      <span>{{ title }}</span>
    </div>
    <div class="time">
      <span>{{ last_reply_at | fromNow }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: [
    "author",
    "good",
    "last_reply_at",
    "reply_count",
    "tab",
    "title",
    "top",
    "visit_count",
    "id",
  ],
  methods: {
    goToDetail() {
      this.$router.push({
        name: "topic",
        params: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style secoped lang='less'>
.cell {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b8b7b7;
  .info {
    color: #999;
    background-color: #e5e5e5;
    border: 1px solid #e5e5e5;
  }
  .img {
    img {
      width: 30px;
      cursor: pointer;
    }
  }
  .count {
    line-height: 30px;
    margin-left: 4px;
    width: 80px;
    display: flex;
    justify-content: center;
    .reply {
      font-size: 14px;
      color: #857791;
    }
    .visit {
      font-size: 10px;
      color: #b4b4b4;
    }
  }
  .state {
    margin: 0 6px;
  }
  .title {
    line-height: 30px;
    width: 450px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 8px;
    flex-grow: 1;
    cursor: pointer;
  }
  .time {
    line-height: 30px;
    font-size: 10px;
    color: #999;
  }
}
</style>