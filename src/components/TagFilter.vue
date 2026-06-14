<template>
  <div class="tag-filter">
    <button
      class="tag-btn"
      :class="{ active: modelValue === '' }"
      @click="$emit('update:modelValue', '')"
    >
      {{ t("tag.all") }}
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-btn"
      :class="{ active: modelValue === tag }"
      @click="$emit('update:modelValue', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "../i18n/index"

const { t } = useI18n()

defineProps<{
  tags: string[]
  modelValue: string
}>()

defineEmits<{
  "update:modelValue": [value: string]
}>()
</script>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}

.tag-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  background: var(--bg-toolbar);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
  font-family: var(--font-main);
}

.tag-btn:hover {
  background: var(--bg-hover);
  border-color: var(--border-strong);
  transform: translateY(-1px);
}

.tag-btn.active {
  background: var(--bg-active);
  border-color: var(--primary);
  color: var(--primary);
}
</style>
