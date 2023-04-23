import MainLayout from "@/layouts/MainLayout";
import LocationMap from "@/components/locations/LocationMap";
import dynamic from "next/dynamic";
import styled from "styled-components";
import LocationCard from "@/components/locations/LocationCard";

const locations = [{
    country: "Canada",
    officeName: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
    lat: 43.6441948470555,
    lng: -79.3945447664012,
    phone: "+1 253-863-8967",
    email: "contact@designo.co"
}, {
    country: "Australia",
    officeName: "Designo AU Office",
    street: "19 Balonne Street",
    city: "New South Wales 2443",
    lat: -30.329194769876942,
    lng: 149.78824526441792,
    phone: "(02) 6720 9092",
    email: "contact@designo.au"
}, {
    country: "United Kingdom",
    officeName: "Designo UK Office",
    street: "13  Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    lat: 51.73105267550053,
    lng: -3.8624393516072777,
    phone: "078 3115 1400",
    email: "contact@designo.uk"
}]


const LocationWrapper = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export default function Locations() {
    return (
        <MainLayout>
            {locations.map(
                location => {
                    return (
                        <LocationWrapper>
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
        </MainLayout>
    )
}

