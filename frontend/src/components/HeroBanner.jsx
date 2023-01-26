/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="hero-banner__content">
                <p className="hero-banner__subtitle">No fees.</p>
                <p className="hero-banner__subtitle">No minimum deposit.</p>
                <p className="hero-banner__subtitle">High interest rates.</p>
                <p className="hero-banner__txt">Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
};

export default HeroBanner;