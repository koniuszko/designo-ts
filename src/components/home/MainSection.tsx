import styled from 'styled-components'
import {GrayH3, GrayParagraph} from "@/style/global";
import Image from "next/image";
import {CardProps, CardsProps} from "@/interfaces/app_interfaces";

export const MainWrapper = styled.main`
  margin-bottom: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`

export const CardWrapper = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-image {
    margin-bottom: 48px;
    background-image: url('/assets/home/desktop/bg-pattern-hero-home.svg');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .card-title {
    margin-bottom: 32px;
  }
`

const Card = ({title, description, img}: CardProps) => {
    return <CardWrapper>
        <Image className="card-image" src={img} alt={`${title}-icon`} width={202} height={202}/>
        <GrayH3 className="card-title">{title}</GrayH3>
        <GrayParagraph className="card-description">{description}</GrayParagraph>
    </CardWrapper>
}

const MainSection = ({home_cards}: CardsProps) => {
    return (
        <MainWrapper>
            {home_cards?.map((card: CardProps) => <Card key={card.title} {...card}/>)}
        </MainWrapper>
    )
}
export default MainSection;

