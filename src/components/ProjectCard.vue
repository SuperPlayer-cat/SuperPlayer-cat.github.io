<template>
  <article class="project-card">
    <div v-if="img" class="project-thumb-wrap">
      <img :src="img" :alt="title" class="project-thumb" />
    </div>
    <div class="project-info">
      <div v-if="tags && tags.length" class="project-tags">
        <span v-for="tag in tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="links && links.length" class="project-actions">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  img?: string
  tags?: string[]
  links?: { href: string; label: string }[]
}>()
</script>

<style scoped>
.project-card {
  background: var(--bg-editor);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(240px, 36%) minmax(0, 1fr);
  transition: transform 0.48s var(--ease-standard), box-shadow 0.48s var(--ease-standard), border-color 0.18s var(--ease-standard);
  transform: translateZ(0);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
  border-color: var(--primary);
}

.project-thumb-wrap {
  overflow: hidden;
  background: var(--bg-panel);
  border-right: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
}

.project-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  padding: 14px;
  transition: transform 0.48s var(--ease-standard);
}

.project-card:hover .project-thumb {
  transform: scale(1.02);
}

.project-info {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: var(--text-main);
}

.project-info p {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  overflow-wrap: anywhere;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.project-tag {
  font-size: 0.75rem;
  padding: 3px 10px;
  background: var(--bg-active);
  color: var(--primary);
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid var(--border-light);
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.project-link {
  min-height: 36px;
  padding: 8px 13px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.86rem;
  color: var(--primary);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--bg-panel);
  transition: transform 0.18s, background-color 0.18s, border-color 0.18s;
}

.project-link:hover {
  background: var(--bg-active);
  border-color: var(--primary);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-thumb-wrap {
    border-right: none;
    border-bottom: 1px solid var(--border-light);
    min-height: 190px;
  }
}
</style>
