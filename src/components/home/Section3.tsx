import { Box, Typography } from "@mui/material";
import React from "react";
const BoxSection = ({children, clickable=false, width="30rem", height="30rem"}:{children?:React.ReactNode, clickable?:boolean, width?: string| number, height?: string | number}) =>{
    return (
        <Box sx={{
            display: "flex",
            padding: "1rem",
            width: width,
            height: height,
            backgroundColor: "#d8e4cf",
            outline: "1px white solid",
            outlineOffset: "-5px",
            borderRadius: "30px",
            cursor: clickable ? "pointer" : "auto",
            position: "relative",
            ":hover" : {
                boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                transition: "0.5s ease"

            },
            transition: "0.5s ease"
        }}>
            {children}

            {clickable &&
                <Typography sx={{
                    color: "#706d6d",
                    fontSize: "10px",
                    width: "100%",
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px",
                    left: 0,
                    userSelect: "none"
                }}>
                    Click for more details
                </Typography>
            }
        </Box>
    );
}

const HoverText = () => {
  return (
    <Box sx={{
      display: "flex",
      width: "14rem",
      height: "4rem",
      flexDirection: "column",
      position: "absolute",
      borderRadius: "3rem",
      backgroundColor: "#e4f2ff",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 4,
      top: "1%",
      left: "calc(50% - 7rem)",  // ← fixed
    }}>
      <Typography fontSize={25} fontWeight={550}>
        Hyaluronic acid
      </Typography>
      <Typography fontSize={15}>
        an established benchmark
      </Typography>
    </Box>
  );
}

const handStyle = (duration:string, width:string, height:string, offset:string) => ({
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
    to:   { transform: "rotate(0deg)" },
  },
});

const Clock = () => (
  <Box sx={{
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "40rem",
    top: "1%",
    zIndex: -1
  }}>
    <Box sx={{
      width: "40rem",
      height: "40rem",
      borderRadius: "100%",
      border: "1rem #6d6d6d solid",
      position: "absolute",
      left: "1%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>

      <Box sx={handStyle("30s", "0.75rem", "11rem", "0.375rem")} /> {/* hour   — 12h */}
      <Box sx={handStyle("5s",  "0.5rem",  "15rem", "0.25rem")}  /> {/* minute — 60m */}
      <Box sx={handStyle("1s",    "0.2rem",  "16rem", "0.1rem")}   /> {/* second — 60s */}

      <Box sx={{
        width: "1rem",
        height: "1rem",
        borderRadius: "100%",
        backgroundColor: "#6d6d6d",
        position: "absolute",
        zIndex: 2,
      }}/>

    </Box>
  </Box>
);

const Section3 = () =>{
    return(
        <Box sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            position: "relative",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Clock />
            <Typography sx={{
                fontFamily: "Prata, serif",
                textAlign: "center",
                width : "100%",
                fontSize: 100,
                
            }}>
                The Biology of Yesterday
            </Typography>
            <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center",
                position: "relative"
            }}>
                <HoverText />
                <BoxSection clickable>
                    <ul style={{
                        margin: 0,
                        padding: "1rem", // Adjust padding for spacing from edges
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around", // Distributes items evenly
                        listStylePosition: "inside"
                    }}>
                        <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            Dominates the moisturizer industry
                        </li>
                        <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            Holds up to 500× its weight in water
                        </li>
                        <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            Industrial production of hyaluronic acid is virtually absent in Canada
                        </li>
                    </ul>
                </BoxSection>
                <BoxSection width={"20rem"} height={"20rem"}/>
                <BoxSection clickable>
                    <ul style={{
                        margin: 0,
                        padding: "1rem", // Adjust padding for spacing from edges
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around", // Distributes items evenly
                        listStylePosition: "inside"
                    }}>
                        <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>Non cruelty-free</li>
                        <li style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>Big environmental impact as its production generates 94% of by-products</li>
                    </ul>
                </BoxSection>
            </Box>
        </Box>
    );
}

export default Section3;