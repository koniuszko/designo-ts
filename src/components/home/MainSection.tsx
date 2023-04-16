import styled from 'styled-components'
import {DarkGrayParagraph, GrayH3} from "@/style/global";
import Image from "next/image";
import {CardProps, CardsProps} from "@/interfaces/app_interfaces";

export const MainWrapper = styled.main`
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

  @media (min-width: 768px) {
    width: 690px;
    flex-direction: row;
    align-items: center;
    gap: 48px;

    .card-image {
      margin-bottom: 0;
    }

    .card-title {
      margin-bottom: 16px;
      text-align: left;
    }

    .card-description {
      text-align: left;
    }
  }
`

const Card = ({title, description, img}: CardProps) => {
    return <CardWrapper>
        <Image className="card-image" src={img} alt={`${title}-icon`} width={202} height={202}/>
        <div className="card-container">
            <GrayH3 className="card-title">{title}</GrayH3>
            <DarkGrayParagraph className="card-description">{description}</DarkGrayParagraph>
        </div>
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

