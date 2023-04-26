import React from "react";
import MainLayout from "@/layouts/MainLayout";
import {GetStaticProps} from "next";
import DesignHeader from "@/components/designPages/DesignHeader";
import DesignGallery from "@/components/designPages/DesignGallery";
import SectionNav from "@/components/SectionNav";
import {DataI, DesignPageProps} from "@/interfaces/app_interfaces";
import styled from "styled-components";

const NavWrapper = styled.div`
  @media (min-width: 1440px) {
    nav {
      height: 308px;
    }

    .web-design {
      height: 308px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.45)), url('/assets/home/desktop/image-web-design-small.jpg');

      &:hover {
        background-image: linear-gradient(rgba(255, 173, 155, 0.65),
        rgba(255, 173, 155, 0.45)), url('/assets/home/desktop/image-web-design-small.jpg');
      }
    }
  }
`
export default function GraphicDesign({designData}: DesignPageProps) {
    return (
        <MainLayout>
            <DesignHeader pageTitle={designData?.pageTitle}
                          pageDescription={designData?.pageDescription}/>
            <DesignGallery designData={designData}/>
            <NavWrapper>
                <SectionNav disabledLink={"graphic"}/>
            </NavWrapper>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data: DataI = await import('@/data/data.json')
    return {
        props: {designData: data.graphics},
    }
}
