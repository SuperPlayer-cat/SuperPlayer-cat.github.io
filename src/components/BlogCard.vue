<template>
  <article class="blog-card" ref="cardRef">
    <div class="blog-card-content">
      <div v-if="tags && tags.length" class="blog-card-tags">
        <span v-for="tag in tags" :key="tag" class="blog-card-tag">{{ tag }}</span>
      </div>
      <h3 class="blog-card-title">
        <a :href="href">{{ title }}</a>
      </h3>
      <p v-if="description" class="blog-card-desc">{{ description }}</p>
      <div class="blog-card-meta">
        <time v-if="date" :datetime="date" class="blog-card-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {{ date }}
        </time>
        <a :href="href" class="blog-card-readmore">
          {{ t("blog.read_more") }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "../i18n/index"

const { t } = useI18n()

defineProps<{
  title: string
  description?: string
  date?: string
  tags?: string[]
  href: string
}>()

const cardRef = ref<HTMLElement | null>(null)
</script>

<style scoped>
.blog-card {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: transform 0.48s var(--ease-standard), box-shadow 0.48s var(--ease-standard), border-color 0.18s var(--ease-standard);
  transform: translateZ(0);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
  border-color: var(--primary);
}

.blog-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.blog-card-tag {
  font-size: 0.75rem;
  padding: 3px 10px;
  background: var(--bg-active);
  color: var(--primary);
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid var(--border-light);
}

.blog-card-title {
  font-size: 1.25rem;
  margin-bottom: 8px;
  line-height: 1.4;
}

.blog-card-title a {
  color: var(--text-main);
  transition: color 0.2s;
}

.blog-card-title a:hover {
  color: var(--primary);
}

.blog-card-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  overflow-wrap: anywhere;
  flex: 1;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.blog-card-date {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-subtle);
}

.blog-card-readmore {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--primary);
  transition: gap 0.2s;
}

.blog-card-readmore:hover {
  gap: 10px;
}
</style>
