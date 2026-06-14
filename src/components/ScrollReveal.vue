<template>
  <div class="reveal" ref="el">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reducedMotion || typeof IntersectionObserver === "undefined") {
    el.value.classList.add("is-visible")
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  )

  observer.observe(el.value)
})
</script>
