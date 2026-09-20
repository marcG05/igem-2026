import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import GoTop from "./navigations/GoTop";

const TextNavigation = ({children} : {children?:React.ReactNode}) => {

    // Extract titles and ensure TypeScript knows they are strings
    const titles = React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((child) => (child as ReactElement<{ title?: string }>).props.title)
        .filter((title): title is string => Boolean(title));

    // Scroll handler
    const handleScroll = (title: string) => {
        const sectionId = title.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            height: "100%",
            width: "100%",
        }}>
            {/* STICKY SIDEBAR */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "10vw",
                padding: "1rem",
                top: 80,
                position: "sticky",
                alignSelf: "flex-start", // <-- Fixes the flexbox stretching issue
                maxHeight: "100vh",      // <-- Prevents the menu from breaking if it has many items
                overflowY: "auto"        // <-- Adds a scrollbar just for the menu if it exceeds screen height
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    borderLeft: "2px black solid",
                    padding: "4px",
                    width: "auto",
                    height: "auto"
                }}>
                    {titles.map((title, index) => (
                        <Box 
                            key={index} 
                            onClick={() => handleScroll(title)}
                            sx={{ 
                                cursor: 'pointer', 
                                fontWeight: 'bold',
                                '&:hover': { color: 'gray' } 
                            }}
                        >
                            {title}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* MAIN CONTENT */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "90vw",
                marginRight: "15px"
            }}>
                {children}
            </Box>

            <GoTop/>
        </Box>
    );
};

export default TextNavigation;