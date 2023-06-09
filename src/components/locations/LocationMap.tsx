import styled from "styled-components";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {DivIcon, LatLngLiteral} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from "next/dynamic";

const LeafletMapContainer = dynamic(() => import('react-leaflet').then(module => module.MapContainer), {
    ssr: false
});

const LeafletTileLayer = dynamic(() => import('react-leaflet').then(module => module.TileLayer), {
    ssr: false
});

const LeafletMarker = dynamic(() => import('react-leaflet').then(module => module.Marker), {
    ssr: false
});

const LeafletPopup = dynamic(() => import('react-leaflet').then(module => module.Popup), {
    ssr: false
});

const MapWrapper = styled.div`
  .leaflet-container {
    height: 320px;
  }

  .leaflet-marker-icon {
    background-image: url('/assets/icons/location-point.svg');
    background-size: 100%;
    width: 36px !important;
    height: 36px !important;
    border: none;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    width: 689px;
    height: 326px;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;

    .leaflet-container {
      height: 326px;
    }
  }

  @media (min-width: 1440px) {
    width: 350px;
  }
`

export default function LocationMap({lat, lng}: LatLngLiteral) {


    const customIcon: DivIcon = new DivIcon({
        iconSize: [25, 25],
        iconAnchor: [0, 0],
        popupAnchor: [15, 0]
    })
    return (
        <MapWrapper id="map">
            <LeafletMapContainer center={[lat, lng]} zoom={12} scrollWheelZoom={true}>
                <LeafletTileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LeafletMarker position={[lat, lng]}
                               icon={customIcon}
                >
                    <LeafletPopup>
                        Our Location
                    </LeafletPopup>
                </LeafletMarker>
            </LeafletMapContainer>
        </MapWrapper>
    )
}