import "./../styles/hero.css";
import SearchBar from "./SearchBar";

function Hero() {

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
        <section className="hero">

            <p className="greeting">
                {greeting} {emoji}
            </p>

            <h1>
                Look beyond the forecast
                <br />
                Meet every sky
            </h1>

            <p className="hero-text">
               Discover live weather through immersive visuals that transform with every city you explore.
            </p>

            <SearchBar />

            <div className="popular">

                <span>Popular</span>

                <button>Delhi</button>
                <button>London</button>
                <button>Tokyo</button>
                <button>Paris</button>

            </div>

        </section>
    );
}

export default Hero;