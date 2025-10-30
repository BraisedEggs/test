<script setup>
import { ref, onMounted } from 'vue'

const allData = ref([]) // 全部数据
const showList = ref([]) // 当前显示的数据

const currentPage = ref(1)
const pageSize = 15
const loading = ref(false)
const noMore = ref(false)

onMounted(() => {
  // 模拟一次性请求所有数据
  allData.value = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    name: `第 ${i + 1} 条数据`,
  }))
  loadMore() // 初始加载第一页
})

const loadMore = () => {
  if (loading.value || noMore.value) return
  loading.value = true

  setTimeout(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = currentPage.value * pageSize
    const next = allData.value.slice(start, end)

    if (next.length > 0) {
      showList.value.push(...next)
      currentPage.value++
    } else {
      noMore.value = true
    }

    loading.value = false
  }, 500) // 模拟网络延迟
}

const handleScroll = (e) => {
  const el = e.target
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
    loadMore()
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="scroll-box" @scroll="handleScroll">
      <ul>
        <li v-for="item in showList" :key="item.id">{{ item.name }}</li>
      </ul>

      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多数据了</p>
    </div>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.scroll-box {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
