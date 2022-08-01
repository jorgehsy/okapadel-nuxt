import { Ref } from 'nuxt/dist/app/compat/capi';
import type { DefaultContent } from '~/types'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            SeoMetaData: (content: DefaultContent, currentRoute: string ) => {
                const config = useRuntimeConfig();
                const apiUrl = `${config.strapi.url}`;
                const metaData = content.data.attributes.seo
                const title = metaData?.metaTitle ?? content?.data?.attributes?.title.replace(/<\/?[^>]+(>|$)/g, "");
                const description = metaData?.metaDescription
                const image = metaData?.metaImage ? apiUrl + metaData?.metaImage?.data?.attributes?.url : ''
                const locale = content?.data?.attributes?.locale
                return {
                    title: title,
                    meta: [
                        { name: 'description', content: description },
                        { name: 'keywords', content: metaData?.keywords },
                        { name: 'robots', content: metaData?.metaRobots ?? 'index,follow,archive' },
                        { name: 'title', content: title },
                        { hid: 'description', name: 'description', content: description },
                        { property: 'og:site_name', content: title },
                        { hid: 'og:type', property: 'og:type', content: 'article' },
                        { hid: 'og:url', property: 'og:url', content: currentRoute },
                        { hid: 'og:title', property: 'og:title', content: title },
                        { hid: 'og:description', property: 'og:description', content: description },
                        { hid: 'og:image', property: 'og:image', content: image },
                        { hid: 'og:image:alt', property: 'og:image:alt', content: title },
                        { hid: 'og:image:secure_url', property: 'og:image', content: image },
                        { property: 'og:locale', 'content': locale },
                        { property: 'og:image:width', content: '1920' },
                        { property: 'og:image:height', content: '1080' },
                        { property: 'og:see_also', content: 'https://okatent.com/usos/tenis-padel/' },
                        //facebook
                        // { property: 'fb:app_id', content: '' },
                        // { property: 'fb:pages', content: '' },
                        //twitter
                        { name: 'twitter:site', content: image },
                        { name: 'twitter:card', content: image },
                        { hid: 'twitter:url', name: 'twitter:url', property: 'og:url', content: currentRoute },
                        { hid: 'twitter:title', name: 'twitter:title', content: title },
                        { hid: 'twitter:description', name: 'twitter:description', content: description },
                        { hid: 'twitter:image:src', name: 'twitter:image:src', content: image },
                        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: title },
                        { name: 'twitter:image:width', content: '1920' },
                        { name: 'twitter:image:height', content: '1080' },
                        { name: 'twitter:creator', content: '@okatent' },
                        // micro
                        { itemprop: 'name', 'content': title},
                        { itemprop: 'description', 'content': description},
                        // DC
                        { name: 'DCTERMS.title', 'xml:lang': locale, 'lang': locale, 'content': title },
                        { name: 'DCTERMS.description', 'xml:lang': locale, 'lang': locale, 'content': description },
                        { name: 'DCTERMS.abstract', 'content': description },
                        { name: 'DCTERMS.subject', 'content': metaData?.keywords },
                        { name: 'DCTERMS.language', 'content': locale },
                        { name: 'DCTERMS.identifier', 'content': metaData?.canonicalURL ?? currentRoute },
                        { name: 'DCTERMS.created', 'content': content?.data?.attributes?.publishedAt },
                        { name: 'DCTERMS.modified', 'content': content?.data?.attributes?.updatedAt },
                        { name: 'DCTERMS.format', 'content': "HTML" },
                        { name: 'DCTERMS.source', 'property': 'og:site_name', 'content': "Okapadel" },
                        { name: 'DCTERMS.Publisher', 'content': "Okapadel" },
                    ],
                    link: [
                        { rel: 'canonical', href: metaData?.canonicalURL ?? currentRoute },
                        { rel: 'image_src', href: image },
                    ],
                    viewport: metaData?.metaViewport,
                }
            }
        }
    }
})