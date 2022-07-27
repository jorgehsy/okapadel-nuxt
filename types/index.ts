export type ProjectType = {
    image: string
    imageAlt: string
    title: string
    subtitle: string
}

export type HomepageType = {
    data: {
        attributes: {
            title: string
            subtitle: string
        }
    }
}