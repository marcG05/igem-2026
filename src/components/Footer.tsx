import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// --- SPONSORS ---
const CUSTOM_LOGOS: string[] = [];

// Default Mockup Logos drawn as high-fidelity SVGs (used if the user hasn't added files yet)
const FAEE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <g transform="translate(10, 10)">
    <path d="M 25,5 L 25,15 M 20,10 L 30,10" stroke="#4a8b54" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 25,25 L 25,35 M 20,30 L 30,30" stroke="#4a8b54" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 25,45 L 25,55 M 20,50 L 30,50" stroke="#4a8b54" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 12,15 L 12,25 M 7,20 L 17,20" stroke="#8cb85c" stroke-width="2" stroke-linecap="round"/>
    <path d="M 12,35 L 12,45 M 7,40 L 17,40" stroke="#8cb85c" stroke-width="2" stroke-linecap="round"/>
    <path d="M 38,15 L 38,25 M 33,20 L 43,20" stroke="#8cb85c" stroke-width="2" stroke-linecap="round"/>
    <path d="M 38,35 L 38,45 M 33,40 L 43,40" stroke="#8cb85c" stroke-width="2" stroke-linecap="round"/>
    <path d="M -1,25 L -1,35 M -6,30 L 4,30" stroke="#a2c86b" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 51,25 L 51,35 M 46,30 L 56,30" stroke="#a2c86b" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  <text x="75" y="28" font-family="sans-serif" font-size="14" fill="#333333">Fonds d’appui à</text>
  <text x="75" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#388e3c">l’engagement étudiant <tspan fill="#8cb85c">(FAEE)</tspan></text>
  <text x="75" y="60" font-family="sans-serif" font-size="10" fill="#666666">de l’Université de Sherbrooke</text>
</svg>
`;

const AGEG_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
  <g transform="translate(10, 5)">
    <path d="M 10,65 C 10,35 30,10 50,40 C 40,25 25,35 15,65" fill="#fbc02d" />
    <path d="M 40,65 C 30,35 15,20 30,5 C 25,20 28,45 42,65" fill="#1b5e20" />
  </g>
  <text x="70" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#1b5e20">AGEG</text>
  <text x="70" y="48" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1b5e20" letter-spacing="0.5">Ingénierie</text>
  <text x="70" y="60" font-family="sans-serif" font-size="11" fill="#1b5e20" letter-spacing="0.5">Sherbrooke</text>
</svg>
`;

const OIQ_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <g fill="#0277bd">
    <rect x="10" y="20" width="4" height="4" />
    <rect x="18" y="20" width="4" height="4" />
    <rect x="26" y="20" width="4" height="4" />
    <rect x="34" y="20" width="4" height="4" />
    <rect x="42" y="20" width="4" height="4" />
    <rect x="10" y="52" width="4" height="4" />
    <rect x="18" y="52" width="4" height="4" />
    <rect x="26" y="52" width="4" height="4" />
    <rect x="34" y="52" width="4" height="4" />
    <rect x="42" y="52" width="4" height="4" />
    <rect x="10" y="28" width="4" height="4" />
    <rect x="10" y="36" width="4" height="4" />
    <rect x="10" y="44" width="4" height="4" />
    <rect x="42" y="28" width="4" height="4" />
    <rect x="42" y="36" width="4" height="4" />
    <rect x="42" y="44" width="4" height="4" />
    <rect x="2" y="12" width="2" height="2" opacity="0.5" />
    <rect x="6" y="28" width="2" height="2" opacity="0.5" />
    <rect x="18" y="60" width="2" height="2" opacity="0.5" />
    <rect x="50" y="44" width="2" height="2" opacity="0.5" />
  </g>
  <text x="60" y="32" font-family="sans-serif" font-size="16" fill="#000000">Ordre</text>
  <text x="60" y="48" font-family="sans-serif" font-size="15" font-weight="bold" fill="#000000">des ingénieurs</text>
  <text x="60" y="64" font-family="sans-serif" font-size="16" fill="#000000">du Québec</text>
