import { Box } from "@mui/material";
import React from "react";

const WaveBox = ({ children }: { children?: React.ReactNode }) => (
  <Box sx={{
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    //backgroundImage: "linear-gradient(to top, #e4f2ff 90%, #ffffff 100%)",
    overflow: "hidden",
  }}>
    <Box sx={{
      width: "1000px",
      height: "1025px",
      position: "absolute",
      top: "-25%",
      left: "50%",
      marginLeft: "-500px",
      marginTop: "-500px",
      borderRadius: "35%",
      background: "rgba(255, 255, 255, .75)",
      transform: "rotate(53deg)"
    }}/>

    {children}
  </Box>
);

const Section4 = () => {
    return (
        <Box sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            position: "relative"
        }}>
            <WaveBox />
        </Box>
    );
}

export default Section4;