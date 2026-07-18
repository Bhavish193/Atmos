import {
    Sunrise,
    Sunset,
    Eye,
    Droplets,
    Thermometer,
    Wind,
    Compass,
    SunMedium,
} from "lucide-react";

import type { WeatherData } from "../types/weather";

import "../styles/highlights.css";

interface HighlightsCardProps {
    weather: WeatherData;
}

function HighlightsCard({ weather }: HighlightsCardProps) {

    const getHumidityText = (humidity: number) => {

        if (humidity < 30) return "Dry";

        if (humidity < 60) return "Comfortable";

        if (humidity < 80) return "Humid";

        return "Very Humid";

    };

    const getVisibilityText = (visibility: number) => {

        if (visibility >= 15) return "Excellent";

        if (visibility >= 10) return "Good";

        if (visibility >= 5) return "Moderate";

        return "Poor";

    };

    const getUVText = (uv: number) => {

        if (uv <= 2) return "Low";

        if (uv <= 5) return "Moderate";

        if (uv <= 7) return "High";

        if (uv <= 10) return "Very High";

        return "Extreme";

    };

    const getWindText = (speed: number) => {

        if (speed < 5) return "Calm";

        if (speed < 15) return "Light Breeze";

        if (speed < 25) return "Breezy";

        if (speed < 40) return "Windy";

        return "Strong Wind";

    };

    const items = [

        {
            title: "Sunrise",
            value: weather.sunrise,
            sub: "Morning",
            icon: <Sunrise size={26} />,
        },

        {
            title: "Sunset",
            value: weather.sunset,
            sub: "Evening",
            icon: <Sunset size={26} />,
        },

        {
            title: "Visibility",
            value: `${weather.visibility} km`,
            sub: getVisibilityText(weather.visibility),
            icon: <Eye size={26} />,
        },

        {
            title: "Humidity",
            value: `${weather.humidity}%`,
            sub: getHumidityText(weather.humidity),
            icon: <Droplets size={26} />,
        },

        {
            title: "Feels Like",
            value: `${Math.round(weather.feelsLike)}°`,
            sub: "Temperature",
            icon: <Thermometer size={26} />,
        },

        {
            title: "Wind",
            value: `${weather.wind} km/h`,
            sub: getWindText(weather.wind),
            icon: <Wind size={26} />,
        },

        {
            title: "Direction",
            value: weather.windDirection,
            sub: "Wind Direction",
            icon: <Compass size={26} />,
        },

        {
            title: "UV Index",
            value: weather.uvIndex,
            sub: getUVText(weather.uvIndex),
            icon: <SunMedium size={26} />,
        },

    ];

    return (

        <section className="highlights-section">

            <h2>Today's Highlights</h2>

            <div className="highlights-card">

                <div className="highlights-grid">

                    {items.map((item) => (

                        <div
                            key={item.title}
                            className="highlight-item"
                        >

                            <div className="highlight-icon">

                                {item.icon}

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.value}

                            </p>

                            <span>

                                {item.sub}

                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default HighlightsCard;