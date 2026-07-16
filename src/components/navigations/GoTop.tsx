import { useState, useEffect } from "react";
import { Box, Fade } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const GoTop = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBox(true);
      } else {
        setShowBox(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={showBox}>
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          top: "85%",
          right: "20px",
          zIndex: 9999,
          width: "5rem", // Set size on the container
          height: "5rem", // Set size on the container
          backgroundColor: "#c7def1c4",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(90deg)",
        }}
      >
        {/* The icon now sits inside the centered flex container */}
        <ArrowBackIosIcon
          sx={{
            fontSize: "3.5rem", // Control icon size here
            marginLeft: "0.5rem", // Slight adjustment to fix SVG's natural offset
          }}
        />
      </Box>
    </Fade>
  );
};

export default GoTop;
