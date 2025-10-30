<template>
  <button @click="printAllImages" class="print-button">打印所有图片</button>
</template>

<script setup>
import printJS from 'print-js'

// 要打印的图片列表
const imageList = [
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
]

// 打印所有图片的方法
const printAllImages = async () => {
  // 循环打印每张图片
  for (const imageUrl of imageList) {
    // 使用Print.js打印图片
    printJS({
      printable: imageUrl, // 图片URL
      type: 'image', // 类型为图片
      header: `图片打印`, // 可选的页眉
      imageStyle: 'width:100%;max-width:800px;margin:0 auto;', // 图片样式
    })

    // 等待当前打印任务完成后再进行下一个
    await new Promise((resolve) => {
      setTimeout(resolve, 1000) // 延迟确保打印对话框处理完成
    })
  }
}
</script>

<style scoped>
.print-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.print-button:hover {
  background-color: #359e75;
}
</style>
