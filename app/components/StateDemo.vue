<script setup lang="ts">
const count = ref(0)
const text = ref('')
</script>

<template>
  <div class="card">
    <p>计数器：<strong>{{ count }}</strong> <button @click="count++">+1</button></p>
    <p><input v-model="text" placeholder="输入一些文字后切换页面再回来" /></p>
  </div>
</template>
