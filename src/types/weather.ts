export interface ForecastDay {
    date: string;
    max: number;
    min: number;
    weatherCode: number;
    condition: string;
}

export interface WeatherData {

    city: string;
    country: string;

    temperature: number;
    feelsLike: number;

    humidity: number;

    wind: number;

    windDirection: string;

    visibility: number;

    uvIndex: number;

    sunrise: string;

    sunset: string;

    condition: string;

    weatherCode: number;

    forecast: ForecastDay[];

}