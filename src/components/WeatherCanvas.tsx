import "../styles/weatherCanvas.css";

interface WeatherCanvasProps {
    condition: string;
}

function WeatherCanvas({ condition }: WeatherCanvasProps) {

    const weather = condition.toLowerCase();

    return (

        <div className="weather-canvas">

            {weather.includes("cloud") && (
                <>
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="cloud cloud-3"></div>
                </>
            )}

            {weather.includes("rain") && (
                <>
                    <div className="rain-layer"></div>
                </>
            )}

        </div>

    );
}

export default WeatherCanvas;