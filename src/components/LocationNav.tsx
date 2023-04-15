import styled from "styled-components";
import {LocationsCard} from "@/interfaces/app_interfaces";
import {ColorButton, GrayH3} from "@/style/global";
import Image from "next/image";
import Link from "next/link";


const NavWrapper = styled.nav`
  margin: 96px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .location-image {
    background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
    background-size: 300%;
    background-position: 100% 0;
    background-repeat: no-repeat;
  }

  .uppercase {
    text-transform: uppercase;
  }
`

const locations = [
    {
        country: "canada",
        img: "/assets/shared/desktop/illustration-canada.svg"
    }, {
        country: "australia",
        img: "/assets/shared/desktop/illustration-australia.svg"
    }, {
        country: "united kingdom",
        img: "/assets/shared/desktop/illustration-united-kingdom.svg"
    }
]


const LocationLinkCard = ({country, img}: LocationsCard) => {
    return (
        <LocationWrapper>
            <div className="location-image">
                <Image src={img} alt={`${country}-icon`} width={202} height={202}/>
            </div>
            <GrayH3 className="uppercase">
                {country}
            </GrayH3>
            <Link href='locations'>
                <ColorButton>See location</ColorButton>
            </Link>
        </LocationWrapper>
    )
}

const LocationNav = () => {
    return (
        <NavWrapper>
            {locations.map(card => <LocationLinkCard key={card.country} {...card}/>)}
        </NavWrapper>
    )
}

export default LocationNav;