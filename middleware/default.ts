export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
    if (to.path === '/') {
        return navigateTo(`${config.DEFAULT_LANGUAGE}`)
    }
})