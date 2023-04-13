import styled from "styled-components";
import {LocationsComponentProps} from "@/interfaces/app_interfaces";
import {ColorH2, DarkGrayParagraph} from "@/style/global";

const CardWrapper = styled.div`
  padding: 80px 24px;
  background-color: #FDF3F0;
  background-image: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
  background-size: 75%;


  .address-container {
    margin-top: 32px;
  }

  .text-bold {
    font-weight: 700;
  }
`

export default function LocationCard({country, officeName, street, city, phone, email}: LocationsComponentProps) {
    return (
        <CardWrapper>
            <ColorH2>
                {country}
            </ColorH2>
            <div className="address-container">
                <DarkGrayParagraph className="text-bold">{officeName}</DarkGrayParagraph>
                <DarkGrayParagraph>{street}</DarkGrayParagraph>
                <DarkGrayParagraph>{city}</DarkGrayParagraph>
            </div>
            <div className="address-container">
                <DarkGrayParagraph className="text-bold">Contact</DarkGrayParagraph>
                <DarkGrayParagraph>P: {phone}</DarkGrayParagraph>
                <DarkGrayParagraph>M: {email}</DarkGrayParagraph>
            </div>
        </CardWrapper>
    )
}