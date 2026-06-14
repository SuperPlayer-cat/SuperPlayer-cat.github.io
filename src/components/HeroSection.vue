<template>
  <section id="intro" class="hero">
    <div class="hero-avatar">
      <div class="avatar-wrapper">
        <img
          src="/images/me.png"
          alt="Avatar"
          class="avatar-img"
          @error="onAvatarError"
        />
        <div class="avatar-glow"></div>
      </div>
    </div>
    <h1 class="hero-title gradient-text">{{ t("hero.greeting") }} <span>{{ t("hero.name") }}</span></h1>
    <p class="hero-desc">{{ t("hero.desc") }}</p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "../i18n/index"

const { t } = useI18n()

function onAvatarError(e: Event) {
  const img = e.target as HTMLImageElement
  img.style.display = "none"
}
</script>

<style scoped>
.hero {
  padding: 84px 0 44px;
  text-align: center;
  position: relative;
}

.hero-avatar {
  margin-bottom: 18px;
  opacity: 0;
  animation: heroFadeUp 620ms var(--ease-emphasis) 120ms forwards;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg-editor);
  position: relative;
  z-index: 2;
  background: var(--bg-hover);
}

.avatar-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--primary);
  filter: blur(25px);
  opacity: 0.4;
  z-index: 1;
  transform: scale(0.9);
  transition: opacity 0.3s;
}

.avatar-wrapper:hover .avatar-glow {
  opacity: 0.7;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  opacity: 0;
  animation: heroFadeUp 620ms var(--ease-emphasis) 210ms forwards;
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  animation: heroFadeUp 620ms var(--ease-emphasis) 300ms forwards;
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 56px 16px 44px;
  }
  .hero-title {
    font-size: 2rem;
    word-break: break-word;
  }
  .hero-desc {
    font-size: 1rem;
  }
  .avatar-img {
    width: 120px;
    height: 120px;
  }
}
</style>
