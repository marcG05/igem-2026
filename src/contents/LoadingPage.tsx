import { useEffect, useRef } from "react";

// Image URLs
const bact = "https://static.igem.wiki/teams/5756/assets/images/wiki/loading/geobacter.webp";
const lightning = "https://static.igem.wiki/teams/5756/assets/images/wiki/loading/lightning.webp";

export function LoadingPage() {
  const lightningRef1 = useRef<HTMLImageElement>(null);
  const lightningRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let angle = 0;
    let animationFrame: number;

    function animate() {
      angle += 0.015; // Slower speed

      const radius = 100;
      // First lightning
      const x1 = Math.cos(angle) * radius;
      const y1 = Math.sin(angle) * radius;
      // Second lightning, offset by PI (opposite side)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const y2 = Math.sin(angle + Math.PI) * radius;

      if (lightningRef1.current) {
        lightningRef1.current.style.transform = `translate(-50%, -50%) translate(${x1}px, ${y1}px) rotate(${angle}rad)`;
      }
      if (lightningRef2.current) {
        lightningRef2.current.style.transform = `translate(-50%, -50%) translate(${x2}px, ${y2}px) rotate(${angle + Math.PI}rad)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
    className="water-gradient-section"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bacteria in the center */}
      <img
        src={bact}
        alt="Bacteria"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "180px",
          height: "180px",
          objectFit: "contain",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          filter: "drop-shadow(0 0 24px #1565c0aa)",
        }}
      />
      {/* First lightning circling */}
      <img
        ref={lightningRef1}
        src={lightning}
        alt="Lightning 1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "80px",
          height: "80px",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 3,
          filter: "drop-shadow(0 0 16px #ffe066cc)",
          transition: "filter 0.2s",
        }}
      />
      {/* Second lightning circling, opposite side */}
      <img
        ref={lightningRef2}
        src={lightning}
        alt="Lightning 2"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "80px",
          height: "80px",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 3,
          filter: "drop-shadow(0 0 16px #ffe066cc)",
          transition: "filter 0.2s",
        }}
      />
    </div>
  );
}