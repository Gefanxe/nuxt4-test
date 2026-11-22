<script setup lang="ts">
defineOptions({ name: 'CachedPage' })

useLifecycleLog('Cached')
</script>

<template>
  <div>
    <h2>Cached 页面（keep-alive 生效）</h2>
    <StateDemo />
  </div>
</template>
