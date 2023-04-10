import React from "react";
import MainLayout from "@/layouts/MainLayout";
import {GetStaticProps} from "next";
import DesignHeader from "@/components/designPages/DesignHeader";
import styled from "styled-components";
import DesignGallery from "@/components/designPages/DesignGallery";
import SectionNav from "@/components/SectionNav";
import {DataI, DesignPageProps} from "@/interfaces/app_interfaces";

const data = {
    pageTitle: "Web Design",
    pageDescription: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    designs: [
        {
            title: "EXPRESS",
            description: "A multi-carrier shipping website for ecommerce businesses",
            imgUrl: "/assets/web-design/desktop/image-express.jpg"
        },
        {
            title: "TRANSFER",
            description: "Site for low-cost money transfers and sending money within seconds",
            imgUrl: "/assets/web-design/desktop/image-transfer.jpg"
        },
        {
            title: "PHOTON",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
            imgUrl: "/assets/web-design/desktop/image-photon.jpg"
        },
        {
            title: "BUILDER",
            description: "Connects users with local contractors based on their location",
            imgUrl: "/assets/web-design/desktop/image-builder.jpg"
        },
        {
            title: "BLOGR",
            description: "Blogr is a platform for creating an online blog or publication",
            imgUrl: "/assets/web-design/desktop/image-blogr.jpg"
        },
        {
            title: "CAMP",
            description: "Get expert training in coding, data, design, and digital marketing",
            imgUrl: "/assets/web-design/desktop/image-camp.jpg"
        }
    ]
}


export default function WebDesign({designData}: DesignPageProps) {
    console.log(designData)
    return (
        <MainLayout>
            <DesignHeader pageTitle={designData?.pageTitle}
                          pageDescription={designData?.pageDescription}/>
            <DesignGallery designData={designData}/>
            <SectionNav/>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data: DataI = await import('@/data/data.json')
    return {
        props: {designData: data.webs},
    }
}