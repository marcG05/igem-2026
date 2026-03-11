import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

type Person = {
  name: string;
  image: string;
};

export function BasicBox(
  {
    people = [],
    width = { xs: "95vw", sm: "20em", md: "32em", lg: "38em" },
    topTitle = "",
    topSubtitle = "",
    bottomTitle = "",
    bottomSubtitle = "",
    backText1 = "",
    backText2 = "",
  }:
  {
    people?: Person[];
    width?: string | object;
    topTitle?: string;
    topSubtitle?: string;
    bottomTitle?: string;
    bottomSubtitle?: string;
    backText1?: string;
    backText2?: string;
  }
) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);

  // Only flip if not clicking a person image
  const handleFlip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).closest(".person-image-box")) return;
    setFlipped((f) => !f);
  };

  return (
    <Box
      component="div"
      sx={{
        width : {xs : "90%", md : width},
        background: "linear-gradient(135deg, #EEE9D2 70%, #d6c7a1 100%)",
        borderRadius: "2em",
        boxShadow: "0 8px 32px rgba(4, 110, 4, 0.10), 0 1.5px 8px #046E0444",
        border: "2px solid #046E04",
        fontFamily: "'Expletus Sans', cursive",
        transition: "box-shadow 0.2s, border 0.2s",
        "&:hover": {
          boxShadow: "0 12px 40px rgba(4, 110, 4, 0.18), 0 2px 12px #046E0466",
          border: "2.5px solid #046E04",
          cursor: "pointer",
        },
        perspective: "1200px",
        position: "relative",
        overflow: "visible",
        mb: 10,
        zIndex:1,
      }}
      onClick={handleFlip}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "28em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "transform 0.6s cubic-bezier(.4,2,.3,1)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        {!flipped && (
          <Box
            component="div"
            sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {/* Decorative top accent */}
            <Box
              component="div"
              sx={{
                width: "60px",
                height: "8px",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #046E04 60%, #EEE9D2 100%)",
                mb: 2,
                mt: 2,
              }}
            />
            {/* Top text row */}
            <Box
              component="div"
              sx={{ width: "100%", mb: 1, textAlign: "center" }}
            >
              <Typography
                sx={{
                  fontFamily: "'Expletus Sans', cursive",
                  fontWeight: 900,
                  fontSize: { xs: "0.65em", sm: "1em", md: "1.7em" },
                  color: "#046E04",
                  WebkitTextStroke: "1.5px #222",
                  textStroke: "1.5px #222",
                  wordBreak: "break-word",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                  textShadow: "0 2px 8px #046E0444",
                }}
              >
                {topTitle}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Expletus Sans', cursive",
                  fontSize: { xs: "0.5em", sm: "0.7em", md: "1.15em" },
                  color: "#333",
                  wordBreak: "break-word",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  mt: 0.5,
                }}
              >
                {topSubtitle}
              </Typography>
            </Box>
            {/* People images row */}
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, sm: 3 },
                flexWrap: "wrap",
                position: "relative",
                mb: 2,
                alignContent: "flex-start",
              }}
            >
              {people.map((person, idx) => (
                <Box
                  component="div"
                  key={idx}
                  className="person-image-box"
                  sx={{
                    position: "relative",
                    width: { xs: "4.5em", sm: "5.5em", md: "7em" },
                    height: { xs: "4.5em", sm: "5.5em", md: "7em" },
                    borderRadius: "50%",
                    overflow: "visible",
                    mx: 0.5,
                    my: 0.5,
                    cursor: "pointer",
                    boxShadow: hoveredIdx === idx
                      ? "0 0 0 4px #046E04, 0 2px 12px #046E0444"
                      : "0 1px 6px #046E0422",
                    transition: "box-shadow 0.2s",
                    flex: "0 1 auto",
                    background: "linear-gradient(135deg, #EEE9D2 60%, #d6c7a1 100%)",
                    border: "2px solid #046E04",
                    "&:hover": {
                      border: "2.5px solid #046E04",
                    },
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      display: "block",
                      boxShadow: "0 2px 8px #046E0444",
                    }}
                  />
                  <Box
                    component="div"
                    sx={{
                      position: "absolute",
                      bottom: -28,
                      left: "50%",
                      transform: "translateX(-50%)",
                      bgcolor: "rgba(4, 110, 4, 0.96)",
                      color: "#fff",
                      px: 1,
                      py: 0.5,
                      borderRadius: "0.7em",
                      fontFamily: "'Expletus Sans', cursive",
                      fontWeight: 700,
                      fontSize: (() => {
                        const len = person.name.length;
                        if (len > 22) return { xs: "0.45em", sm: "0.55em", md: "0.65em" };
                        if (len > 16) return { xs: "0.55em", sm: "0.65em", md: "0.75em" };
                        return { xs: "0.65em", sm: "0.75em", md: "0.85em" };
                      })(),
                      opacity: hoveredIdx === idx ? 1 : 0,
                      pointerEvents: "none",
                      transition: "opacity 0.2s, font-size 0.2s",
                      zIndex: 2,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                      textAlign: "center",
                      width: "98%",
                      maxWidth: "98%",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      border: "1.5px solid #fff",
                      textShadow: "0 1px 4px #046E0444",
                    }}
                  >
                    {person.name}
                  </Box>
                </Box>
              ))}
            </Box>
            {/* Decorative bottom accent */}
            <Box
              component="div"
              sx={{
                width: "60px",
                height: "8px",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #EEE9D2 0%, #046E04 100%)",
                mt: 2,
              }}
            />
            {/* Bottom text row */}
            <Box
              component="div"
              sx={{ width: "100%", mt: 2, textAlign: "center" }}
            >
              <Typography
                sx={{
                  fontFamily: "'Expletus Sans', cursive",
                  fontWeight: 900,
                  fontSize: { xs: "0.65em", sm: "1em", md: "1.7em" },
                  color: "#046E04",
                  WebkitTextStroke: "1.5px #222",
                  textStroke: "1.5px #222",
                  wordBreak: "break-word",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                  textShadow: "0 2px 8px #046E0444",
                }}
              >
                {bottomTitle}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Expletus Sans', cursive",
                  fontSize: { xs: "0.5em", sm: "0.7em", md: "1.15em" },
                  color: "#333",
                  wordBreak: "break-word",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                {bottomSubtitle}
              </Typography>
            </Box>
          </Box>
        )}
        {/* Back Side */}
        {flipped && (
          <Box
            component="div"
            sx={{
              width: "100%",
              minHeight: "28em",
              background: "linear-gradient(135deg, #d6c7a1 70%, #EEE9D2 100%)",
              borderRadius: "2em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 3, sm: 4, md: 6 },
              fontFamily: "'Expletus Sans', cursive",
              boxShadow: "0 8px 32px rgba(4, 110, 4, 0.10), 0 1.5px 8px #046E0444",
              border: "2px solid #046E04",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Expletus Sans', cursive",
                fontWeight: 700,
                fontSize: { xs: "0.5em", sm: "1em", md: "1.2em" },
                color: "#046E04",
                textAlign: "center",
                mb: 2,
                wordBreak: "break-word",
              }}
            >
              {backText1}
            </Typography>
            <br />
            <Typography
              sx={{
                fontFamily: "'Expletus Sans', cursive",
                fontWeight: 700,
                fontSize: { xs: "0.5em", sm: "1em", md: "1.2em" },
                color: "#046E04",
                textAlign: "center",
                mb: 2,
                wordBreak: "break-word",
              }}
            >
              {backText2}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
