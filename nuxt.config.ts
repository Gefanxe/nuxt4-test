export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    // 全域 keepalive：只缓存组件 name 在 include 内的页面
    keepalive: { include: ['CachedPage'], max: 5 },
  },
})
