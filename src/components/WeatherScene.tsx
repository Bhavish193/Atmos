import type { WeatherData } from "../types/weather";
import "../styles/weatherScene.css";

interface WeatherSceneProps {
    weather: WeatherData | null;
    searched: boolean;
}

function WeatherScene({ weather, searched }: WeatherSceneProps) {

    if (!searched || !weather) {
        return null;
    }

    const condition = weather.condition.toLowerCase();

    console.log("Weather condition:", weather.condition);

    let glowClass = "scene-default";

    if (condition.includes("clear")) {
        glowClass = "scene-clear";
    }
    else if (condition.includes("cloud")) {
        glowClass = "scene-cloudy";
    }
    else if (condition.includes("rain")) {
        glowClass = "scene-rain";
    }
    else if (condition.includes("snow")) {
        glowClass = "scene-snow";
    }
    else if (condition.includes("thunder")) {
        glowClass = "scene-thunder";
    }

    console.log("Applied class:", glowClass);

    return (
        <div className="weather-scene">

            <div
                className={`scene-glow ${glowClass}`}
                style={{
                    opacity: 1,
                    filter: "blur(70px)"
                }}
            ></div>

        </div>
    );
}

export default WeatherScene;