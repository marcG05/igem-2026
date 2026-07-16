import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const strandACircles = svg.querySelectorAll(".strand-a");
    const strandBCircles = svg.querySelectorAll(".strand-b");
    const rungs = svg.querySelectorAll(".rung");

    const numNodes = strandACircles.length;
    const amplitude = 40;
    const centerY = 75;

    const obj = { phase: 0 };

    // GSAP tween to animate the phase of the DNA wave
    const dnaTween = gsap.to(obj, {
      phase: Math.PI * 2,
      duration: 4,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const p = obj.phase;
        for (let i = 0; i < numNodes; i++) {
          // Calculate the angle for each node along the sine wave
          // 0.35 creates a nice wavelength across the screen
          const angle = i * 0.35 - p;
          const sinVal = Math.sin(angle);
          const cosVal = Math.cos(angle); // Used for 3D depth perception

          const yA = centerY + amplitude * sinVal;
          const yB = centerY - amplitude * sinVal;

          // 3D scale and opacity based on cosine (depth axis)
          const rA = 5.5 + 2.5 * cosVal;
          const rB = 5.5 - 2.5 * cosVal;

          const opacityA = 0.35 + (0.65 * (cosVal + 1)) / 2;
          const opacityB = 0.35 + (0.65 * (-cosVal + 1)) / 2;

          const cA = strandACircles[i];
          const cB = strandBCircles[i];
          const rung = rungs[i];

          if (cA) {
            cA.setAttribute("cy", yA.toString());
            cA.setAttribute("r", rA.toString());
            cA.setAttribute("opacity", opacityA.toString());
          }
          if (cB) {
            cB.setAttribute("cy", yB.toString());
            cB.setAttribute("r", rB.toString());
            cB.setAttribute("opacity", opacityB.toString());
          }
          if (rung) {
            rung.setAttribute("y1", yA.toString());
            rung.setAttribute("y2", yB.toString());
            // Make the rung opacity follow the depth
            const avgOpacity = (opacityA + opacityB) / 2;
            rung.setAttribute("opacity", (avgOpacity * 0.6).toString());
            // Adjust stroke width slightly for depth
            rung.setAttribute(
              "stroke-width",
              (1.5 + 1.5 * avgOpacity).toString(),
            );
          }
        }
      },
    });

    // Subtle floating breathing effect for the entire DNA SVG container
    const floatTween = gsap.to(svg, {
      y: "-8px",
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Scroll Trigger Timeline for Section 5 elements
    let scrollTl: gsap.core.Timeline | null = null;
    const el = containerRef.current;
    if (el) {
      const title = el.querySelector(".section5-title");
      const creamImg = el.querySelector(".section5-cream");
      const descCard = el.querySelector(".section5-card");

      scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (title) {
        scrollTl.fromTo(
          title,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        );
      }
      if (creamImg) {
        scrollTl.fromTo(
          creamImg,
          { opacity: 0, scale: 0.7, rotate: -25 },
          {
            opacity: 1,
            scale: 1,
            rotate: -12,
            duration: 0.9,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        );
      }
      if (descCard) {
        scrollTl.fromTo(
          descCard,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
          "-=0.8",
        );
      }
    }

    return () => {
      dnaTween.kill();
      floatTween.kill();
      if (scrollTl) scrollTl.kill();
    };
  }, []);

  const numNodes = 31; // Generates nodes across the 1200px viewBox (30 intervals * 40px = 1200px)

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "4rem 1rem 0 1rem", md: "6rem 2rem 0 2rem" },
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <Typography
        className="section5-title"
        sx={{
          fontFamily: "Prata, serif",
          textAlign: "center",
          fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem", lg: "6.5rem" },
          color: "#000000",
          mb: { xs: "2rem", md: "4rem" },
          zIndex: 2,
        }}
      >
        The Biology of Tomorrow
      </Typography>

      {/* Main Content Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "2rem", md: "5rem" },
          width: "100%",
          maxWidth: "1150px",
          flexGrow: 1,
          zIndex: 2,
          mb: { xs: "2rem", md: "4rem" },
        }}
      >
        {/* Left: Cream Splat Image */}
        <Box
          className="section5-cream"
          sx={{
            width: { xs: "12rem", sm: "16rem", md: "22rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}tmp/cream.png`}
            alt="Cosmetic Cream Splat"
            sx={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0px 10px 25px rgba(0,0,0,0.06))",
              transform: "rotate(-12deg)",
            }}
          />
        </Box>

        {/* Right: Description Card */}
        <Box
          className="section5-card"
          sx={{
            display: "flex",
            padding: { xs: "2rem 1.5rem", sm: "2.5rem", md: "3rem" },
            width: { xs: "100%", sm: "30rem", md: "38rem" },
            backgroundColor: "#ffffff",
            border: "2px solid #d8e4cf",
            borderRadius: "40px",
            boxShadow: "0 15px 35px rgba(216, 228, 207, 0.62)",
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.75,
              color: "#333333",
              fontFamily: "inherit",
            }}
          >
            This project aims to maximize the productionà détdé of this
            remarkable molecule by genetically engineering a bacterium capable
            of secreting it. This project aims to maximize the production of
            this remarkable molecule by genetically engineering a bacterium
            capable of secreting it.
          </Typography>
        </Box>
      </Box>

      {/* Bottom: Rotating DNA Double Helix SVG */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          height: { xs: "100px", md: "150px" },
          display: "flex",
          alignItems: "flex-end",
          zIndex: 1,
          mb: "1rem",
        }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 1220 150"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMidMeet"
          style={{ overflow: "visible", display: "block" }}
        >
          {/* Connecting Rungs */}
          {Array.from({ length: numNodes }).map((_, i) => (
            <line
              key={`rung-${i}`}
              className="rung"
              x1={i * 40 + 20}
              y1={75}
              x2={i * 40 + 20}
              y2={75}
              stroke="#4a6892"
              strokeWidth="2.5"
            />
          ))}

          {/* Strand A Circles (Lighter Blue/Cyan) */}
          {Array.from({ length: numNodes }).map((_, i) => (
            <circle
              key={`strand-a-${i}`}
              className="strand-a"
              cx={i * 40 + 20}
              cy={75}
              r="6.5"
              fill="#7ea7d8"
            />
          ))}

          {/* Strand B Circles (Darker Steel Blue) */}
          {Array.from({ length: numNodes }).map((_, i) => (
            <circle
              key={`strand-b-${i}`}
              className="strand-b"
              cx={i * 40 + 20}
              cy={75}
              r="6.5"
              fill="#1d3658"
            />
          ))}
        </svg>
      </Box>
    </Box>
  );
};

export default Section5;
