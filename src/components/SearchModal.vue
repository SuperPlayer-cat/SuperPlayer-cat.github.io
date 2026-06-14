<template>
  <Teleport to="body">
    <div v-if="visible" class="search-overlay" @click.self="close">
      <div class="search-modal">
        <div class="search-input-wrap">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            :placeholder="t('search.placeholder')"
            class="search-input"
            @keydown.escape="close"
          />
          <kbd class="search-kbd">ESC</kbd>
        </div>

        <div v-if="query && results.length === 0" class="search-empty">
          {{ t("search.no_results") }}
        </div>

        <div v-if="results.length > 0" class="search-results">
          <a
            v-for="post in results"
            :key="post.id"
            :href="`/blog/${post.slug}`"
            class="search-result-item"
            @click="close"
          >
            <span class="search-result-title">{{ post.title }}</span>
            <span class="search-result-tags">
              <span v-for="tag in post.tags" :key="tag" class="search-result-tag">{{ tag }}</span>
            </span>
          </a>
        </div>

        <div v-if="!query" class="search-hint">
          {{ t("search.hint") }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue"
import { useI18n } from "../i18n/index"

const { t } = useI18n()

interface Post {
  id: string
  slug: string
  title: string
  tags: string[]
  description: string
  body: string
}

const props = defineProps<{ posts: Post[] }>()
const emit = defineEmits<{ close: [] }>()

const visible = ref(false)
const query = ref("")
const results = ref<Post[]>([])
const inputRef = ref<HTMLInputElement | null>(null)

function open() {
  visible.value = true
  nextTick(() => inputRef.value?.focus())
}

function close() {
  visible.value = false
  query.value = ""
  results.value = []
  emit("close")
}

function doSearch(q: string) {
  if (!q.trim()) {
    results.value = []
    return
  }
  const lower = q.toLowerCase()
  results.value = props.posts.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tags.some((t) => t.toLowerCase().includes(lower)) ||
      p.body.toLowerCase().includes(lower)
  )
}

watch(query, doSearch)

function onKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault()
    visible.value ? close() : open()
  }
}

onMounted(() => window.addEventListener("keydown", onKeydown))
onUnmounted(() => window.removeEventListener("keydown", onKeydown))

defineExpose({ open, close })
</script>

<style scoped>
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  padding-top: 15vh;
}

.search-modal {
  width: 100%;
  max-width: 560px;
  max-height: 70vh;
  margin: 0 20px;
  background: var(--bg-editor);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-hover);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.search-input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-light);
}

.search-icon {
  color: var(--text-subtle);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--text-main);
  font-size: 1rem;
  outline: none;
  font-family: var(--font-main);
}

.search-input::placeholder {
  color: var(--text-subtle);
}

.search-kbd {
  padding: 3px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--border-light);
  background: var(--bg-toolbar);
  color: var(--text-subtle);
  font-family: var(--font-mono);
  flex-shrink: 0;
}

.search-results {
  overflow-y: auto;
  padding: 8px;
}

.search-result-item {
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  transition: background 0.15s;
}

.search-result-item:hover {
  background: var(--bg-hover);
}

.search-result-title {
  display: block;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.search-result-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.search-result-tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  background: var(--bg-active);
  color: var(--primary);
  border-radius: 3px;
}

.search-empty,
.search-hint {
  padding: 32px 20px;
  text-align: center;
  color: var(--text-subtle);
  font-size: 0.95rem;
}
</style>
