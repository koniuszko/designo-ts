import styled from 'styled-components'
import {WhiteButton, WhiteH1, WhiteParagraph} from "@/style/global";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = styled.section`
  background-color: #E7816B;
  background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
  background-size: 600%;
  background-position: -40% 0;
  width: 100%;
  height: 845px;
  overflow: hidden;
  position: relative;
  padding: 80px 24px 0;

  .hero-description {
    margin: 24px 0;
  }

  .hero-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
  }

  .hero-image {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 40%);
  }
`

const Hero = () => {
    return (
        <HeroSection>
            <WhiteH1 className="hero-title">
                Award-winning custom designs and digital branding solutions
            </WhiteH1>
            <WhiteParagraph className="hero-description">
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app
                design, and engaging brand experiences. Find out more about our services.
            </WhiteParagraph>
            <Link href={'/about'} className='hero-button'>
                <WhiteButton>
                    learn more
                </WhiteButton>
            </Link>
            <Image className="hero-image" src={'/assets/home/desktop/image-hero-phone.png'} alt={'phone-image'}
                   width="624" height="913"/>
        </HeroSection>
    )
}
export default Hero;