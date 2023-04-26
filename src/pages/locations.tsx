import MainLayout from "@/layouts/MainLayout";
import LocationMap from "@/components/locations/LocationMap";
import styled from "styled-components";
import LocationCard from "@/components/locations/LocationCard";
import {GetStaticProps} from "next";
import {DataI, LocationCardProps, LocationsProps} from "@/interfaces/app_interfaces";

const SectionWrapper = styled.section`
  .location:nth-child(2) {
    flex-direction: row-reverse;
  }
`


const LocationWrapper = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1440px) {
    margin: 32px auto 0;
    width: 1110px;
    height: 326px;
    display: flex;
  }
`

export default function Locations({locationsData}: LocationsProps) {
    return (
        <MainLayout>
            <SectionWrapper>
                {locationsData.map(
                    (location: LocationCardProps) => {
                        return (
                            <LocationWrapper className='location' key={location.country}>
                                <LocationMap lat={location.lat} lng={location.lng}/>
                                <LocationCard country={location.country}
                                              officeName={location.officeName}
                                              street={location.street}
                                              city={location.city}
                                              phone={location.phone}
                                              email={location.email}/>
                            </LocationWrapper>
                        )
                    }
                )}
            </SectionWrapper>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data: DataI = await import('@/data/data.json')
    return {
        props: {locationsData: data.locations},
    }
}
