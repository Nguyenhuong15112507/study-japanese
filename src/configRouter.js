import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default (/* { ssrContext } */) => {
  const pinia = createPinia()

  // router
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
  pinia.use(piniaPluginPersistedstate)

  return pinia
}