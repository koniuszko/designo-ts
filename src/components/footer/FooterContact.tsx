import styled from "styled-components";
import Link from "next/link";
import {WhiteButton, WhiteH1, WhiteParagraph} from "@/style/global";

export const ContactWrapper = styled.div`
  width: 330px;
  height: 380px;
  border-radius: 15px;
  background-color: #E7816B;
  background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
  background-size: 250%;
  background-position: 80% 50%;
  background-repeat: no-repeat;
  box-shadow: 0 4px 4px 0 rgba(29, 28, 30, 0.5);
  transform: translateY(-50%);
  position: absolute;
  padding: 64px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 690px;
    height: 350px;
    background-image: url('/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg');
    background-size: 100%;
    background-position: 90px 50%;
    transform: translateY(-264px);
    gap: 24px;
  }

  .footer-contact-title {
    margin: 0 178px;
  }

  .footer-contact-description {
    margin: 0 100px;
  }
`

export default function FooterContact() {
    return (
        <ContactWrapper>
            <WhiteH1 className="footer-contact-title">Let’s talk about your project</WhiteH1>
            <WhiteParagraph className="footer-contact-description">
                Ready to take it to the next level? Contact us today and find out how our expertise can
                help your business grow.
            </WhiteParagraph>
            <Link href={'/contact'}>
                <WhiteButton>
                    get in touch
                </WhiteButton>
            </Link>
        </ContactWrapper>
    )
}