import { Typography } from "@mui/material";
import React from "react";

const Paragraph = ({children}: {children?: React.ReactNode}) => {
    return (
        <Typography 
            className="custom-paragraph" 
            textAlign="justify" 
            sx={{
                '.custom-paragraph + &': {
                    marginTop: "1rem"
                }
            }}
        >
            {children}
        </Typography>
    );
};

export default Paragraph;