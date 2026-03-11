import React from "react";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";

const ExtendsList = ({children}:{children: Array<React.ReactNode>}) =>{

    return (
    <Grid sx={{
        display: "flex",
        flexDirection: "column",       
    }}>
         {children.map((x) => {
                const [show, setShow] = useState(false);

                return (<Grid sx={{
                    backgroundColor: "#05733E",
                    width: "auto",
                    minWidth: "70vw",
                    height: "auto",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4
                }}>
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between"
                    }}>
                        <Typography sx={{
                        fontWeight: 900,
                        fontSize: {sm: "3rem", xs:"1rem"},
                        
                        }}>
                            {React.isValidElement(x) && (x.props as any)?.title
                                ? (x.props as any).title
                                : null}
                        </Typography>

                        <img src="https://static.igem.wiki/teams/5756/assets/images/components/group-9.svg" style={{
                            cursor: "pointer",
                        }} onClick={ () => {setShow((prev) => !prev)}} />
                        
                        
                    </Grid>
                   
                    
                    <Grid sx={{
                        display: `${show ? "block" : "none"}`,
                    }}>
                        {x}
                    </Grid>

                </Grid>);
            })}
    </Grid>
    );
}


export default ExtendsList