import React from "react";
import MainLayout from "@/layouts/MainLayout";
import {GetStaticProps} from "next";
import DesignHeader from "@/components/designPages/DesignHeader";
import DesignGallery from "@/components/designPages/DesignGallery";
import SectionNav from "@/components/SectionNav";
import {DataI, DesignPageProps} from "@/interfaces/app_interfaces";
import styled from "styled-components";

const NavWrapper = styled.div`
  nav {
    height: 308px;
  }
`

export default function WebDesign({designData}: DesignPageProps) {
    return (
        <MainLayout>
            <DesignHeader pageTitle={designData?.pageTitle}
                          pageDescription={designData?.pageDescription}/>
            <DesignGallery designData={designData}/>
            <NavWrapper>
                <SectionNav disabledLink={"web"}/>
            </NavWrapper>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data: DataI = await import('@/data/data.json')
    return {
        props: {designData: data.webs},
    }
}