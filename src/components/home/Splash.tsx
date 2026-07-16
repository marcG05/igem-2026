import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const DROPLETS = [
  { id: 1, cx: "8%", cy: "15%", r: 12, depth: "focus" },
  { id: 2, cx: "18%", cy: "45%", r: 24, depth: "fg" },
  { id: 3, cx: "25%", cy: "75%", r: 16, depth: "focus" },
  { id: 4, cx: "32%", cy: "22%", r: 8, depth: "bg" },
  { id: 5, cx: "42%", cy: "60%", r: 20, depth: "focus" },
  { id: 6, cx: "52%", cy: "80%", r: 14, depth: "bg" },
  { id: 7, cx: "62%", cy: "12%", r: 28, depth: "fg" },
  { id: 8, cx: "70%", cy: "50%", r: 10, depth: "focus" },
  { id: 9, cx: "78%", cy: "85%", r: 22, depth: "focus" },
  { id: 10, cx: "88%", cy: "30%", r: 18, depth: "focus" },
  { id: 11, cx: "94%", cy: "68%", r: 12, depth: "bg" },
  { id: 12, cx: "5%", cy: "88%", r: 26, depth: "fg" },
  { id: 13, cx: "14%", cy: "30%", r: 9, depth: "focus" },
  { id: 14, cx: "22%", cy: "60%", r: 15, depth: "focus" },
  { id: 15, cx: "30%", cy: "92%", r: 11, depth: "bg" },
  { id: 16, cx: "38%", cy: "40%", r: 25, depth: "focus" },
  { id: 17, cx: "48%", cy: "28%", r: 7, depth: "bg" },
  { id: 18, cx: "56%", cy: "68%", r: 19, depth: "focus" },
  { id: 19, cx: "66%", cy: "35%", r: 17, depth: "focus" },
  { id: 20, cx: "74%", cy: "90%", r: 13, depth: "bg" },
  { id: 21, cx: "82%", cy: "20%", r: 21, depth: "focus" },
  { id: 22, cx: "86%", cy: "72%", r: 15, depth: "focus" },
  { id: 23, cx: "90%", cy: "10%", r: 9, depth: "bg" },
  { id: 24, cx: "96%", cy: "52%", r: 23, depth: "fg" },
];

