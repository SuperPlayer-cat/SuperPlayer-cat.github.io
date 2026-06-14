<template>
  <div class="timeline">
    <div v-for="(item, i) in items" :key="i" class="timeline-item">
      <div class="timeline-dot"></div>
      <span class="timeline-date">{{ item.date }}</span>
      <div class="timeline-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { date: string; title: string; desc: string }[]
}>()
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-strong);
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
}

.timeline-dot {
  position: absolute;
  left: -35px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: var(--bg-editor);
  border: 2px solid var(--primary);
  border-radius: 50%;
  z-index: 1;
}

.timeline-date {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 6px;
  display: block;
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--text-main);
}

.timeline-content p {
  font-size: 0.95rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 24px;
  }
  .timeline-dot {
    left: -28px;
  }
}
</style>
