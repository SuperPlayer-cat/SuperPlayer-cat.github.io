<template>
  <div class="skills-grid">
    <div v-for="group in groups" :key="group.category" class="skill-category">
      <h3>{{ group.category }}</h3>
      <div class="skill-list">
        <div v-for="skill in group.items" :key="skill" class="skill-badge">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  groups: { category: string; items: string[] }[]
}>()
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 24px;
}

.skill-category h3 {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: var(--text-main);
  border-left: 3px solid var(--primary);
  padding-left: 12px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-badge {
  padding: 8px 16px;
  background: var(--bg-editor);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: transform 0.18s, color 0.18s, border-color 0.18s, background-color 0.18s;
}

.skill-badge:hover {
  background: var(--bg-active);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-1px);
}
</style>
