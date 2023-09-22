<template>
  <div>
    <div>
    <LayoutContent>
      <div v-if="topic" class="topic">
        <div  class="topic-head">
          <h3>{{ topic.title }}</h3>
          <div class="topic-content" v-html="topic.content"></div>
        </div>
      </div>
    </LayoutContent>
    <LayoutContent v-if="topic">
      <template #head>
        <span>{{ topic.replies.length }}回复</span>
      </template>
      <CommentItem v-for="(item,index) in topic.replies" :key="item.id" v-bind="{...item,index}"/>
    </LayoutContent>
  </div>
  <div v-if="noTopic">
    <p>文章已被删除或不存在</p>
  </div>
  </div>
</template>

<script>
import { getTopic } from "../../../api/api";
import CommentItem from '../../../components-plus/CommentItem.vue';
export default {
    components: { CommentItem },
  data() {
    return {
      topic: null,
      noTopic:false
    };
  },
  async created() {
    const { id } = this.$route.params;
    try{
    const res = await getTopic(id);
    this.topic = res.data;
    }catch{
      this.noTopic = true
    }
    
  },
};
</script>

<style lang="less" scoped>
.topic {
  padding: 20px;
  .topic-content {
    /deep/h2 {
      margin: 10px 0;
    }
    /deep/img {
      width: 100%;
    }
  }
}
</style>