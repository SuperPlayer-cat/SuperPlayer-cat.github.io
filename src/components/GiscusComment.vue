<template>
  <div class="giscus-wrapper" v-if="repo">
    <div ref="giscusContainer" class="giscus"></div>
  </div>
  <div v-else class="giscus-placeholder">
    <p>💬 评论系统尚未配置</p>
    <p class="hint">配置 Giscus 后即可开启评论功能</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps<{
  repo: string
  repoId: string
  category: string
  categoryId: string
  mapping?: string
}>()

const giscusContainer = ref<HTMLElement | null>(null)
let observer: MutationObserver | null = null

const themes = {
  light: "https://giscus.app/themes/light.json",
  dark: "https://giscus.app/themes/dark_dimmed.json",
}

function getTheme(): string {
  const attr = document.documentElement.getAttribute("data-theme")
  return attr === "dark" ? themes.dark : themes.light
}

function loadGiscus() {
  if (!giscusContainer.value || !props.repo) return

  const el = giscusContainer.value
  el.innerHTML = ""

  const script = document.createElement("script")
  script.src = "https://giscus.app/client.js"
  script.setAttribute("data-repo", props.repo)
  script.setAttribute("data-repo-id", props.repoId)
  script.setAttribute("data-category", props.category)
  script.setAttribute("data-category-id", props.categoryId)
  script.setAttribute("data-mapping", props.mapping || "pathname")
  script.setAttribute("data-strict", "0")
  script.setAttribute("data-reactions-enabled", "1")
  script.setAttribute("data-emit-metadata", "0")
  script.setAttribute("data-input-position", "bottom")
  script.setAttribute("data-theme", getTheme())
  script.setAttribute("data-lang", "zh-CN")
  script.setAttribute("crossorigin", "anonymous")
  script.async = true

  el.appendChild(script)
}

function updateTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame"
  )
  if (iframe?.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: getTheme() } } },
      "https://giscus.app"
    )
  }
}

onMounted(() => {
  loadGiscus()

  observer = new MutationObserver(() => updateTheme())
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--border-light);
}

.giscus {
  min-height: 200px;
}

.giscus-placeholder {
  margin-top: 48px;
  padding: 32px;
  text-align: center;
  border: 2px dashed var(--border-light);
  border-radius: var(--radius-md);
  color: var(--text-muted);
}

.giscus-placeholder p {
  margin-bottom: 8px;
}

.hint {
  font-size: 0.85rem;
  color: var(--text-subtle);
}
</style>
