import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BoxSection = ({
  children,
  clickable = false,
  width = "30rem",
  height = "30rem",
}: {
  children?: React.ReactNode;
  clickable?: boolean;
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "1rem",
        width: { xs: "90%", md: width },
        height: { xs: "auto", md: height },
        minHeight: { xs: "12rem", md: "none" },
        backgroundColor: "#d8e4cf",
        outline: "1px white solid",
        outlineOffset: "-5px",
        borderRadius: "30px",
        cursor: clickable ? "pointer" : "auto",
        position: "relative",
        ":hover": {
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          transition: "0.5s ease",
        },
        transition: "0.5s ease",
      }}
    >
      {children}

      {clickable && (
        <Typography
          sx={{
            color: "#706d6d",
            fontSize: "10px",
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: "10px",
            left: 0,
            userSelect: "none",
          }}
        >
          Click for more details
        </Typography>
      )}
    </Box>
  );
};

const HoverText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "14rem",
        height: "4rem",
        flexDirection: "column",
        position: { xs: "relative", md: "absolute" },
        borderRadius: "3rem",
        backgroundColor: "#e4f2ff",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 4,
        top: { xs: "0", md: "1%" },
        left: { xs: "auto", md: "calc(50% - 7rem)" }, // ← fixed
        mb: { xs: "1.5rem", md: "0" },
      }}
    >
      <Typography fontSize={25} fontWeight={550}>
        Hyaluronic acid
      </Typography>
      <Typography fontSize={15}>an established benchmark</Typography>
    </Box>
  );
};

const handStyle = (
  duration: string,
  width: string,
  height: string,
  offset: string,
) => ({
  width,
  height,
  backgroundColor: "#6d6d6d",
  borderRadius: "0.75rem",
  position: "absolute",
  bottom: "50%",
  left: `calc(50% - ${offset})`,
  transformOrigin: "bottom center",
  animation: `spin ${duration} linear infinite`,
  "@keyframes spin": {
    from: { transform: "rotate(360deg)" },
    to: { transform: "rotate(0deg)" },
  },
});

const Clock = () => (
  <Box
    sx={{
      position: "absolute",
      display: "flex",
      width: "100%",
      height: { xs: "20rem", sm: "30rem", md: "40rem" },
      top: "1%",
      zIndex: -1,
    }}
  >
    <Box
      sx={{
        width: "40rem",
        height: "40rem",
        borderRadius: "100%",
        border: "1rem #6d6d6d solid",
        position: "absolute",
        left: { xs: "50%", md: "1%" },
        transform: {
          xs: "translate(-50%, 0) scale(0.45)",
          sm: "translate(-50%, 0) scale(0.7)",
          md: "none",
        },
        transformOrigin: "top center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={handStyle("30s", "0.75rem", "11rem", "0.375rem")} />{" "}
      {/* hour   — 12h */}
      <Box sx={handStyle("5s", "0.5rem", "15rem", "0.25rem")} />{" "}
      {/* minute — 60m */}
      <Box sx={handStyle("1s", "0.2rem", "16rem", "0.1rem")} />{" "}
      {/* second — 60s */}
      <Box
        sx={{
          width: "1rem",
          height: "1rem",
          borderRadius: "100%",
          backgroundColor: "#6d6d6d",
          position: "absolute",
          zIndex: 2,
        }}
      />
    </Box>
  </Box>
);

const Section3 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const title = el.querySelector(".section3-title");
    const cards = el.querySelectorAll(".section3-card");

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

    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        width: "100vw",
        height: { xs: "auto", md: "100vh" },
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "6rem 1rem 4rem 1rem", md: "0" },
        boxSizing: "border-box",
      }}
    >
      <Clock />
      <Typography
        className="section3-title"
        sx={{
          fontFamily: "Prata, serif",
          textAlign: "center",
          width: "100%",
          fontSize: { xs: "2.5rem", sm: "4.5rem", md: "6.2rem" },
          mb: { xs: "2rem", md: "3rem" },
        }}
      >
        The Biology of Yesterday
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          gap: { xs: "3rem", md: "0" },
        }}
      >
        <HoverText />

        <Box
          className="section3-card"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <BoxSection clickable>
            <ul
              style={{
                margin: 0,
                padding: "1rem", // Adjust padding for spacing from edges
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around", // Distributes items evenly
                listStylePosition: "inside",
              }}
            >
              <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                Dominates the moisturizer industry
              </li>
              <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                Holds up to 500× its weight in water
              </li>
              <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                Industrial production of hyaluronic acid is virtually absent in
                Canada
              </li>
            </ul>
          </BoxSection>
        </Box>

        <Box
          className="section3-card"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <BoxSection width={"20rem"} height={"20rem"} />
        </Box>

        <Box
          className="section3-card"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <BoxSection clickable>
            <ul
              style={{
                margin: 0,
                padding: "1rem", // Adjust padding for spacing from edges
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around", // Distributes items evenly
                listStylePosition: "inside",
              }}
            >
              <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                Non cruelty-free
              </li>
              <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                Big environmental impact as its production generates 94% of
                by-products
              </li>
            </ul>
          </BoxSection>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;
