<template>
  <div class="card">
    <h2>说明</h2>
    <ol>
      <li><b>Cached</b>：name 在 include 中，切换后状态保留（计数、输入框）。</li>
      <li><b>Not Cached</b>：不在 include，每次进入都会重建，状态重置。</li>
      <li><b>Meta Cached</b>：通过 <code>definePageMeta({ keepalive: true })</code> 开启。</li>
    </ol>
    <p>在页面里改动状态 → 切换到别页 → 再回来，对比差异，并观察下方日志。</p>
  </div>
</template>
