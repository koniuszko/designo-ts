import styled from "styled-components";
import Image from "next/image";
import {ColorH3, DarkGrayParagraph} from "@/style/global";
import {DesignPageProps, DesignCardProps} from "@/interfaces/app_interfaces";
import useWindowWidth from "@/utils/useWindowWidth";

const SectionWrapper = styled.section`
  padding: 96px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    padding: 0;
    width: 1112px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

`

const CardWrapper = styled.div`
  width: 327px;
  height: 478px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #FDF3F0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-title {
    margin: 32px 0 16px;
  }

  .card-description {
    padding: 0 24px;
  }

  @media (min-width: 768px) {
    width: 689px;
    height: 310px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1440px) {
    width: 350px;
    height: 478px;
    flex-direction: column;
  }
`


const DesignCard = ({title, description, imgUrl}: DesignCardProps) => {

    return (
        <CardWrapper>
            <Image src={imgUrl} alt={`${title}-page-screenshot`} width={useWindowWidth() > 1440 ? 350 : 327}
                   height={320}/>
            <div className="card-wrapper">
                <ColorH3 className="card-title">{title}</ColorH3>
                <DarkGrayParagraph className="card-description">{description}</DarkGrayParagraph>
            </div>
        </CardWrapper>
    )
}

export default function DesignGallery({designData}: DesignPageProps) {
    return (
        <SectionWrapper>
            {designData?.designs.map(card => <DesignCard key={card.title} {...card}/>)}
        </SectionWrapper>
    )
}