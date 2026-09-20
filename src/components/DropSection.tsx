import { Box, Typography, Collapse } from "@mui/material";
import React, { useState } from "react"

const DropSection = ({title, children} : {title:string, children?:React.ReactNode}) =>{
    const [visible, setVisible] = useState(false);
    return (
        <Box sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                width: "100%",
                height: "4rem",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#d8e4cf",
                borderRadius: "50px",
            }}
            onClick={() => setVisible(prev => !prev)}>
                <Box 
                    sx={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "15px solid black",
                        transform: visible ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        marginLeft: "15px"
                    }} 
                />
                
                <Typography fontWeight={550}>
                    {title}
                </Typography>
            </Box>

            <Collapse in={visible}>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "column",
                    width: "calc(100% - 45px)",
                    marginTop: "10px", 
                    mx: "auto",
                    borderLeft: "3px #c7d3f1 solid",
                    padding: "12px"
                }}>
                    {children}
                </Box>
            </Collapse>
        </Box>
    );
};

export default DropSection;