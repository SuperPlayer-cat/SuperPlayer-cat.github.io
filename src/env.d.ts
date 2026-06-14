/// <reference types="astro/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<object, object, unknown>
  export default component
}

interface Window {
  __i18n: Record<string, Record<string, string>>
  __currentLang: string
}
