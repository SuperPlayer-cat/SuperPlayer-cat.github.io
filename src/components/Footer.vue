<template>
  <footer>
    <p>{{ t("footer.copyright") }}</p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "../i18n/index"

const { t } = useI18n()
</script>

<style scoped>
footer {
  text-align: center;
  padding: 30px;
  font-size: 0.9rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-light);
  background: var(--bg-sidebar);
}
</style>
