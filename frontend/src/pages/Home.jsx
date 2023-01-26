import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";
import HeroBanner from "../components/HeroBanner";

/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const Home = () => {
    return (
        <div className="home">
            <section className="home__hero">
                <h2 className="sr-only">Promoted Content</h2>
                <HeroBanner />
            </section>
            <section className="home__features">
                <h2 className="sr-only">Features</h2>
                {features.map((feature) =>
                    <FeatureCard key={feature.id} id={feature.id} title={feature.title} txt={feature.txt} />
                )}
            </section>
        </div>
    );
};

export default Home;