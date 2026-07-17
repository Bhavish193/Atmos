import "./../styles/hero.css";
import SearchBar from "./SearchBar";

interface HeroProps {
    searched: boolean;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    onSearch: (city: string) => void;
    loading: boolean;
}

function Hero({searched,city,setCity,onSearch,loading,}: HeroProps) {

    const hour = new Date().getHours();

    let greeting = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji = "🌤️";
    }
    else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji = "☀️";
    }
    else if (hour >= 17 && hour < 20) {
        greeting = "Good Evening";
        emoji = "🌇";
    }
    else {
        greeting = "Good Night";
        emoji = "🌙";
    }

    return (
        <section className={`hero ${searched ? "hero-small" : ""}`}>

            <div className="hero-content">

                <p className="greeting">
                    {greeting} {emoji}
                </p>

                {!searched && (
                    <>
                        <h1>
                            Look beyond the forecast,
                            <br />
                            Meet every sky
                        </h1>

                        <p className="hero-text">
                            Discover live weather through immersive visuals that
                            transform with every city you explore.
                        </p>
                    </>
                )}

                <SearchBar
                    city={city}
                    setCity={setCity}
                    onSearch={() => onSearch(city)}
                    loading={loading}
                />

                {!searched && (
                    <div className="popular">

                        <span>Popular</span>

                        <button
                            onClick={() => {
                                setCity("Delhi");
                                onSearch("Delhi");
                            }}
                        >
                            Delhi
                        </button>

                        <button
                            onClick={() => {
                                setCity("London");
                                onSearch("London");
                            }}
                        >
                            London
                        </button>

                        <button
                            onClick={() => {
                                setCity("Tokyo");
                                onSearch("Tokyo");
                            }}
                        >
                            Tokyo
                        </button>

                        <button
                            onClick={() => {
                                setCity("Paris");
                                onSearch("Paris");
                            }}
                        >
                            Paris
                        </button>

                    </div>

                )}

            </div>

        </section>
    );
}

export default Hero;