import React from "react";
import { Grid, Typography } from "@mui/material";
import { LeftBanner } from "./LeftBanner";

// This type defines the props for components that accept children
type ParentProps = {
    children: React.ReactNode;
}

// Main layout component: wraps the page with a sidebar (LeftBanner) and main content (RenderPage)
export function ContentPage({children}: ParentProps){
    // Filter out children that shouldn't appear in the sidebar
    const sidebarSections = React.Children.toArray(children).filter((child: any) => 
        !child.props?.excludeFromSidebar
    );

    return (
        <Grid sx={{
            display: "flex",
            width: "100%",
            height: "auto",
        }}>
            <LeftBanner sections={sidebarSections}/>
            <RenderPage>
                {children}
            </RenderPage>
        </Grid>
    );
}

// Template for each section of the page, with a title and content
export function SectionsTemplate({
    title, 
    children, 
    mt, 
    mb, 
    align = "center", 
}:{
    title:string, 
    children:React.ReactNode, 
    left:string, 
    mt:string, 
    mb:string, 
    align?: "center" | "left" | "right";
    excludeFromSidebar?: boolean;
}){
    const justifyMap = {
        center: "center",
        left: "flex-start",
        right: "flex-end",
    } as const;
    
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "auto",
            textAlign: "justify",
            minWidth:"40em",
            mb,
            align,
        }}>
            {/* Each section gets an id for anchor navigation */}
            <section id={title}>
                <Typography
                    sx={{
                        position: "relative",
                        fontFamily: "'Expletus Sans', cursive",
                        fontWeight: 900,
                        fontSize: { xs: "1.5em", sm: "2em", md: "2.3em" },
                        color: "#000000ff",
                        WebkitTextStroke: "1px #222",
                        textStroke: "1px #222",
                        letterSpacing: "0.04em",
                        textShadow: "0 2px 8px #046E0444",
                        mb: 2,
                        mt,
                        paddingLeft: "1rem",
                        paddingRight: "1rem"
                    }}
                >
                    {title}
                </Typography>
                {/* Indent the section content slightly */}
                <Grid sx={{
                    marginLeft: "1.5rem",
                    display: "flex",
                    justifyContent: justifyMap[align],
                }}>
                    {children}
                </Grid>
            </section>
        </Grid>
    );
}

// Renders the main page content in a vertical stack with spacing between sections
export function RenderPage({children}:ParentProps){
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column", // Stack children vertically
            width: "100%",
            gap: 4,                  // Space between sections
            backgroundColor: "#FFFDF6",
        }}>
            {children}
        </Grid>
    );
}