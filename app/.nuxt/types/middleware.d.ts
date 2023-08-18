import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}