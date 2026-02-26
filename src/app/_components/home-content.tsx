import { HomeHero } from "./home-hero"
import { HomeObjects } from "./home-objects"
import { HomeService } from "./home-service"
import { HomeProjects } from "./home-projects"
import { HomeCTA } from "./home-cta"
import { HomeQuote } from "./home-quote"
import { HomeCheck } from "./home-check"
import { HomeSupport } from "./home-support"
import { HomeContact } from "./home-contact"

export const HomeContent = async () => {
    return <>
        <HomeHero />

        <HomeService />

        <HomeObjects />

        <HomeProjects />

        <HomeCTA />

        <HomeQuote />

        <HomeCheck />

        <HomeSupport />

        <HomeContact />
    </>
}