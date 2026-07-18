import type { WeatherData } from "../types/weather";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherData(
    city: string
): Promise<WeatherData> {

    // ---------- Get Coordinates ----------

    const geoResponse = await fetch(
        `${GEO_URL}?name=${city}&count=1`
    );

    if (!geoResponse.ok) {
        throw new Error("Couldn't connect to the weather service.");
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Check the spelling and try again.");
    }

    const location = geoData.results[0];

    // ---------- Get Weather ----------

    const weatherResponse = await fetch(

        `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,is_day`

    );

    if (!weatherResponse.ok) {
        throw new Error("Couldn't fetch the weather right now.");
    }

    const weather = await weatherResponse.json();

    return {

        city: location.name,

        country: location.country,

        temperature: weather.current.temperature_2m,

        feelsLike: weather.current.apparent_temperature,

        humidity: weather.current.relative_humidity_2m,

        wind: weather.current.wind_speed_10m,

        weatherCode: weather.current.weather_code,

        condition: getWeatherCondition(
            weather.current.weather_code,
            weather.current.is_day
        ),

    };
}

// -----------------------------

function getWeatherCondition(
    code: number,
    isDay: number
): string {

    if (code === 0) {

        return isDay ? "Clear Sky" : "Clear Night";

    }

    if (code <= 3) return "Cloudy";

    if (code <= 48) return "Fog";

    if (code <= 67) return "Rain";

    if (code <= 77) return "Snow";

    if (code <= 82) return "Rain Showers";

    if (code <= 99) return "Thunderstorm";

    return "Unknown";

}