import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

function App() {

    const [searched, setSearched] = useState(false);
    const [city, setCity] = useState("");

    return (
        <>

            <Navbar />

            <Hero
                searched={searched}
                city={city}
                setCity={setCity}
                onSearch={() => {
                    if (city.trim() === "") return;

                    const formattedCity =
                        city.charAt(0).toUpperCase() +
                        city.slice(1).toLowerCase();

                    setCity(formattedCity);
                    setSearched(true);
                }}
            />

            {searched && (
                <>
                    <WeatherCard city={city} />
                    <Highlights />
                    <Forecast />
                    <Footer />
                </>
            )}

        </>
    );
}

export default App;