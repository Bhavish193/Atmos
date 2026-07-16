export interface WeatherData {
    city: string;
    country: string;

    temperature: number;
    feelsLike: number;

    humidity: number;
    wind: number;

    condition: string;
    weatherCode: number;
}