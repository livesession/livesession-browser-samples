import { defineNuxtPlugin, useRuntimeConfig, useRouter, nextTick } from '#imports'

import ls from '@livesession/browser'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const router = useRouter()

    router.afterEach((to) => {
        nextTick(() => {
            if (!process.client) {
                return
            }

            ls.init(import.meta.env.VITE_LIVESESSION_TRACK_ID)
            ls.newPageView()
        })
    })
})