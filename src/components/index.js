// import Vue from 'vue'

// 注册公共组件
// import SonDOme from '../components/SonDome.vue' 

// 组件的全局注册

import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /.+\.vue$/
)

// requireComponent.keys() 对文件名进行循环

requireComponent.keys().forEach(fileName => {
  // 获取组件配置 导入组件
  const componentConfig = requireComponent(fileName)

  // 全局注册组件
  Vue.component(
    // 使用组件内的 name 属性当做名字
    componentConfig.default.name,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})