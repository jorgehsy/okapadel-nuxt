import type { MetaDataType } from '~/types'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            SeoMetaData: (data: MetaDataType, currentRoute: string ) => {
                return {
                    title: data?.metaTitle,
                    meta: [
                        { name: 'description', content: data?.metaDescription },
                        { name: 'keywords', content: data?.keywords },
                        { name: 'robots', content: data?.metaRobots ?? 'index,follow' },
                        { name: 'title', content: data?.metaTitle },
                        { hid: 'description', name: 'description', content: data?.metaDescription },
                        { property: 'og:site_name', content: data?.metaTitle },
                        { hid: 'og:type', property: 'og:type', content: 'website' },
                        { hid: 'og:url', property: 'og:url', content: currentRoute },
                        { hid: 'og:title', property: 'og:title', content: data?.metaTitle },
                        { hid: 'og:description', property: 'og:description', content: data?.metaDescription },
                        { hid: 'og:image', property: 'og:image', content: data?.metaImage },
                        { property: 'og:image:width', content: '740' },
                        { property: 'og:image:height', content: '300' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { hid: 'twitter:url', name: 'twitter:url', content: currentRoute },
                        { hid: 'twitter:title', name: 'twitter:title', content: data?.metaTitle },
                        { hid: 'twitter:description', name: 'twitter:description', content: data?.metaDescription },
                        { hid: 'twitter:image', name: 'twitter:image', content: data?.metaImage }
                    ],
                    link: [
                        { rel: 'canonical', href: data?.canonicalURL ?? currentRoute },
                    ],
                    viewport: data?.metaViewport,
                }
            }
        }
    }
})