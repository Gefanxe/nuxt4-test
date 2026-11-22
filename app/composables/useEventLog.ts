export function useEventLog() {
  const logs = useState<string[]>('event-logs', () => [])
  const log = (msg: string) => {
    logs.value = [`${new Date().toLocaleTimeString()}  ${msg}`, ...logs.value].slice(0, 30)
  }
  return { logs, log }
}

/** 在页面内注册生命周期日志，方便观察 keep-alive 行为 */
export function useLifecycleLog(name: string) {
  const { log } = useEventLog()
  log(`[${name}] setup (组件被创建)`)
  onMounted(() => log(`[${name}] mounted`))
  onActivated(() => log(`[${name}] activated`))
  onDeactivated(() => log(`[${name}] deactivated`))
  onUnmounted(() => log(`[${name}] unmounted (组件被销毁)`))
}
