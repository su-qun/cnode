<template>
 <div class="content-layout">
    <div v-if="showHead" class="header">
        <slot name="head"/>
    </div>
    <div class="content">
        <slot/>
    </div>
 </div>
</template>

<script>
export default {
    name:"LayoutContent",
    computed: {
        showHead() {
            return Boolean(this.$slots.head) 
        }
    },
}
</script>

<style scoped lang='less'>
.content-layout {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    .header{
        padding: 8px;
        background-color: #b7bbbd;
    }
    .content{
        background-color: aliceblue;
    }
}
</style>