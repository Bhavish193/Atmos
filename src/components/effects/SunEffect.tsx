import "../../styles/effects/sun.css";

interface SunEffectProps {
    condition: string;
}

function SunEffect({ condition }: SunEffectProps) {

    if (condition !== "Clear Sky") return null;

    return (
        <div className="sun-effect">
            <div className="sun"></div>
        </div>
    );
}

export default SunEffect;