<template>
  <div>
    <div class="comment-itrm">
        <img :src="author.avatar_url" alt="">
        <div class="comment">
            <div class="info">
                {{author.loginname}} {{index + 1}}楼 {{create_at | fromNow}}
            </div>
            <div v-html="content"></div>
        </div>
        <div v-if="ups.length">
            {{ups.length}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['author','content','create_at','ups','index']
}
</script>

<style lang="less" scoped>
.comment-itrm {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #000;
    img{
        width: 30px;
        height: 30px;
        margin: 5px;
    }
    .comment {
        flex-grow: 1;
    }
}
</style>