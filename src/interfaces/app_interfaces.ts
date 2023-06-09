import {ReactNode} from "react";

export interface DataI {
    locations?: object;
    home_cards?: object,
    webs?: object,
    apps?: object,
    graphics?: object,
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

export interface LocationsCard {
    country: string,
    img: string
}

export interface LocationsComponentProps {
    country: string,
    officeName: string,
    street: string,
    city: string,
    phone: string,
    email: string
}

export interface FormValues {
    name: string,
    email: string,
    phone: string,
    message: string
}

export interface Msg {
    msg: string
}

export interface LocationsProps {
    locationsData: LocationCardProps[]
}

export interface LocationCardProps {
    country: string,
    officeName: string,
    street: string,
    city: string,
    lat: number,
    lng: number,
    phone: string,
    email: string
}