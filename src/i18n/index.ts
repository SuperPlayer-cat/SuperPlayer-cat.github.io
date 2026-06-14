import zh from "./zh"
import en from "./en"
import { ref } from "vue"

const messages: Record<string, Record<string, string>> = { zh, en }
const currentLang = ref<"zh" | "en">("zh")

export function useI18n() {
  function t(key: string): string {
    return messages[currentLang.value]?.[key] || key
  }

  function setLang(lang: "zh" | "en") {
    currentLang.value = lang
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("lang", lang)
    }
  }

  function toggleLang() {
    setLang(currentLang.value === "zh" ? "en" : "zh")
  }

  return { t, currentLang, setLang, toggleLang }
}

export { messages, currentLang }
