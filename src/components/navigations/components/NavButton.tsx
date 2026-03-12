import {Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavButton = ({title, link, children} : {title:string, link:string, children?: React.ReactNode}) =>{
    
    const [titleClick, setTitleClick] = useState(false);
    const navig = useNavigate();
    return (
        <Box sx={{
            border: "1px blue solid",
            position: "relative"
            
        }}>
            <Box sx={{
                padding: "1.1rem",
                border: "1px orange solid",
                cursor: "pointer",
                ":hover" : {
                    backgroundColor: "#d6d6d6",
                    borderRadius: "1rem",
                    transition: "all 1s ease-out",
                },
                transition: "all 1s ease-out",
            }} onClick={()=>{
                setTitleClick(true);
                if(!children){
                    navig(link);
                    return;
                }

            }}>
            <Typography>
                {title}
            </Typography>
            </Box>

            <Box sx={{
                display: titleClick && children ? "flex" : "none",
                flexDirection: "column",
                position: "absolute",
                zIndex: 100,
                width: "10rem",
                border: "1px green solid",
                gap: 2
            }} onMouseLeave={()=>{
                setTitleClick(false);
            }}>
                {
                    children
                }
            </Box>
        </Box>
    );
}

export default NavButton;