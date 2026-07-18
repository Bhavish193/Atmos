import { useEffect, useRef } from "react";
import "../../styles/effects/snow.css";

interface SnowEffectProps {
    condition: string;
}

interface Snowflake {
    x: number;
    y: number;
    radius: number;
    speedY: number;
    speedX: number;
    opacity: number;
}

function SnowEffect({ condition }: SnowEffectProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if (condition !== "Snow") return;

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

        const flakes: Snowflake[] = [];

        const FLAKE_COUNT = 140;

        for (let i = 0; i < FLAKE_COUNT; i++) {

            flakes.push({

                x: Math.random() * canvas.width,

                y: Math.random() * canvas.height,

                radius: 1 + Math.random() * 3,

                speedY: 0.4 + Math.random() * 1.2,

                speedX: (Math.random() - 0.5) * 0.7,

                opacity: 0.35 + Math.random() * 0.65,

            });

        }

        let animationId = 0;

        const animate = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            flakes.forEach((flake) => {

                flake.y += flake.speedY;

                flake.x += flake.speedX;

                if (flake.y > canvas.height + 5) {

                    flake.y = -10;

                    flake.x = Math.random() * canvas.width;

                }

                if (flake.x < -10) {

                    flake.x = canvas.width + 10;

                }

                if (flake.x > canvas.width + 10) {

                    flake.x = -10;

                }

                ctx.beginPath();

                ctx.arc(

                    flake.x,

                    flake.y,

                    flake.radius,

                    0,

                    Math.PI * 2

                );

                ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`;

                ctx.fill();

            });

            animationId = requestAnimationFrame(animate);

        };

        animate();

        return () => {

            cancelAnimationFrame(animationId);

            window.removeEventListener("resize", resize);

        };

    }, [condition]);

    if (condition !== "Snow") return null;

    return (

        <div className="snow-effect">

            <canvas
                ref={canvasRef}
                className="snow-canvas"
            />

        </div>

    );

}

export default SnowEffect;