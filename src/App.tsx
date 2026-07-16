import { useState } from "react";
import type { WeatherData } from "./types/weather";
import { getWeatherData } from "./services/weatherApi";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

import Loading from "./components/Loading";

function App() {

    const [searched, setSearched] = useState(false);
    const [city, setCity] = useState("");

    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const goHome = () => {
        setSearched(false);
        setCity("");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>

            <Navbar goHome={goHome} />

            <Hero
                searched={searched}
                city={city}
                setCity={setCity}
                onSearch={async () => {

                    if (city.trim() === "") return;

                    try {

                        setLoading(true);
                        setError("");

                        const data = await getWeatherData(city);

                        setWeather(data);

                        setSearched(true);

                    }

                    catch (err) {

                        setError("City not found.");

                        setSearched(false);

                    }

                    finally {

                        setLoading(false);

                    }

                }}
            />

            {loading && <Loading />}
                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

                {searched && weather && (

                    <>

                        <WeatherCard weather={weather} />

                        <Highlights />

                        <Forecast />

                        <Footer />

                    </>

                )}

        </>
    );
}

export default App;