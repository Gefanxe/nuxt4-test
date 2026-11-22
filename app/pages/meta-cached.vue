<script setup lang="ts">
defineOptions({ name: 'MetaCachedPage' })
definePageMeta({ keepalive: true })
useLifecycleLog('MetaCached')
</script>

<template>
  <div>
    <h2>Meta Cached 页面（definePageMeta keepalive）</h2>
    <StateDemo />
  </div>
</template>
