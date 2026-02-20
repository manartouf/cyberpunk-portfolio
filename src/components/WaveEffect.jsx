import React, { useEffect, useRef } from "react";

function WaveEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let animationFrameId;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const lines = [];
    const lineCount = 40;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        offset: Math.random() * 1000,
        speed: 0.002 + Math.random() * 0.003,
      });
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;

      lines.forEach((line, index) => {
        ctx.beginPath();

        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin(x * 0.01 + time * line.speed + line.offset) * 50 +
            index * 4 -
            80;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // cyberpunk neon color
        ctx.strokeStyle = "rgba(0, 255, 200, 0.15)";
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}

export default WaveEffect;
