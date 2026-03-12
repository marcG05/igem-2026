import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Splash = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imgRef.current || !titleRef.current || !subtitleRef.current || !buttonRef.current) {
            console.error("refs not attached", {
                img: imgRef.current,
                title: titleRef.current,
                subtitle: subtitleRef.current,
                button: buttonRef.current,
            });
            return;
        }

        const tl = gsap.timeline();

        tl.fromTo(imgRef.current, 
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(titleRef.current,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3")
        .fromTo(subtitleRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
        "-=0.3")
        .fromTo(buttonRef.current,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
        "-=0.7");
    }, []);

    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            userSelect: "none",
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
            <img ref={imgRef} style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0
            }} src={`${import.meta.env.BASE_URL}tmp/bg.png`} />

            <div ref={titleRef} style={{
                zIndex: 10
            }}>
                <Typography sx={{
                    position: "relative",
                    fontFamily: "Prata, serif",
                    textAlign: "center",
                }} fontSize={100} fontWeight={150}>
                    OPTIMIZATION OF
                    POLYGLUTAMIC
                    ACID PRODUCTION
                </Typography>
            </div>

            <Box sx={{
                zIndex: 10,
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90vw",
                margin: "1rem",
            }}>
                <div ref={subtitleRef} style={{
                //opacity: 0,
                //zIndex: 10
            }}>
                    <Typography sx={{
                        maxWidth: "40%",
                    }} fontSize={20}>
                        as a biotechnological alternative to hyaluronic acid for innovative and responsible cosmetics.
                    </Typography>
                </div>

                <div ref={buttonRef} style={{
                //opacity: 0,
                //zIndex: 10
            }}>
                    <Typography fontSize={20} sx={{
                        backgroundColor: "#e4f2ff",
                        padding: "1.4rem",
                        border: "0.6rem white solid",
                        borderRadius: "4rem",
                        cursor: "pointer",
                        ":hover": {
                            backgroundColor: "#d8e8fb"
                        },
                    }}>
                        Our project
                    </Typography>
                </div>
            </Box>

        </Box>
    );
}

export default Splash;