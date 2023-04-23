import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const SocialsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    align-self: flex-end;
  }

`

export default function FooterSocials() {
    return (
        <SocialsWrapper>
            <Link href="http://www.facebook.com">
                <Image src='/assets/icons/icon-facebook.svg' alt='facebook-icon' width={24} height={24}/>
            </Link>
            <Link href="http://www.youtube.com">
                <Image src='/assets/icons/icon-youtube.svg' alt='facebook-icon' width={24} height={24}/>
            </Link>
            <Link href="http://www.twitter.com">
                <Image src='/assets/icons/icon-twitter.svg' alt='facebook-icon' width={24} height={24}/>
            </Link>
            <Link href="http://www.pinterest.com">
                <Image src='/assets/icons/icon-pinterest.svg' alt='facebook-icon' width={24} height={24}/>
            </Link>
            <Link href="http://www.instagram.com">
                <Image src='/assets/icons/icon-instagram.svg' alt='facebook-icon' width={24} height={24}/>
            </Link>
        </SocialsWrapper>
    )
}