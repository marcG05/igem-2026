import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackTest = ` r. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror.  theeebeyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror.beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. theeebeyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. be beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. theeebeyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror.beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. theeebeyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror. beyond the mirror.yond the mirror. `;

const Back = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: "black",
        position: "absolute",
        userSelect: "none",
      }}
    >
      <Typography
        color={"#fdd9de"}
        sx={{
          overflow: "hidden",
          maxHeight: "100%",
          fontSize: "20px",
          textAlign: "justify",
          width: "100%",
        }}
      >
        {BackTest}
      </Typography>
    </Box>
  );
};

const Front = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "92%", sm: "80%" },
        height: { xs: "85%", sm: "90%" },
        borderRadius: { xs: "30px", sm: "60px" },
        zIndex: 1,
        backgroundColor: "#fffffc",
        outline: "2px black solid",
        outlineOffset: "-0.3rem",
        padding: "1rem",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        gap: -1,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
        rel="stylesheet"
      ></link>

      <Box
        sx={{
          position: "absolute",
          borderRadius: "300px",
          width: "70%",
          height: "70%",
          backgroundColor: "#dae6fa",
          overflow: "hidden",
          top: "-35%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          borderRadius: "300px",
          width: "70%",
          height: "70%",
          backgroundColor: "#dae6fa",
          overflow: "hidden",
          top: "35%",
        }}
      />
      <img
        style={{
          zIndex: 2,
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        src={`${import.meta.env.BASE_URL}tmp/cream.png`}
      />

      <Typography
        sx={{
          zIndex: 3,
          fontFamily: "'Prata', serif",
          width: "100%",
          textAlign: "left",
          userSelect: "none",
          fontSize: { xs: "2.5rem", sm: "4.5rem", md: "7rem", lg: "9.5rem" },
        }}
      >
        Beauty masks a
      </Typography>

      <Typography
        color={"#92b28a"}
        sx={{
          zIndex: 3,
          fontFamily: "'Prata', serif", // Apply the font here
          width: "100%",
          textAlign: "center",
          userSelect: "none",
          fontSize: { xs: "3.2rem", sm: "6.5rem", md: "10rem", lg: "13rem" },
        }}
      >
        hidden cost
      </Typography>
    </Box>
  );
};

const Section2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const frontCard = el.querySelector(".section2-front");
    if (!frontCard) return;

    const anim = gsap.fromTo(
      frontCard,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Back />
      <Box
        className="section2-front"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Front />
      </Box>
    </Box>
  );
};

export default Section2;
