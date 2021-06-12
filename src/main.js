// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import 'bootstrap'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
