import { Grid, Typography } from "@mui/material";

export default function Award(){
    const text = `Our team is proud to have earned a bronze medal in the University of Sherbrooke’s first participation in the iGEM competition. This distinction reflects our rigorous and comprehensive involvement throughout the project, including the development of a detailed Wiki, our participation in the Grand Jamboree, and a concrete contribution designed to support future teams.

In addition to this medal, our team was nominated among more than a hundred international teams for the “Best Presentation” award. This nomination acknowledges the clarity, commitment, and scientific quality demonstrated in our presentation video, which stood out to the iGEM community.`;
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100vw",
            minHeight: "90vh",
            padding: "1rem",
        }}>
            <Grid sx={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingTop: "10vh"
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "'Expletus Sans', cursive",
                        fontWeight: 600,
                        background: "linear-gradient(90deg, rgba(7,159,68,1) 25%, rgba(255,215,0,1) 81%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text", // for modern browsers
                        color: "transparent",   // fallback
                    }}
                >
                    Grand Jamboree 2025
                </Typography>
                
                <img src="https://static.igem.wiki/teams/5756/assets/images/awards/igem.svg" />
            </Grid>
            <Grid sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
            }}>
                    <Grid sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    }}>
                        <img src="https://static.igem.wiki/teams/5756/assets/images/awards/bronze.svg" />
                        <Typography variant="h4" sx={{
                            fontFamily: "'Expletus Sans', cursive",
                            fontWeight: 600,
                            color: "#C66D00"}}
                            >
                            Bronze Medal
                        </Typography>
                    </Grid>
                   
                   <Grid sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                    }}>
                        <img src="https://static.igem.wiki/teams/5756/assets/images/awards/nomination.svg" />
                        <Typography variant="h4" sx={{
                            fontFamily: "'Expletus Sans', cursive",
                            fontWeight: 600,
                            color: "#00BC90"
                        }}>
                            Nomination for Best Presentation
                        </Typography>
                </Grid>
                   
            </Grid>
            <Grid sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}>
                <Typography sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
                fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
                lineHeight: 1.6,
                padding: "2rem",
                color: "#444",
                maxWidth: "70vw",
            }}>
                {text}
            </Typography>
            </Grid>
           

            <Grid sx={{
                display: "flex",
                flexDirection:"column",
                gap: 3,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img style={{
                    width: "50vw",
                    
                }}
                src="https://static.igem.wiki/teams/5756/assets/images/awards/1.svg" />

                <Grid sx={{
                    display: "flex",
                    flexDirection : "row",
                    width: "100%",
                    gap: 3,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                    <img style={{
                    maxWidth: "50vw"
                }}
                src="https://static.igem.wiki/teams/5756/assets/images/awards/2.svg" />

                <img style={{
                    maxWidth: "50vw",
                }}
                src="https://static.igem.wiki/teams/5756/assets/images/awards/3.svg" />
                </Grid>
            </Grid>
           
        </Grid>
    );
}