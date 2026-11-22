<script setup lang="ts">
const { logs } = useEventLog()
</script>

<template>
  <div class="card">
    <h3>生命周期日志</h3>
    <pre style="max-height:260px;overflow:auto;margin:0">{{ logs.join('\n') || '(空)' }}</pre>
  </div>
</template>