</svg>
`;

const ALL_LOGOS = [
  `data:image/svg+xml;utf8,${encodeURIComponent(FAEE_SVG)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(AGEG_SVG)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(OIQ_SVG)}`,
  ...CUSTOM_LOGOS,
];

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Footer = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (outerRef.current && innerRef.current) {
        const outerWidth = outerRef.current.clientWidth;
        const innerWidth = innerRef.current.scrollWidth;
        // Set shouldScroll to true if the total width of the logos list overflows the container card
        setShouldScroll(innerWidth > outerWidth);
      }
    };

    // Execute check after a short timeout to allow styling layouts to settle
    const timer = setTimeout(checkOverflow, 120);
    window.addEventListener("resize", checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  // Double render is only used when infinite scrolling is active
  const logosToRender = shouldScroll ? [...ALL_LOGOS, ...ALL_LOGOS] : ALL_LOGOS;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        padding: { xs: "3rem 1rem 2rem 1rem", md: "4rem 2rem 3rem 2rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Top Supporters Divider */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          mb: "3rem",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        />
        <Typography
          sx={{
            mx: { xs: 2, sm: 3 },
            color: "#ffffff",
            letterSpacing: "2.5px",
            fontSize: { xs: "0.85rem", sm: "1.1rem", md: "1.3rem" },
            fontWeight: 400,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          WE SINCERELY THANK OUR SUPPORTERS
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        />
      </Box>

      {/* Sponsor Banner Row with Pink Pointer Arrow */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "3.5rem",
        }}
      >
        {/* Sponsor Logos Container Card */}
        <Box
          ref={outerRef}
          sx={{
            width: "90%",
            backgroundColor: "#ffffff",
            borderRadius: "30px",
            padding: "1.5rem 3rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
            ml: { xs: "1.5rem", sm: "2.5rem", md: "4rem" },
          }}
        >
          {/* Scrolling or Static Spaced Logos Container */}
          <Box
            ref={innerRef}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "2.5rem", md: "5rem" },
              width: shouldScroll ? "max-content" : "100%",
              justifyContent: shouldScroll ? "flex-start" : "space-evenly",
              flexWrap: "nowrap",
              animation: shouldScroll
                ? `${marqueeAnimation} 22s linear infinite`
                : "none",
              ":hover": {
                animationPlayState: shouldScroll ? "paused" : "running",
              },
            }}
          >
            {logosToRender.map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo}
                alt={`Sponsor Logo ${index}`}
                sx={{
                  height: { xs: "38px", md: "52px" },
                  width: "auto",
                  objectFit: "contain",
                  userSelect: "none",
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Follow Us Divider */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          mb: "2rem",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        />
        <Typography
          sx={{
            mx: { xs: 2, sm: 3 },
            color: "#ffffff",
            letterSpacing: "2.5px",
            fontSize: { xs: "0.85rem", sm: "1.1rem", md: "1.3rem" },
            fontWeight: 400,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          FOLLOW US
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        />
      </Box>

      {/* Social Media Link Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: "1.5rem", sm: "2.5rem" },
          justifyContent: "center",
          mb: "3.5rem",
        }}
      >
        {/* Facebook */}
        <Box
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "3rem", sm: "3.5rem" },
            height: { xs: "3rem", sm: "3.5rem" },
            borderRadius: "50%",
            backgroundColor: "#1877f2",
            color: "#ffffff",
            transition: "transform 0.2s, filter 0.2s",
            ":hover": {
              transform: "scale(1.1)",
              filter: "brightness(1.1)",
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }} />
        </Box>

        {/* Instagram */}
        <Box
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "3rem", sm: "3.5rem" },
            height: { xs: "3rem", sm: "3.5rem" },
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
            color: "#ffffff",
            transition: "transform 0.2s, filter 0.2s",
            ":hover": {
              transform: "scale(1.1)",
              filter: "brightness(1.1)",
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }} />
        </Box>

        {/* LinkedIn */}
        <Box
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "3rem", sm: "3.5rem" },
            height: { xs: "3rem", sm: "3.5rem" },
            borderRadius: "50%",
            backgroundColor: "#0077b5",
            color: "#ffffff",
            transition: "transform 0.2s, filter 0.2s",
            ":hover": {
              transform: "scale(1.1)",
              filter: "brightness(1.1)",
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }} />
        </Box>
      </Box>

      {/* Footer Credits */}
      <Box
        sx={{
          textAlign: "center",
          color: "#aaaaaa",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            lineHeight: 1.6,
            padding: "0 1rem",
          }}
        >
          © 2026 - Content on this site is licensed under a Creative Commons
          Attribution 4.0 International license.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            lineHeight: 1.6,
            padding: "0 1rem",
          }}
        >
          The repository used to create this website is available at{" "}
          <Box
            component="a"
            href="https://gitlab.igem.org/2026/usherbrooke"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#ffffff",
              textDecoration: "underline",
              ":hover": {
                color: "#cccccc",
              },
            }}
          >
            gitlab.igem.org/2026/usherbrooke
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
