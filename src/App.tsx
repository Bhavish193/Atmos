import { useState } from "react";
import type { WeatherData } from "./types/weather";
import { getWeatherData } from "./services/weatherApi";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";
import HighlightsCard from "./components/HighlightsCard";
import ForecastCard from "./components/ForecastCard";
import Footer from "./components/Footer";




function App() {

    const [searched, setSearched] = useState(false);
    const [city, setCity] = useState("");

    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);

    const [error, setError] =useState("");

    const goHome = () => {
        setSearched(false);
        setCity("");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="app">

            <Navbar goHome={goHome} />

            <Hero
                searched={searched}
                city={city}
                setCity={setCity}
                loading={loading}
                onSearch={async (searchCity) => {

                    if (searchCity.trim() === "") return;

                    try {

                        setError("");
                        setLoading(true);

                        const data = await getWeatherData(searchCity);

                        setWeather(data);
                        setSearched(true);

                    } catch (err) {

                        if (err instanceof Error) {
                            setError(err.message);
                        } else {
                            setError("Something went wrong.");
                        }

                    } finally {

                        setLoading(false);

                    }

                }}
            />

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {searched && weather && (
                <>
                    <WeatherCard weather={weather} />
                    <HighlightsCard weather={weather}/>
                    <ForecastCard forecast={weather.forecast}/>
                    <Footer />
                </>
            )}

        </div>
    );
}

export default App;