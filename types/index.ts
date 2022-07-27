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
            contact?: {
                title: string
                subtitle: string
            }
        }
    }
}