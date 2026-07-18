import "../../styles/effects/cloud.css";

interface CloudEffectProps {
    condition: string;
}

function CloudEffect({ condition }: CloudEffectProps) {
    const showClouds = [
        "Cloudy",
        "Rain",
        "Rain Showers",
        "Thunderstorm",
        "Snow",
    ].includes(condition);

    if (!showClouds) return null;

    return (
        <div className="cloud-effect">

            <div className="cloud cloud1"></div>

            <div className="cloud cloud2"></div>

            <div className="cloud cloud3"></div>

        </div>
    );
}

export default CloudEffect;