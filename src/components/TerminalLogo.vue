<template>
  <div class="logo-terminal">
    <span class="terminal-user">xiaoyugan</span>
    <span class="terminal-at">@</span>
    <span class="terminal-path">blog</span>
    <span class="terminal-symbol">:~$</span>
    <span class="terminal-cursor"></span>
  </div>
</template>

<style scoped>
.logo-terminal {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background: var(--bg-terminal);
  color: var(--text-main);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  box-shadow: inset 0 0 0 1px var(--primary-glow);
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.terminal-user {
  color: var(--terminal-user);
}

.terminal-at {
  color: var(--text-muted);
}

.terminal-path {
  color: var(--terminal-path);
}

.terminal-symbol {
  color: var(--text-main);
}

.terminal-cursor {
  width: 6px;
  height: 12px;
  margin-left: 3px;
  background: var(--primary);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
