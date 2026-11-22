<script setup lang="ts">
defineOptions({ name: 'NotCachedPage' })

useLifecycleLog('NotCached')
</script>

<template>
  <div>
    <h2>Not Cached 页面（每次重建）</h2>
    <StateDemo />
  </div>
</template>
