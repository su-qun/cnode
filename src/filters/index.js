import Vue from "vue";
import moment from "moment";

// 距离当前日期时间
Vue.filter('fromNow', (time) => {
    return moment(time).fromNow()
})
//主体类型转中文
const tabsMapObj = {
    share: '分享',
    ask: '间答',
    job: '招聘',
    dev: '客户端测试'
}
Vue.filter('transfromTopicType', ({ tab, good, top }) => top ? '置顶' : good ? '精华' : tabsMapObj[tab])