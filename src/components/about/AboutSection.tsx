import styled from "styled-components";
import {ColorH2, DarkGrayParagraph, WhiteH2, WhiteParagraph} from "@/style/global";
import LocationNav from "@/components/LocationNav";

const HeroWrapper = styled.section`
  .about-image {
    height: 320px;
    background-image: url('/assets/about/mobile/image-about-hero.jpg');
  }

  .about-main {
    padding: 0 24px;
    height: 395px;
    background-color: #E7816B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-image: url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg');
    background-size: 300%;
    background-repeat: no-repeat;
    background-position: 35% 15%;
  }

  @media (min-width: 768px) {
    width: 689px;
    margin: 0 auto 120px;
    border-radius: 15px;
    overflow: hidden;

    .about-image {
      background-image: url('/assets/about/tablet/image-about-hero.jpg');
    }

    .about-main {
      padding: 0 60px;
      height: 312px;
      background-position: 110% 25%;
    }
  }
`

const AboutWrapper = styled.section`
  .about-image {
    height: 320px;
  }

  .world-class {
    background-image: url('/assets/about/mobile/image-world-class-talent.jpg');
  }

  .real-deal {
    background-image: url('/assets/about/mobile/image-real-deal.jpg');
  }

  .about-description {
    padding: 80px 24px;
    background-color: #FDF3F0;
    background-image: url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg');
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: 65% -10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: 768px) {
    width: 689px;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;

    .world-class {
      background-image: url('/assets/about/tablet/image-world-class-talent.jpg');
    }

    .real-deal {
      background-image: url('/assets/about/tablet/image-real-deal.jpg');
    }

    .about-description {
      padding: 68px 58px;
      background-position: 80% 12%;
    }
  }
`


export default function AboutSection() {
    return (
        <>
            <HeroWrapper>
                <div className="about-image"></div>
                <div className="about-main">
                    <WhiteH2>About us</WhiteH2>
                    <WhiteParagraph>
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve
                        partnered with many startups, corporations, and nonprofits alike to craft designs that make real
                        impact. We’re always looking forward to creating brands, products, and digital experiences that
                        connect with our clients’ audiences.
                    </WhiteParagraph>
                </div>
            </HeroWrapper>
            <AboutWrapper>
                <div className="about-image world-class"></div>
                <div className="about-description">
                    <ColorH2>World-class talent</ColorH2>
                    <DarkGrayParagraph>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully
                        crafted from concept to launch, ensuring success in its given market. We are constantly updating
                        our skills in a myriad of platforms.
                    </DarkGrayParagraph>
                    <DarkGrayParagraph>
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning
                        are just as important. We give great importance to craftsmanship, service, and prompt delivery.
                        Clients have always been impressed with our high-quality outcomes that encapsulates their
                        brand’s story and mission.
                    </DarkGrayParagraph>
                </div>
            </AboutWrapper>
            <LocationNav/>
            <AboutWrapper>
                <div className="about-image real-deal"></div>
                <div className="about-description">
                    <ColorH2>The real deal</ColorH2>
                    <DarkGrayParagraph>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our
                        own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh
                        perspective to every opportunity. We make design and technology more accessible and give you
                        tools to measure success.
                    </DarkGrayParagraph>
                    <DarkGrayParagraph>
                        We are visual storytellers in appealing and captivating ways. By combining business and
                        marketing strategies, we inspire audiences to take action and drive real results.
                    </DarkGrayParagraph>
                </div>
            </AboutWrapper>
        </>


    )
}