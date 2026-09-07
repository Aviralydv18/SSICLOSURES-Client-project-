import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductPreview from "../components/ProductPreview";
import WhoWeServePreview from "../components/WhoWeServePreview";
import InfrastructurePreview from "../components/InfrastructurePreview";
import CTA from "../components/CTA";

function Home() {
    return (
        <main>

            <Hero />

            <AboutPreview />

            <WhyChooseUs />

            <ProductPreview />

            <WhoWeServePreview />

            <InfrastructurePreview />

            <CTA />

        </main>
    );
}

export default Home;