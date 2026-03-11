import { useState, useRef } from "react";
import React from "react";
import { Grid, Typography } from "@mui/material";


const Reference = ({title="References", children}:{title:string, children:React.ReactNode}) => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const plus = "https://static.igem.wiki/teams/5756/assets/images/components/extend.svg";
    return (
        <Grid sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "auto",
                    textAlign: "justify",
                    minWidth:"40em",
                    padding: "1rem",
                    zIndex: 1,
                }}>

            <section id={title}>
                <Grid sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center"
                }}>
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
                    paddingLeft: "1rem",
                
                }}
            >
                {title}
            </Typography>
            <img src={plus} onClick={() => {
                setShow((prev) => !prev)               
            }} style= {{
              width: "3rem",
              height: "3rem",
              cursor: "pointer" 
            }}/>
            </Grid>
                
             <Grid sx={{
                marginLeft: "1.5rem",
                justifyContent: "center",
                display: `${show ? "flex" : "none"}`,
            }} ref={ref}>
                {children}
            </Grid>
            </section>

        </Grid>
    );
};

export default Reference;