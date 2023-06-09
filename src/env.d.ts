/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare type Recordable<T = any> = Record<string, T>
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;