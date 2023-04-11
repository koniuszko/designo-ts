import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import SectionNav from "@/components/SectionNav";
import MainSection from "@/components/home/MainSection";
import {GetStaticProps} from "next";
import {CardsProps} from "@/interfaces/app_interfaces";

export default function Home({home_cards}: CardsProps) {
    return (
        <MainLayout>
            <Hero/>
            <SectionNav disabled={""}/>
            <MainSection home_cards={home_cards}/>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {home_cards} = await import('@/data/data.json')
    return {
        props: {home_cards},
    }
}