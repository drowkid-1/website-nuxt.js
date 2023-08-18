// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../node_modules/.pnpm/@pinia+nuxt@0.4.11_typescript@5.1.3_vue@3.3.4/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxt+content@2.7.0/node_modules/@nuxt/content/dist/runtime/plugins/documentDriven").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../../node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0_eslint@8.43.0_sass@1.63.4_typescript@5.1.3_vue-tsc@1.8.1/node_modules/nuxt/dist/app/plugins/payload.client").default> &
  InjectionType<typeof import("../../../plugins/awesome").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }