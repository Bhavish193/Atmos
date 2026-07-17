import "../styles/weather.css";

import {
    MapPin,
    CalendarDays,
    Clock3,
    Sun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
    CloudFog,
} from "lucide-react";

import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
    weather: WeatherData;
}

function getWeatherIcon(condition: string) {
    switch (condition) {

        case "Clear Sky":
            return <Sun size={90} />;

        case "Cloudy":
            return <Cloud size={90} />;

        case "Rain":
        case "Rain Showers":
            return <CloudRain size={90} />;

        case "Snow":
            return <CloudSnow size={90} />;

        case "Thunderstorm":
            return <CloudLightning size={90} />;

        case "Fog":
            return <CloudFog size={90} />;

        default:
            return <Sun size={90} />;
    }
}

function WeatherCard({ weather }: WeatherCardProps) {

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const time = today.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (

        <section className="weather-section">

            <div className={`weather-card ${weather.condition.toLowerCase().replace(/\s+/g, "-")}`}>

                <div className="weather-overlay"></div>

                <div className="weather-content">

                    <div className="weather-left">

                        <p className="location">
                            <MapPin size={18} />
                            {weather.city}, {weather.country}
                        </p>

                        <h2>{Math.round(weather.temperature)}°</h2>

                        <p className="condition">
                            {weather.condition}
                        </p>

                    </div>

                    <div className="weather-center">

                        <p>
                            <CalendarDays size={18} />
                            {date}
                        </p>

                        <p>
                            <Clock3 size={18} />
                            Last Updated • {time}
                        </p>

                    </div>

                    <div className="weather-right">

                        {getWeatherIcon(weather.condition)}

                        <div className="details">

                            <p>
                                Feels Like
                                <span>{Math.round(weather.feelsLike)}°</span>
                            </p>

                            <p>
                                Humidity
                                <span>{weather.humidity}%</span>
                            </p>

                            <p>
                                Wind
                                <span>{weather.wind} km/h</span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default WeatherCard;