import MainLayout from "@/layouts/MainLayout";
import LocationMap from "@/components/locations/LocationMap";
import dynamic from "next/dynamic";


// const data = {
//     43.6441948470555, -79.3945447664012
// ]
// }

const Scroll = dynamic(
    () => {
        return import('../components/Scroll')
    },
    {ssr: false}
)

export default function Locations() {


    return (
        <MainLayout>
            <LocationMap lat={43.6441948470555} lng={-79.3945447664012}/>
            <Scroll/>
        </MainLayout>
    )
}

