import "../../styles/effects/fog.css";

interface FogEffectProps {
    condition: string;
}

function FogEffect({ condition }: FogEffectProps) {

    if (condition !== "Fog") return null;

    return (

        <div className="fog-effect">

            <div className="fog fog-1"></div>

            <div className="fog fog-2"></div>

            <div className="fog fog-3"></div>

        </div>

    );

}

export default FogEffect;