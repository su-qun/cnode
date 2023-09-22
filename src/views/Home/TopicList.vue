<template>
  <div v-loading="show">
    <LayoutContent>
      <template #head>
        <div class="tabs">
          <router-link
            :class="[
              'table-item',
              {
                'router-link-active':
                  tab.value === 'all' && $route.path === '/',
              },
            ]"
            v-for="tab in tabs"
            :key="tab.id"
            :to="{ path: '/' + tab.value }"
            >{{ tab.lable }}</router-link
          >
        </div>
      </template>
      <div>
        <template v-if="lists.length > 0">
          <ListItem v-bind="list" v-for="list in lists" :key="list.id">
          </ListItem>
        </template>

        <el-empty v-else description="暂无文本数据"></el-empty>

        <el-pagination
          v-if="lists.length > 0"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-sizes="[20, 40, 60]"
          :page-size.sync="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </LayoutContent>

    <!-- <el-skeleton :rows="12" animated v-if="show" /> -->
  </div>
</template>

<script>
import { getList } from "../../../../conode/src/api/api";
export default {
  data() {
    return {
      lists: [],
      show: true,
      // 分页参数
      page: 1,
      limit: 40,
      tabs: [
        {
          id: "48e9ve",
          lable: "全部",
          value: "all",
          total: 139,
        },
        {
          id: "48e9rve",
          lable: "精华",
          value: "good",
          total: 139,
        },
        {
          id: "48efe9ve",
          lable: "分享",
          value: "share",
          total: 139,
        },
        {
          id: "48wefe9ve",
          lable: "问答",
          value: "ask",
          total: 139,
        },
        {
          id: "48efa9ve",
          lable: "招聘",
          value: "job",
          total: 139,
        },
        {
          id: "48e9kukve",
          lable: "客户端测试",
          value: "dev",
          total: 139,
        },
      ],
      tab: "all",
    };
  },
  computed: {
    total() {
      return this.tabs.find((item) => item.value === this.tab).total;
    },
  },

  watch: {
    "$route.params.type": {
      handler(val) {
        const type = val || "all";
        this.tab = type;
        this.page = 1;
        this.limit = 40;
        this.getList();
      },
      immediate: true,
    },
  },
  methods: {
    async getList() {
      const { page, limit, tab } = this;
      const params = {
        tab,
        page,
        limit,
      };
      this.show = true;
      const { data } = await getList(params);
      this.lists = data;
      // console.log(data);
      this.show = false;
    },
    handleSizeChange() {
      // console.log(this.limit);
      this.page = 1;
      this.getList();
    },
    handleCurrentChange() {
      // console.log(this.page);
      this.getList();
    },
  },
};
</script>

<style lang='less' scoped>
 .tabs {
    display: flex;
    .table-item{
        padding: 5px 10px;
        border-radius: 4px;
        color: #444;
        &.router-link-active {
            background-color: #80bd04;
            color: #fff;
        }
    }

  }
</style>