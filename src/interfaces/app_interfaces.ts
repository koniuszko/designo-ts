export interface LayoutProps {
    children: JSX.Element
}

export interface CardProps {
    title: string,
    description: string,
    img: string
}

export interface CardsProps {
    home_cards?: CardProps[]
}