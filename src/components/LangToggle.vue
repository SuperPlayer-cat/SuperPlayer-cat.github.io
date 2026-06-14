<template>
  <button class="lang-toggle" @click="toggleLang">
    {{ currentLang === "zh" ? "English" : "中文" }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from "../i18n/index"

const { currentLang, toggleLang } = useI18n()
</script>

<style scoped>
.lang-toggle {
  background: var(--bg-toolbar);
  border: 1px solid var(--border-light);
  color: var(--text-main);
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}

.lang-toggle:hover {
  background: var(--bg-hover);
  border-color: var(--border-strong);
  color: var(--primary);
}
</style>
