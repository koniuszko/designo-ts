import {ReactNode} from "react";
import {string} from "prop-types";

export interface DataI {
    home_cards?: {},
    webs?: {},
    apps?: {},
    graphics?: {},
}

export interface NavProps {
    disabledLink: string
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
