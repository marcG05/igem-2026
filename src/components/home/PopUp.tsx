import { useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Grid } from "@mui/material";
import type { ReactNode } from "react"; // <-- add

gsap.registerPlugin(ScrollTrigger);

export function PopUp({title, text, margin, right = false}: {title: ReactNode, text: ReactNode, margin: number, right?: boolean}){ // <-- accept ReactNode

    const r = useRef(null);

    useGSAP(() => {
          gsap.fromTo(r.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: r.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }, { scope: r }); 

    return (
    <Grid ref={r} sx={{
      padding: "2rem",
      backgroundColor: "#f8f8f8",
      zIndex: 1,
      position: "absolute",
      width: "20rem",
      margin: "1rem",
      marginTop: margin.toString()+"vh",
      borderRadius: "15px",
      fontSize: "10px",
      left: right ? "70%" : "5%",
      display: {sm: "block", xs:"none"}
    }}>
      <h2>{title}</h2>
      <p style={{
        fontSize : "1rem",
      }}>{text}</p>
    </Grid>
    );
}