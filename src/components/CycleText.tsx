import { Grid } from "@mui/material";
import React from "react";

export default function CycleText({children, img}:{children:React.ReactNode, img:"learn"| "build"| "design" | "test"}) {
    let insert = "";
    switch(img){
        case "learn":
            insert = "https://static.igem.wiki/teams/5756/assets/images/project/learn.svg";
            break;
        case "build":
            insert = "https://static.igem.wiki/teams/5756/assets/images/project/build.svg";
            break;
        case "design":
            insert = "https://static.igem.wiki/teams/5756/assets/images/project/design.svg";
            break;
        case "test":
            insert = "https://static.igem.wiki/teams/5756/assets/images/project/test.svg";
            break;
        default:
            break;
    }
    return (<Grid sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        width: "70%",
    }}>
        <img src={insert} style={{
            maxWidth: "10rem",
            maxHeight: "10rem",
        }}/>

        <Grid sx={{
            display: "flex",
            flexDirection : "column",
            gap: 1
        }}>
            {children}
        </Grid>
    </Grid>
    );
}