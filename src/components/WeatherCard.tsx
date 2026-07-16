import "../styles/weather.css";
import { MapPin, Sun } from "lucide-react";

interface WeatherCardProps {
    city: string;
}

function WeatherCard({ city }: WeatherCardProps) {
    return (
        <section className="weather-section">

            <div className="weather-card">

                <div className="weather-left">

                    <p className="location">
                        <MapPin size={18} />
                        {city}
                    </p>

                    <h2>28°</h2>

                    <p className="condition">
                        Clear Sky
                    </p>

                </div>

                <div className="weather-right">

                    <Sun size={90} />

                    <div className="details">

                        <p>Feels Like <span>30°</span></p>
                        <p>Humidity <span>68%</span></p>
                        <p>Wind <span>12 km/h</span></p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default WeatherCard;