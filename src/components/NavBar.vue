<template>
  <nav>
    <div class="nav-container">
      <a href="/" class="logo-link">
        <TerminalLogo />
      </a>

      <div class="nav-actions">
        <div class="nav-links">
          <a href="/" :class="{ active: $props.active === 'home' }">{{ t("nav.home") }}</a>
          <a href="/blog" :class="{ active: $props.active === 'blog' }">{{ t("nav.blog") }}</a>
          <a href="/projects" :class="{ active: $props.active === 'projects' }">{{ t("nav.projects") }}</a>
          <a href="/about" :class="{ active: $props.active === 'about' }">{{ t("nav.about") }}</a>
        </div>

        <div class="nav-controls">
          <button class="search-btn" @click="$emit('search')" :aria-label="t('nav.search')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "../i18n/index"
import TerminalLogo from "./TerminalLogo.vue"
import LangToggle from "./LangToggle.vue"
import ThemeToggle from "./ThemeToggle.vue"

defineProps<{ active?: string }>()
defineEmits<{ search: [] }>()

const { t } = useI18n()
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-light);
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.nav-container {
  height: 64px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links {
  display: flex;
  gap: 18px;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.18s var(--ease-standard);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  background: var(--bg-toolbar);
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.search-btn:hover {
  background: var(--bg-hover);
  border-color: var(--border-strong);
  color: var(--primary);
}

@media (max-width: 768px) {
  .nav-container {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 12px;
    row-gap: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
    min-height: 64px;
  }

  .nav-actions {
    display: contents;
  }

  .logo-link {
    grid-column: 1;
    grid-row: 1;
  }

  .nav-controls {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
  }

  .nav-links {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
    justify-content: center;
    gap: 14px;
    overflow-x: auto;
    padding: 2px 0 4px;
    scrollbar-width: none;
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  }
}
</style>
