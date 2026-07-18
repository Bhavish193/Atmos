import { useEffect, useRef } from "react";
import "../../styles/effects/rain.css";

interface RainEffectProps {
    condition: string;
}

interface Drop {
    x: number;
    y: number;
    length: number;
    speed: number;
}

function RainEffect({ condition }: RainEffectProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if (
            condition !== "Rain" &&
            condition !== "Rain Showers" &&
            condition !== "Thunderstorm"
        ) {
            return;
        }

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

        const drops: Drop[] = [];

        const createDrops = () => {

            drops.length = 0;

            for (let i = 0; i < 220; i++) {

                drops.push({

                    x: Math.random() * canvas.width,

                    y: Math.random() * canvas.height,

                    length: 10 + Math.random() * 10,

                    speed: 6 + Math.random() * 4,

                });

            }

        };

        createDrops();

        let animationId = 0;

        const animate = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "rgba(255,255,255,0.35)";
            ctx.lineWidth = 1.2;

            drops.forEach((drop) => {

                ctx.beginPath();

                ctx.moveTo(drop.x, drop.y);

                ctx.lineTo(
                    drop.x - 3,
                    drop.y + drop.length
                );

                ctx.stroke();

                drop.y += drop.speed;
                drop.x -= 1;

                if (drop.y > canvas.height) {

                    drop.y = -20;
                    drop.x = Math.random() * canvas.width;

                }

            });

            animationId = requestAnimationFrame(animate);

        };

        animate();

        return () => {

            cancelAnimationFrame(animationId);

            window.removeEventListener("resize", resize);

        };

    }, [condition]);

    if (
        condition !== "Rain" &&
        condition !== "Rain Showers" &&
        condition !== "Thunderstorm"
    ) {
        return null;
    }

    return (
        <div className="rain-effect">

            <canvas
                ref={canvasRef}
                className="rain-canvas"
            />

        </div>
    );
}

export default RainEffect;