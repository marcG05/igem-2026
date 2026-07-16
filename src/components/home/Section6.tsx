import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const wetText = el.querySelector(".section6-wet");
    const labText = el.querySelector(".section6-lab");
    const rightContent = el.querySelector(".section6-right");
    const slogan = el.querySelector(".section6-slogan");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    if (wetText && labText) {
      tl.fromTo(
        [wetText, labText],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      );
    }
    if (rightContent) {
      tl.fromTo(
        rightContent,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      );
    }
    if (slogan) {
      tl.fromTo(
        slogan,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
        "-=0.4",
      );
    }
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Top Banner Bar */}
      <Box
        sx={{
          width: "100%",
          height: "8vh",
          backgroundColor: "#e4f2ff",
          flexShrink: 0,
        }}
      />

      {/* Middle Content Area with SVG Bubble Background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Background SVG for Water Bubbles & Liquid Texture */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMidSlice"
            style={{ display: "block" }}
          >
            <defs>
              {/* Background gradient */}
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3f6f9" />
                <stop offset="60%" stopColor="#e9eff5" />
                <stop offset="100%" stopColor="#dce8f2" />
              </linearGradient>

              {/* Glass bubble radial gradient */}
              <radialGradient id="bubbleGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="12%" stopColor="#f0f6fa" stopOpacity="0.4" />
                <stop offset="45%" stopColor="#d2e3f0" stopOpacity="0.1" />
                <stop offset="85%" stopColor="#a3c4db" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#608ba8" stopOpacity="0.5" />
              </radialGradient>

              {/* Large right-side wave gradient */}
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cadbeb" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#9cc0dc" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6999be" stopOpacity="0.6" />
              </linearGradient>

              {/* Subtle bubble shadow */}
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="2"
                  dy="8"
                  stdDeviation="8"
                  floodColor="#335069"
                  floodOpacity="0.1"
                />
              </filter>
            </defs>

            {/* Main background */}
            <rect width="1440" height="600" fill="url(#bgGrad)" />

            {/* Giant right-side wave structure */}
            <path
              d="M750,0 C950,80 1080,240 1080,600 L1440,600 L1440,0 Z"
              fill="url(#waveGrad)"
            />

            {/* Left huge bubble extending offscreen */}
            <circle
              cx="0"
              cy="300"
              r="220"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="-40"
              cy="220"
              rx="30"
              ry="15"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 -40 220)"
            />

            {/* Middle-left large bubble */}
            <circle
              cx="320"
              cy="380"
              r="130"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="280"
              cy="330"
              rx="22"
              ry="11"
              fill="#ffffff"
              opacity="0.45"
              transform="rotate(-30 280 330)"
            />

            {/* Center-right bubble */}
            <circle
              cx="620"
              cy="180"
              r="85"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />
            <ellipse
              cx="595"
              cy="150"
              rx="14"
              ry="7"
              fill="#ffffff"
              opacity="0.45"
              transform="rotate(-30 595 150)"
            />

            {/* Floating small bubbles */}
            <circle
              cx="250"
              cy="150"
              r="30"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx="240"
              cy="140"
              rx="5"
              ry="2.5"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 240 140)"
            />

            <circle
              cx="140"
              cy="480"
              r="25"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx="132"
              cy="472"
              rx="4"
              ry="2"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 132 472)"
            />

            <circle
              cx="550"
              cy="450"
              r="40"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx="538"
              cy="438"
              rx="7"
              ry="3.5"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 538 438)"
            />

            <circle
              cx="900"
              cy="280"
              r="35"
              fill="url(#bubbleGrad)"
              filter="url(#shadow)"
              stroke="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx="890"
              cy="270"
              rx="6"
              ry="3"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 890 270)"
            />

            <circle
              cx="1180"
              cy="230"
              r="20"
              fill="url(#bubbleGrad)"
              stroke="rgba(255,255,255,0.4)"
            />
            <ellipse
              cx="1174"
              cy="224"
              rx="3.5"
              ry="1.7"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 1174 224)"
            />

            <circle
              cx="880"
              cy="120"
              r="18"
              fill="url(#bubbleGrad)"
              stroke="rgba(255,255,255,0.3)"
            />
            <ellipse
              cx="875"
              cy="115"
              rx="3"
              ry="1.5"
              fill="#ffffff"
              opacity="0.4"
              transform="rotate(-30 875 115)"
            />
          </svg>
        </Box>

        {/* Foreground Content Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: { xs: "2rem 2rem", md: "0 10%" },
            boxSizing: "border-box",
            zIndex: 2,
            position: "relative",
          }}
        >
          {/* Left: Wet Lab Large Outlined Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              userSelect: "none",
            }}
          >
            <Typography
              className="section6-wet"
              sx={{
                color: "transparent",
                WebkitTextStroke: "2.5px #000000",
                fontSize: {
                  xs: "4.5rem",
                  sm: "6.5rem",
                  md: "8rem",
                  lg: "9.5rem",
                },
                fontWeight: 900,
                fontFamily: "sans-serif",
                lineHeight: 0.85,
                letterSpacing: "1px",
              }}
            >
              WET
            </Typography>
            <Typography
              className="section6-lab"
              sx={{
                color: "transparent",
                WebkitTextStroke: "2.5px #000000",
                fontSize: {
                  xs: "4.5rem",
                  sm: "6.5rem",
                  md: "8rem",
                  lg: "9.5rem",
                },
                fontWeight: 900,
                fontFamily: "sans-serif",
                lineHeight: 0.85,
                letterSpacing: "1px",
                marginTop: "0.2rem",
              }}
            >
              LAB
            </Typography>
          </Box>

          {/* Right: Journey Button & Info Text */}
          <Box
            className="section6-right"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: "2rem",
              maxWidth: { xs: "100%", md: "460px" },
              marginTop: { xs: "2rem", md: "0" },
            }}
          >
            {/* Pill button */}
            <Box
              sx={{
                display: "inline-flex",
                backgroundColor: "#d8e4cf",
                border: "2px solid #ffffff",
                borderRadius: "50px",
                padding: "0.8rem 2.2rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  backgroundColor: "#c5d4b8",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: { xs: "1rem", sm: "1.15rem" },
                  fontWeight: 500,
                  fontFamily: "inherit",
                }}
              >
                Check out our journey
              </Typography>
            </Box>

            {/* Description Text */}
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                lineHeight: 1.5,
                color: "#222222",
                fontFamily: "inherit",
                fontWeight: 400,
              }}
            >
              Dive deeper into our project and explore what lies beyond the
              surface.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Slogan Bar */}
      <Box
        sx={{
          width: "100%",
          height: "12vh",
          backgroundColor: "#e4f2ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Typography
          className="section6-slogan"
          sx={{
            fontFamily: "Prata, serif",
            fontSize: { xs: "1.1rem", sm: "1.6rem", md: "2rem", lg: "2.4rem" },
            color: "#000000",
            letterSpacing: "0.5px",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          SMARTER BEAUTY, CLEANER PRODUCTION.
        </Typography>
      </Box>
    </Box>
  );
};

export default Section6;
