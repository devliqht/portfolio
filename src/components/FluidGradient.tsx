import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const FluidBackground: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Handle mouse movement and update coordinates
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setCoords({
      x: clientX / window.innerWidth, // Normalize X (0 to 1)
      y: clientY / window.innerHeight, // Normalize Y (0 to 1)
    });
  };

  // Generate a gradient based on cursor position
  const gradientStyle = useSpring({
    background: `radial-gradient(
      circle at ${coords.x * 100}% ${coords.y * 100}%, 
      var(--dblue),
      var(--dblue-l),
      var(--dblue-ll),
      var(--lblue),
      var(--cyan-b),
      var(--contrastblue)
    )`,
    config: { tension: 120, friction: 40 },
  });

  return (
    <animated.div
      style={{
        ...gradientStyle,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Fluid Gradient Background</h1>
      </div>
    </animated.div>
  );
};

export default FluidBackground;