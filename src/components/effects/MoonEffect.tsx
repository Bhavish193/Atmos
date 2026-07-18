import "../../styles/effects/moon.css";

interface MoonEffectProps {
    condition: string;
}

function MoonEffect({ condition }: MoonEffectProps) {

    if (condition !== "Clear Night") return null;

    return (

        <div className="moon-effect">

            <div className="moon"></div>

        </div>

    );

}

export default MoonEffect;