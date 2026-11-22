<template>
  <div class="wrap">
    <h1>Nuxt 4 Keep-Alive 测试</h1>
    <nav>
      <NuxtLink to="/">首页</NuxtLink>
      <NuxtLink to="/cached">Cached (keep-alive)</NuxtLink>
      <NuxtLink to="/not-cached">Not Cached</NuxtLink>
      <NuxtLink to="/meta-cached">Meta Cached</NuxtLink>
    </nav>

    <!-- keepalive 在 nuxt.config.ts 的 app.keepalive 设置（include 以组件 name 比对）；
      /meta-cached 用 definePageMeta({ keepalive: true }) 额外开启。
      注意：若在 <NuxtPage> 上直接传 keepalive prop，会覆盖 page meta。 -->
    <NuxtPage />

    <EventLog />
  </div>
</template>

<style>
body { font-family: system-ui, sans-serif; margin: 0; background: #f6f7f9; }
.wrap { max-width: 720px; margin: 0 auto; padding: 24px; }
nav { display: flex; gap: 12px; margin-bottom: 20px; }
nav a { padding: 6px 12px; border-radius: 6px; background: #fff; border: 1px solid #ddd; text-decoration: none; color: #333; }
nav a.router-link-exact-active { background: #00dc82; color: #000; border-color: #00dc82; }
.card { background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 16px; }
button { padding: 6px 12px; cursor: pointer; }
</style>
