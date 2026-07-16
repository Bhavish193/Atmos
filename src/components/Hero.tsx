import "./../styles/hero.css";
import SearchBar from "./SearchBar";

interface HeroProps {
    searched: boolean;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}

function Hero({searched,city,setCity,onSearch,}: HeroProps)  {

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
            <div className="blur blur-one"></div>
            <div className="blur blur-two"></div>

            <p className="greeting">
                {greeting} {emoji}
            </p>

            <h1>
                Look beyond the forecast,
                <br />
                Meet every sky
            </h1>

            <p className="hero-text">
               Discover live weather through immersive visuals that transform with every city you explore.
            </p>

            <SearchBar
                city={city}
                setCity={setCity}
                onSearch={onSearch}
            />

            <div className="popular">

                <span>Popular</span>

                <button onClick={() => {
                    setCity("Delhi");
                    onSearch();
                }}>
                    Delhi
                </button>

                <button onClick={() => {
                    setCity("London");
                    onSearch();
                }}>
                    London
                </button>

                <button onClick={() => {
                    setCity("Tokyo");
                    onSearch();
                }}>
                    Tokyo
                </button>

                <button onClick={() => {
                    setCity("Paris");
                    onSearch();
                }}>
                    Paris
                </button>

            </div>

        </section>
    );
}

export default Hero;