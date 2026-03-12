import {Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {gsap} from 'gsap';

const NavButton = ({title, link, children} : {title:string, link:string, children?: React.ReactNode}) =>{
    
    const [titleClick, setTitleClick] = useState(false);
    const navig = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        if (!dropdownRef.current || !children) return;
        if (titleClick) {
            gsap.to(dropdownRef.current, { opacity: 1, y: 0, duration: 0.5, visibility: "visible" });
        } else {
            gsap.to(dropdownRef.current, { opacity: 0, y: -10, duration: 1, visibility: "hidden" });
        }
    }, [titleClick]);

    return (
        <Box sx={{
            position: "relative"
        }}>
            <Box sx={{
                padding: "1.1rem",
                cursor: "pointer",
                backgroundColor: titleClick && children ? "#fafafa" : "transparent",
                borderRadius: titleClick && children ? "1rem" : "0",
                boxShadow: titleClick && children ? "10px 5px 5px #f0f0f0" : "none",
                transition: "all 0.4s ease-out",
                ":hover": {
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    boxShadow: "10px 5px 5px #f0f0f0",
                },
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

            <div ref={dropdownRef} style={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                opacity: 0,
                visibility: "hidden",
                zIndex: 100,
                width: "10rem",
                boxShadow: "10px 5px 5px #41414146",
                backgroundColor: "#fafafa",
                gap: "1rem"
            }} onMouseLeave={() => {
                setTitleClick(false);
            }}>
                {children}
            </div>
        </Box>
    );
}

export default NavButton;