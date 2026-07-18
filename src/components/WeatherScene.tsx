import "../styles/weatherScene.css";

import CloudEffect from "./effects/CloudEffect";
import RainEffect from "./effects/RainEffect";
import LightningEffect from "./effects/LightningEffect";
import  SnowEffect from "./effects/SnowEffect";
import FogEffect from "./effects/FogEffect";
import SunEffect from "./effects/SunEffect";
import MoonEffect from "./effects/MoonEffect";

interface WeatherSceneProps {
    condition: string;
}

function WeatherScene({ condition }: WeatherSceneProps) {


    return (
        <div className="weather-scene">

            <CloudEffect condition={condition} />

            <RainEffect condition={condition} />

            <LightningEffect condition={condition} />

            <SnowEffect condition={condition} />

            <FogEffect condition={condition} />

            <SunEffect condition={condition} />

            <MoonEffect condition={condition} />

        </div>
    );
}

export default WeatherScene;