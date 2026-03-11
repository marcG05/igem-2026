import React from "react";
import { Grid, Typography } from "@mui/material";

const Figure = ({ title, children, g }: { title: string, children: React.ReactNode, g: number }) => {
    const childrenArray = React.Children.toArray(children);
    const isSingleImage = childrenArray.length === 1;
    
    return (
        <Grid sx={{
            display: { sm: "flex", xs: "none" },
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            width: "100%",
        }}>
            <Grid
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: g,
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    "& > *": {
                        // Responsive sizing based on screen size and number of children
                        maxWidth: isSingleImage ? {
                            xs: "15rem",
                            sm: "20rem",
                            md: "30rem",
                            lg: "40rem"
                        } : {
                            xs: "12rem",
                            sm: "15rem",
                            md: "18rem",
                            lg: "22rem"
                        },
                        maxHeight: isSingleImage ? {
                            xs: "25rem",
                            sm: "35rem",
                            md: "45rem",
                            lg: "55rem"
                        } : {
                            xs: "12rem",
                            sm: "15rem",
                            md: "18rem",
                            lg: "22rem"
                        },
                        minWidth: isSingleImage ? {
                            xs: "20rem",
                            sm: "25rem",
                            md: "40rem"
                        } : {
                            xs: "8rem",
                            sm: "10rem",
                            md: "12rem"
                        },
                        minHeight: isSingleImage ? {
                            xs: "20rem",
                            sm: "25rem",
                            md: "30rem"
                        } : {
                            xs: "8rem",
                            sm: "10rem",
                            md: "12rem"
                        },
                        width: isSingleImage ? "auto" : "100%",
                        height: "auto",
                        objectFit: "contain",
                        // Flex properties to handle multiple images
                        flex: isSingleImage ? "none" : {
                            xs: "1 1 calc(50% - 0.5rem)", // 2 per row on small screens
                            sm: "1 1 calc(33.33% - 0.75rem)", // 3 per row on medium screens  
                            md: "1 1 calc(20% - 1rem)", // 5 per row on large screens
                        },
                    },
                }}
            >
                {children}
            </Grid>
            <Typography sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: {
                    xs: "0.6rem",
                    sm: "0.8rem",
                    md: "1rem"
                }
            }}>
                {title}
            </Typography>
        </Grid>
    );
};

export default Figure;