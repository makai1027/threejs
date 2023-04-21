import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import { ExampleCard } from '@/config/index'
const VueModules = import.meta.glob('/src/views/**/*.vue')
const TsxModules = import.meta.glob('/src/views/**/*.tsx')
const modules = {
  ...VueModules,
  ...TsxModules
}

NProgress.configure({ showSpinner: false })
const initRouteList = () => {
    return ExampleCard.map((el) => {
        return {
            name: el.name,
            meta: {name: el.name},
            path: el.path,
            component: modules[`/src/views${el.path}/index.vue`] || modules[`@view${el.path}/index.tsx`]
        }
    })
}
console.log(initRouteList())

const Route = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: '首页',
        meta: { title: '首页', affix: true },
        component: () => import('@/components/blank.vue')
    },
    ...initRouteList()
    ],
    // 存储滚动高度
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    }
})

Route.beforeEach((from, to, next) => {
    NProgress.start()
    next()
})

Route.afterEach((from, to) => {
    NProgress.done()
})

export function SetupRoute(app: App<Element>) {
    app.use(Route)
}

export default Route
