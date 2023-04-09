import styled from 'styled-components'
import {GrayH3, GrayParagraph, WhiteButton, WhiteH1, WhiteParagraph} from "@/style/global";
import Image from "next/image";
import Link from "next/link";
import {CardProps} from "@/interfaces/app_interfaces";

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

const data = [
    {
        title: "PASSIONATE",
        description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
        img: "/assets/home/desktop/illustration-passionate.svg"
    },
    {
        title: "RESOURCEFUL",
        description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
        img: "/assets/home/desktop/illustration-resourceful.svg"
    },
    {
        title: "FRIENDLY",
        description: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
        img: "/assets/home/desktop/illustration-friendly.svg"
    }
]

const Card = ({title, description, img}: CardProps) => {
    return <CardWrapper>
        <Image className="card-image" src={img} alt={`${title}-icon`} width={202} height={202}/>
        <GrayH3 className="card-title">{title}</GrayH3>
        <GrayParagraph className="card-description">{description}</GrayParagraph>
    </CardWrapper>
}

const MainSection = () => {
    return (
        <MainWrapper>
            {data.map(item => <Card key={item.title} {...item}/>)}
        </MainWrapper>
    )
}
export default MainSection;