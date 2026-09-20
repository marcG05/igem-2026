import { Box, Typography } from "@mui/material";
import React from "react";

const TextSection = ({title, children}: {title:string, children?:React.ReactNode}) => {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <Box id={sectionId} sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: 2,
        }}>
        
        <Typography fontSize={45} fontWeight={550} sx={{
            fontFamily: "Prata, serif",
            marginLeft: "15px",
            
        }}>
            {title}
        </Typography>

        <span style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#c7c8c9",
            marginTop: "-20px",
        }}/>


        <Box sx={{
            display: "flex",
            width: "calc(100% - 20px)", 
            mx: "auto", 
            flexDirection: "column",
            gap: 2,
        }}>
            {children}
        </Box>
        </Box>
    );
};

export default TextSection;