import {ReactNode} from "react";

export interface DataI {
    home_cards?: {},
    webs?: {},
}

export interface LayoutProps {
    children: ReactNode
}

export interface CardProps {
    title: string,
    description: string,
    img: string
}

export interface CardsProps {
    home_cards: CardProps[]
}

export interface DesignHeaderProps {
    pageTitle: string,
    pageDescription: string,
}

export interface DesignCardProps {
    title: string,
    description: string,
    imgUrl: string
}

export interface DesignPageProps {
    designData: {
        pageTitle: string,
        pageDescription: string,
        designs: DesignCardProps[]
    }
}
