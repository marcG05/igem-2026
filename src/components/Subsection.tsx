import { Grid, Typography } from "@mui/material";
import React from "react";

interface CircularImageWithTextProps {
  /** The URL of the background image. */
  imageUrl: string;
  /** The alt text for the image for accessibility. */
  altText: string;
  /** The content to display in the center of the image. */
  children: React.ReactNode;
  /** Optional additional class names for the container. */
  className?: string;
}

const CircularImageWithText: React.FC<CircularImageWithTextProps> = ({
  imageUrl,
  children,
}) => {

    return (
        <Grid sx={{ position: 'relative', display: 'inline-block' }}>
  <img
    src={imageUrl}
    alt="Overlayed"
    style={{
      objectFit: 'cover',
      borderRadius: '50%',
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    }}
  />

  <Grid
    sx={{
      position: 'absolute',
      top: '52%',
      left: '44%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      pointerEvents: 'none', // optional: lets clicks pass through
    }}
  >
    {children}
  </Grid>
</Grid>

  );
};

export default function Subsection({children, title, image, textImage}:{children:React.ReactNode, title:string, image:string, textImage:string}){
    return(<Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
        
        <Grid sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
        }}>
            <CircularImageWithText imageUrl={image} altText="..">
                <Typography sx={{
                position: "relative",
                fontFamily: "'Expletus Sans', cursive",
                fontWeight: 900,
                fontSize: { xs: "0.5em", sm: "1em", md: "1.5em" },
                color: "#000000ff",
                WebkitTextStroke: "1px #222",
                textStroke: "1px #222",
                letterSpacing: "0.04em",
                textShadow: "0 2px 8px #046E0444",
                paddingLeft: "1rem",
            }}>{textImage}</Typography>
            </CircularImageWithText>
            <Typography sx={{
                position: "relative",
                fontFamily: "'Expletus Sans', cursive",
                fontWeight: 600,
                fontSize: { xs: "0.5em", sm: "1em", md: "1.5em" },
                color: "#000000ff",
                WebkitTextStroke: "1px #222",
                textStroke: "1px #222",
                letterSpacing: "0.04em",
                textShadow: "0 2px 8px #046E0444",
                paddingLeft: "1rem",
            }}>{title}</Typography>
        </Grid>
        <Grid sx={{
            position: "relative",
            left: "10rem"
        }}>
            {children}
        </Grid>

    </Grid>);
}