const Splash = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (
      !bg ||
      !titleRef.current ||
      !subtitleRef.current ||
      !buttonRef.current
    ) {
      return;
    }

    // Intro timeline
    const tl = gsap.timeline();

    tl.fromTo(
      bg,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" },
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
        "-=0.7",
      );

    // Dynamic background blob movements (simulating biological bodies below the focal plane)
    const blob1 = gsap.to(".bg-blob-1", {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const blob2 = gsap.to(".bg-blob-2", {
      x: "random(-70, 70)",
      y: "random(-70, 70)",
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const blob3 = gsap.to(".bg-blob-3", {
      x: "random(-45, 45)",
      y: "random(-45, 45)",
      duration: 13,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Slow drifting for waves/threads
    const wave1 = gsap.to(".bg-wave-1", {
      y: "+=15",
      x: "+=8",
      skewX: 2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const wave2 = gsap.to(".bg-wave-2", {
      y: "-=15",
      x: "-=8",
      skewX: -2,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Drifting bubbles/droplets with focus-depth dynamics
    const bubbles = bg.querySelectorAll(".bg-bubble");
    const bubbleTweens: gsap.core.Tween[] = [];

    bubbles.forEach((bubble, idx) => {
      // Out-of-focus background droplets drift slower and further
      // In-focus droplets sway gently near their anchor points
      const isBg = bubble.getAttribute("filter") === "url(#bgBlur)";
      const isFg = bubble.getAttribute("filter") === "url(#fgBlur)";

      let speedScale = 1;
      let rangeScale = 1;
      if (isBg) {
        speedScale = 1.3;
        rangeScale = 1.8;
      } else if (isFg) {
        speedScale = 0.8;
        rangeScale = 1.4;
      }

      const xOffset =
        (idx % 2 === 0 ? 1 : -1) * (12 + (idx % 4) * 6) * rangeScale;
      const yOffset = (30 + (idx % 4) * 12) * rangeScale;
      const duration = (5.5 + (idx % 5) * 1.1) * speedScale;

      const t = gsap.to(bubble, {
        y: `-=${yOffset}`,
        x: `+=${xOffset}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: (idx % 3) * 0.5,
      });
      bubbleTweens.push(t);
    });

    return () => {
      tl.kill();
      blob1.kill();
      blob2.kill();
      blob3.kill();
      wave1.kill();
      wave2.kill();
      bubbleTweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        userSelect: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
        rel="stylesheet"
      ></link>

      {/* SVG Animated Background (Microscope View) */}
      <Box
        ref={bgRef}
        sx={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMidSlice"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <defs>
            {/* Background Microscope Radial Vignette */}
            <radialGradient id="splashBg" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#f8f9fa" />
              <stop offset="45%" stopColor="#ebeef2" />
              <stop offset="85%" stopColor="#d5dce6" />
              <stop offset="100%" stopColor="#b8c3d1" />
            </radialGradient>

            {/* Lens outer dark circle vignette */}
            <radialGradient id="lensVignette" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="transparent" stopOpacity="0" />
              <stop offset="70%" stopColor="transparent" stopOpacity="0" />
              <stop offset="92%" stopColor="#374151" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0.45" />
            </radialGradient>

            {/* Gaussian blurs for depth-of-field microscope simulation */}
            <filter id="blobBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="95" />
            </filter>

            <filter id="bgBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4.5" />
            </filter>

            <filter id="fgBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8.5" />
            </filter>

            {/* Premium Microscope Droplet shader with refraction ring and highlight */}
            <radialGradient id="droplet" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="18%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#d1d5db" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4b5563" stopOpacity="0.7" />
            </radialGradient>
          </defs>

          {/* Base Background Vignette */}
          <rect width="100%" height="100%" fill="url(#splashBg)" />

          {/* Out-of-focus background organic bodies */}
          <circle
            className="bg-blob-1"
            cx="25%"
            cy="35%"
            r="380"
            fill="#cbd5e1"
            opacity="0.5"
            filter="url(#blobBlur)"
          />
          <circle
            className="bg-blob-2"
            cx="75%"
            cy="20%"
            r="440"
            fill="#e2e8f0"
            opacity="0.65"
            filter="url(#blobBlur)"
          />
          <circle
            className="bg-blob-3"
            cx="50%"
            cy="80%"
            r="370"
            fill="#94a3b8"
            opacity="0.25"
            filter="url(#blobBlur)"
          />

          {/* Floating thin curves representing microscope slide details or fibers */}
          <path
            className="bg-wave-1"
            d="M -100,300 Q 300,100 700,400 T 1500,200"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2.5"
          />
          <path
            className="bg-wave-2"
            d="M -100,500 Q 400,700 800,350 T 1500,600"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />

          {/* Droplets rendering with customized depth-of-field properties */}
          {DROPLETS.map((drop) => {
            let filterUrl = undefined;
            let opacity = 0.85;
            if (drop.depth === "bg") {
              filterUrl = "url(#bgBlur)";
              opacity = 0.38;
            } else if (drop.depth === "fg") {
              filterUrl = "url(#fgBlur)";
              opacity = 0.55;
            }
            return (
              <circle
                key={drop.id}
                className="bg-bubble"
                cx={drop.cx}
                cy={drop.cy}
                r={drop.r}
                fill="url(#droplet)"
                stroke="rgba(55, 65, 81, 0.65)"
                strokeWidth="1"
                filter={filterUrl}
                opacity={opacity}
              />
            );
          })}

          {/* Microscope outer eyepiece vignette mask overlay */}
          <rect width="100%" height="100%" fill="url(#lensVignette)" />
        </svg>
      </Box>

      {/* Title */}
      <div
        ref={titleRef}
        style={{
          zIndex: 10,
          padding: "0 1rem",
        }}
      >
        <Typography
          sx={{
            position: "relative",
            fontFamily: "Prata, serif",
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "3.5rem", md: "5rem", lg: "5.8rem" },
            fontWeight: 150,
            lineHeight: 1.2,
          }}
        >
          OPTIMIZATION OF POLYGLUTAMIC ACID PRODUCTION
        </Typography>
      </div>

      {/* Subtitle & Action Button */}
      <Box
        sx={{
          zIndex: 10,
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "90vw",
          margin: "2rem 1rem 1rem 1rem",
          gap: { xs: "2rem", md: "0" },
        }}
      >
        <div ref={subtitleRef}>
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: "35rem" },
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "0.95rem", sm: "1.2rem" },
              lineHeight: 1.5,
            }}
          >
            as a biotechnological alternative to hyaluronic acid for innovative
            and responsible cosmetics.
          </Typography>
        </div>

        <div ref={buttonRef}>
          <Typography
            sx={{
              backgroundColor: "#e4f2ff",
              padding: { xs: "0.8rem 2rem", sm: "1.2rem 2.5rem" },
              border: "0.4rem white solid",
              borderRadius: "4rem",
              cursor: "pointer",
              fontSize: { xs: "0.95rem", sm: "1.2rem" },
              fontWeight: 500,
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              ":hover": {
                backgroundColor: "#d8e8fb",
              },
            }}
          >
            Our project
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Splash;
