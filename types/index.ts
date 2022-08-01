export type ProjectType = {
    image: string
    imageAlt: string
    title: string
    subtitle: string
}

export type MetaDataType = {
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string
    structuredData?: string
    metaViewport?: string
    canonicalURL?: string
    metaImage?: ImageType
    DC?: string
}

export type DefaultContent = {
    data: {
        attributes: {
            publishedAt: Date
            updatedAt: Date
            title: string
            subtitle: string
            locale: string
            firstSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            secondSection: {
                leftColumn?: string
                rightColumn?: string
            }
            thirdSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            fourthSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            fifthSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            sixthSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            seventhSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            eighthSection?: {
                leftColumn?: string
                rightColumn?: string
            }
            contact?: {
                title: string
                subtitle: string
            },
            seo?: MetaDataType
        }
    }
}

export type ImageType = {
    data?: {
        id?: number,
        attributes?: {
            name?: string,
            alternativeText?: string,
            caption?: string,
            width?: number,
            height?: number,
            formats?: {
                thumbnail?: {
                    name?: string,
                    hash?: string,
                    ext?: string,
                    mime?: string,
                    path?: string,
                    width?: number,
                    height?: number,
                    size?: number,
                    url?: string
                },
                large?: {
                    name?: string,
                    hash?: string,
                    ext?: string,
                    mime?: string,
                    path?: string,
                    width?: number,
                    height?: number,
                    size?: number,
                    url?: string
                },
                medium?: {
                    name?: string,
                    hash?: string,
                    ext?: string,
                    mime?: string,
                    path?: string,
                    width?: number,
                    height?: number,
                    size?: number,
                    url?: string
                },
                small?: {
                    name?: string,
                    hash?: string,
                    ext?: string,
                    mime?: string,
                    path?: string,
                    width?: number,
                    height?: number,
                    size?: number,
                    url?: string
                },
            },
            hash?: string,
            ext?: string,
            mime?: string,
            size?: number,
            url?: string,
            previewUrl?: string,
            provider?: string,
            provider_metadata?: string,
            createdAt?: Date,
            updatedAt?: Date
        }
    }
}