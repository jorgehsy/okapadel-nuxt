export type ProjectType = {
    image: string
    imageAlt: string
    title: string
    subtitle: string
}

export type DefaultContent = {
    data: {
        attributes: {
            title: string
            subtitle: string
            firstSection?: {
                leftColumn?: string
                rightColumn?: string
              }
            secondSection:{
                leftColumn?: string
                rightColumn?: string
            }
            thirdSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            fourthSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            fifthSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            sixthSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            seventhSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            eighthSection?:{
                leftColumn?: string
                rightColumn?: string
            }
            contact?: {
                title: string
                subtitle: string
            },
            seo?: {
                metaTitle?: string
                metaDescription?: string
                keywords?: string
                metaRobots?: string
                structuredData?: string
                metaViewport?: string
                canonicalURL?: string
                DC?: string
            }
        }
    }
}