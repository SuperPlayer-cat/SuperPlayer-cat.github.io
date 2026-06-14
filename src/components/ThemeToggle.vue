<template>
  <button
    class="theme-toggle"
    :aria-label="t('theme.' + (isDark ? 'dark' : 'light'))"
    @click="toggleTheme"
  >
    <span class="icon sun-icon">☀️</span>
    <span class="icon moon-icon">🌙</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useI18n } from "../i18n/index"

const { t } = useI18n()
const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}

onMounted(() => {
  const saved = localStorage.getItem("theme")
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true
    document.documentElement.setAttribute("data-theme", "dark")
  }
})
</script>

<style scoped>
.theme-toggle {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  background: var(--bg-toolbar);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background-color 0.2s, border-color 0.2s;
}

.theme-toggle:hover {
  background: var(--bg-hover);
  border-color: var(--border-strong);
}

.icon {
  position: absolute;
  font-size: 1.1rem;
  line-height: 1;
  transition: transform 0.42s var(--ease-emphasis), opacity 0.32s var(--ease-standard);
}

.sun-icon {
  transform: translateY(0) rotate(0);
  opacity: 1;
}

.moon-icon {
  transform: translateY(20px) rotate(90deg);
  opacity: 0;
}

[data-theme="dark"] .sun-icon {
  transform: translateY(-20px) rotate(-90deg);
  opacity: 0;
}

[data-theme="dark"] .moon-icon {
  transform: translateY(0) rotate(0);
  opacity: 1;
}
</style>
