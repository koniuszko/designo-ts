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

  @media (min-width: 768px) {
    width: 689px;
    height: 326px;
    border-radius: 15px;
    margin: 30px auto 120px;
    padding: 80px 75px;
    background-size: 45%;
    background-repeat: repeat-x;
    background-position: 70px 45px;

    h2, p {
      text-align: left;
    }

    .address-wrapper {
      display: flex;
      gap: 100px;
    }

    .address-container {
      text-align: left;
    }
  }
`

export default function LocationCard({country, officeName, street, city, phone, email}: LocationsComponentProps) {
    return (
        <CardWrapper>
            <ColorH2>
                {country}
            </ColorH2>
            <div className="address-wrapper">
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
            </div>

        </CardWrapper>
    )
}