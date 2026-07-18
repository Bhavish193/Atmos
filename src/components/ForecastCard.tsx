import type { ForecastDay } from "../types/weather";
import "../styles/forecast.css";
import {
    Sun,
    Cloud,
    CloudRain,
    CloudLightning,
    Snowflake,
    CloudFog,
} from "lucide-react";

interface ForecastCardProps {
    forecast: ForecastDay[];
}

function ForecastCard({ forecast }: ForecastCardProps) {

    const getDayName = (date: string, index: number) => {

        if (index === 0) return "Today";

        if (index === 1) return "Tomorrow";

        return new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
        });

    };

    function getIcon(condition: string) {
        switch (condition) {

            case "Clear Sky":
                return <Sun size={34} />;

            case "Cloudy":
                return <Cloud size={34} />;

            case "Rain":
            case "Rain Showers":
                return <CloudRain size={34} />;

            case "Snow":
                return <Snowflake size={34} />;

            case "Thunderstorm":
                return <CloudLightning size={34} />;

            case "Fog":
                return <CloudFog size={34} />;

            default:
                return <Cloud size={34} />;

        }

    }

    return (

        <section className="forecast-section">

            <h2>5-Day Forecast</h2>

            <div className="forecast-card">

                {forecast.map((day, index) => (

                    <div
                        key={day.date}
                        className="forecast-day"
                    >

                        <h3>{getDayName(day.date, index)}</h3>

                        <div className="forecast-icon">

                            {getIcon(day.condition)}

                        </div>

                        <h4>{Math.round(day.max)}°</h4>

                        <p>{Math.round(day.min)}°</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ForecastCard;