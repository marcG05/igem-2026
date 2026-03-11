import React from "react";
import { Grid} from "@mui/material";


function ExtendsChild({children, title}:{children:Array<React.ReactNode>, title:string}){
    return (
        <Grid id={title}>
           {children}
        </Grid>
    );
}

export default ExtendsChild;