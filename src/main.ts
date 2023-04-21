import { createApp } from 'vue'
import App from './App.vue'
import { SetupRoute } from './routes'

export const start = () => {
    const app = createApp(App)
    SetupRoute(app)
    app.mount('#app')
}
start()