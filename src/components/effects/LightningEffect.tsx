import { useEffect, useRef, useState } from "react";
import "../../styles/effects/lightning.css";

interface LightningEffectProps {
    condition: string;
}

interface Point {
    x: number;
    y: number;
}

function LightningEffect({ condition }: LightningEffectProps) {

    const [flash, setFlash] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if (condition !== "Thunderstorm") return;

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const resize = () => {

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

        };

        resize();

        window.addEventListener("resize", resize);

        const drawBolt = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const path: Point[] = [];

            let x = Math.random() * (canvas.width - 140) + 70;

            let y = 0;

            path.push({ x, y });

            while (y < canvas.height * 0.6) {

                x += (Math.random() - 0.5) * 35;

                y += 14 + Math.random() * 18;

                path.push({ x, y });

            }

            ctx.beginPath();

            ctx.moveTo(path[0].x, path[0].y);

            path.forEach((point) => {

                ctx.lineTo(point.x, point.y);

            });

            ctx.strokeStyle = "rgba(255,255,255,.95)";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 18;
            ctx.shadowColor = "#ffffff";

            ctx.stroke();

            setTimeout(() => {

                ctx.clearRect(0, 0, canvas.width, canvas.height);

            }, 90);

        };

        let timeout: number;

        const flashLightning = () => {

            setFlash(true);

            if (Math.random() < 0.35) {

                drawBolt();

            }

            setTimeout(() => {

                setFlash(false);

            }, 40);

            timeout = window.setTimeout(

                flashLightning,

                1500 + Math.random() * 4500

            );

        };

        timeout = window.setTimeout(

            flashLightning,

            1000

        );

        return () => {

            clearTimeout(timeout);

            window.removeEventListener("resize", resize);

        };

    }, [condition]);

    if (condition !== "Thunderstorm") return null;

    return (

        <div className={`lightning-effect ${flash ? "flash" : ""}`}>

            <canvas
                ref={canvasRef}
                className="lightning-canvas"
            />

            <div className="lightning-glow"></div>

        </div>

    );

}

export default LightningEffect;