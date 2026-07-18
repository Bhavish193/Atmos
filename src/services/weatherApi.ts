import type { WeatherData } from "../types/weather";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherData(
    city: string
): Promise<WeatherData> {

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

    const weatherResponse = await fetch(

        `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code,is_day,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&forecast_days=5`

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

        windDirection: getWindDirection(
            weather.current.wind_direction_10m
        ),

        visibility: Math.round(
            weather.current.visibility / 1000
        ),

        uvIndex: Math.round(
            weather.daily.uv_index_max[0]
        ),

        sunrise: formatTime(
            weather.daily.sunrise[0]
        ),

        sunset: formatTime(
            weather.daily.sunset[0]
        ),

        weatherCode: weather.current.weather_code,

        condition: getWeatherCondition(
            weather.current.weather_code,
            weather.current.is_day
        ),

        forecast: weather.daily.time.map(
            (date: string, index: number) => ({

                date,

                max: weather.daily.temperature_2m_max[index],

                min: weather.daily.temperature_2m_min[index],

                weatherCode:
                    weather.daily.weather_code[index],

                condition: getWeatherCondition(
                    weather.daily.weather_code[index],
                    1
                ),

            })
        ),

    };

}

// -----------------------------

function formatTime(time: string): string {

    return new Date(time).toLocaleTimeString(
        "en-US",
        {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }
    );

}

// -----------------------------

function getWindDirection(
    degrees: number
): string {

    const directions = [

        "N",
        "NE",
        "E",
        "SE",
        "S",
        "SW",
        "W",
        "NW",

    ];

    return directions[
        Math.round(degrees / 45) % 8
    ];

}

// -----------------------------

function getWeatherCondition(
    code: number,
    isDay: number
): string {

    if (code === 0) {

        return isDay
            ? "Clear Sky"
            : "Clear Night";

    }

    if (code <= 3) return "Cloudy";

    if (code <= 48) return "Fog";

    if (code <= 67) return "Rain";

    if (code <= 77) return "Snow";

    if (code <= 82) return "Rain Showers";

    if (code <= 99) return "Thunderstorm";

    return "Unknown";

}