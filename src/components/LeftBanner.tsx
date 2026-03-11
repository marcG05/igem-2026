import { useState} from "react";
import { Grid, Link } from "@mui/material";

export function LeftBanner({sections}:{sections: Array<React.ReactNode>}){
    console.log(sections);
    const [toggleShow, setShow] = useState(false);
    return (
  <Grid
    sx={{
      display: { xs: "none", md: "flex" },
      flexDirection: "row",
      mt: 10,
      
      backgroundColor: "#066839b8",
      width: `${toggleShow ? "20" : "5"}vw`,
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
      alignItems: "baseline",
    }}
  >
    {toggleShow && (
      <Grid
          sx={{
            marginLeft: "1rem",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            position: "fixed",
            maxWidth: "250px",
            height: "80vh",
            overflowY: "auto",
            wordWrap: "break-word",
            paddingRight: "0.9rem",

            /* ✅ Hide scrollbar but keep scrolling */
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }}
        >
        {sections.map((x, i) => {
          if(i > 8) return null;
          if (
            typeof x === "object" &&
            x !== null &&
            "props" in x &&
            typeof (x as any).props.title === "string"
          ) {
            const title = (x as any).props.title;
            return (
              <Grid
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src="https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/plant37.svg"
                  style={{ width: "24px", height: "24px" }}
                />
                <Link
                  href={`#${title}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    wordBreak: "break-word",
                  }}
                >
                  {title}
                </Link>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    )}

    <img
      src="https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/arrow.svg"
      style={{
        cursor: "pointer",
        transform: `rotate(${toggleShow ? "180deg" : "0deg"})`,
        width: "6rem",
        height: "6rem",
        position: "fixed",
        left: `${toggleShow ? "13%" : "1.1rem"}`,
        marginTop: 10,
      }}
      onClick={() => setShow((prev) => !prev)}
    />
  </Grid>
);

}