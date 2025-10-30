# vue2和vue3
## vue2
    是通过object.defineProperty进行监听数据的   使用setter和getter去劫持数据
    使用的是optionsApi   通过在options里面写data  methods  created 来描述组件
    vue2又能有一根元素
    生命周期
        beforeCreated
        created
        beforeMount
        mounted
        beforeUpdate
        update
        beforeDestroy
        destroy


## vue3
    是通过proxy 代理来劫持数据
    使用的是compositionApi 将模块代码放到统一的地方处理 不需要咱几多个options里面查找
    生命周期
        setup
        setup
        onBeforeAMount
        onMounted
        onBeforeUpdated
        onUpdated
        onBeforeUnMount
        UnMount



浏览器的渲染原理
解析html生成dom树
解析css生成cssom树
构建渲染树 将都没树和cssom树结合
布局 计算渲染树种的每个节点
绘制 将渲染树的内容绘制到屏幕上
合成与显示   将页面分层进行光栅处理  显示到屏幕


vue的组件传值
父子传值
    props/$emit
子父传值
    使用事件的形式
事件总线
    $emit/$on
    $emit发送
    $on接收
vuex/pinia（暂时不是永久）
    通过dispatch获取到数据
    然后通过getter进行读取
本地存储(看存贮到哪儿)
    通过缓存到本地
    本地获取数据
使用$attrs/$listeners
    $attrs是将未接收的属性传递给组件
    $listeners是所有事件监听器给组件
provide和inject
    祖先组件通过provide给子辈组件注入  然后通过inject获取
    provide: {
        name: '浪里行舟'
    }
    inject: ['name'],
通过ref获取组件信息 来找到对应方法或者属性
