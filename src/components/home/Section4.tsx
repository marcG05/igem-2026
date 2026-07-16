import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const title = el.querySelector(".section4-title");
    const leftCard = el.querySelector(".section4-left-card");
    const rightCard = el.querySelector(".section4-right-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    if (title) {
      tl.fromTo(
        title,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );
    }
    if (leftCard) {
      tl.fromTo(
        leftCard,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
        "-=0.4",
      );
    }
    if (rightCard) {
      tl.fromTo(
        rightCard,
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          ease: "back.out(1.2)",
        },
        "-=0.7",
      );
    }
  }, []);

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
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#e4f2ff",
          borderBottomLeftRadius: { xs: "80px", md: "150px" },
          borderBottomRightRadius: { xs: "80px", md: "150px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "6rem 1rem 4rem 1rem", md: "8rem 2rem 6rem 2rem" },
          boxSizing: "border-box",
        }}
      >
        {/* Wave Mask at the Top */}
        <Box
          sx={{
            position: "absolute",
            top: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "120px", display: "block" }}
          >
            <path
              fill="#ffffff"
              d="M0,0 L1440,0 L1440,40 C1200,80 960,10 720,70 C480,130 240,20 0,50 Z"
            ></path>
          </svg>
        </Box>

        {/* Section Title */}
        <Typography
          className="section4-title"
          sx={{
            fontFamily: "Prata, serif",
            textAlign: "center",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem", lg: "6.5rem" },
            color: "#000000",
            mb: { xs: "3rem", md: "5rem" },
            zIndex: 2,
          }}
        >
          The Biology of Today
        </Typography>

        {/* Content Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "4rem", md: "0" },
            width: "100%",
            maxWidth: "1200px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Card */}
          <Box
            className="section4-left-card"
            sx={{
              display: "flex",
              padding: {
                xs: "3.5rem 1.5rem 2rem 1.5rem",
                md: "4.5rem 2.5rem 2rem 2.5rem",
              },
              width: { xs: "100%", sm: "30rem", md: "34rem" },
              height: { xs: "auto", md: "17rem" },
              backgroundColor: "#ffffff",
              border: "2px solid #000000",
              borderRadius: "40px",
              position: "relative",
              boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            {/* Asymmetric Fluid Blob Label */}
            <Box
              sx={{
                position: "absolute",
                top: "-2.25rem",
                left: { xs: "5%", md: "2.5rem" },
                width: "18rem",
                height: "4.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background:
                  "radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.98) 0%, rgba(245, 248, 253, 0.9) 40%, rgba(220, 232, 250, 0.7) 75%, rgba(195, 215, 245, 0.5) 100%)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "160px 130px 150px 140px / 75px 70px 80px 75px",
                boxShadow:
                  "inset -5px -5px 10px rgba(0, 0, 0, 0.04), inset 5px 5px 12px rgba(255, 255, 255, 0.95), 0 10px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.04)",
                zIndex: 3,
                padding: "0.5rem 1rem",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#000000",
                  fontFamily: "inherit",
                  lineHeight: 1.2,
                }}
              >
                Polyglutamic acid
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#444444",
                  fontFamily: "inherit",
                  marginTop: "2px",
                }}
              >
                an emerging alternative
              </Typography>
            </Box>

            {/* Card Content Text */}
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                lineHeight: 1.6,
                color: "#333333",
                fontFamily: "inherit",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>

            {/* Click indicator */}
            <Typography
              sx={{
                color: "#999999",
                fontSize: "11px",
                textAlign: "center",
                cursor: "pointer",
                userSelect: "none",
                width: "100%",
                marginTop: "1rem",
                transition: "color 0.2s",
                ":hover": {
                  color: "#666666",
                },
              }}
            >
              click for more details
            </Typography>
          </Box>

          {/* Right Card (Circle with SVG Skin Layers) */}
          <Box
            className="section4-right-card"
            sx={{
              width: { xs: "18rem", sm: "22rem", md: "24rem" },
              height: { xs: "18rem", sm: "22rem", md: "24rem" },
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fff3f5 0%, #e6f2ff 100%)",
              border: "10px solid #ffffff",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              position: "relative",
              marginLeft: { xs: "0", md: "-3.5rem" },
              marginTop: { xs: "-1.5rem", md: "0" },
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "visible",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient
                  id="dropGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7ecbfb" />
                  <stop offset="100%" stopColor="#3b8ff3" />
                </linearGradient>
                <filter
                  id="dropShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="6"
                    stdDeviation="6"
                    floodColor="#1e5da6"
                    floodOpacity="0.25"
                  />
                </filter>
                <filter
                  id="layerShadow"
                  x="-10%"
                  y="-10%"
                  width="120%"
                  height="120%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="4"
                    floodColor="#000000"
                    floodOpacity="0.08"
                  />
                </filter>
              </defs>

              {/* Sparkle top-right */}
              <path
                d="M245,85 Q245,95 235,95 Q245,95 245,105 Q245,95 255,95 Q245,95 245,85 Z"
                fill="#4fa5ff"
              />

              {/* Sparkle middle-left */}
              <path
                d="M55,145 Q55,155 45,155 Q55,155 55,165 Q55,155 65,155 Q55,155 55,145 Z"
                fill="#4fa5ff"
              />

              {/* Water Droplet */}
              <g filter="url(#dropShadow)">
                <path
                  d="M150,60 C165,95 178,110 178,125 C178,141 165,154 150,154 C135,154 122,141 122,125 C122,110 135,95 150,60 Z"
                  fill="url(#dropGradient)"
                />
                <path
                  d="M132,122 C132,115 137,105 144,98 C141,102 138,109 138,118 C138,122 136,125 132,122 Z"
                  fill="#ffffff"
                  opacity="0.65"
                />
                <circle cx="160" cy="138" r="5" fill="#ffffff" opacity="0.5" />
              </g>

              {/* Skin Layers */}
              <g filter="url(#layerShadow)">
                {/* Hypodermis */}
                <rect
                  x="50"
                  y="222"
                  width="200"
                  height="42"
                  rx="8"
                  fill="#ebd4b3"
                />
                <circle cx="65" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="85" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="105" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="125" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="145" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="165" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="185" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="205" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="225" cy="235" r="4.5" fill="#c3855c" />
                <circle cx="245" cy="235" r="4.5" fill="#c3855c" />

                <circle cx="75" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="95" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="115" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="135" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="155" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="175" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="195" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="215" cy="252" r="4.5" fill="#c3855c" />
                <circle cx="235" cy="252" r="4.5" fill="#c3855c" />

                {/* Dermis */}
                <rect
                  x="50"
                  y="198"
                  width="200"
                  height="18"
                  rx="4"
                  fill="#c17c5b"
                />

                {/* Epidermis */}
                <rect
                  x="50"
                  y="172"
                  width="200"
                  height="20"
                  rx="5"
                  fill="#ee969e"
                />
              </g>

              {/* Sparkle on Skin */}
              <path
                d="M215,160 Q215,170 205,170 Q215,170 215,180 Q215,170 225,170 Q215,170 215,160 Z"
                fill="#4fa5ff"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
