import { Box } from "@mui/material";
import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer
      className="footer"
      style={{
        background: "#29512a",
        color: "#fff",
        position: "relative",
        zIndex: 2000,
        width: "100%",
        minHeight: "28vh",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {/* ADN Images absolutely positioned, hidden on xs screens */}
      <Box
        component={"div"}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5756/assets/images/footer/adn-beige.svg"
          alt="DNA left"
          style={{
            position: "absolute",
            left: 0,
            top: "2vw",
            height: "22vw",
            minHeight: "80px",
            maxHeight: "220px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <img
          src="https://static.igem.wiki/teams/5756/assets/images/footer/adn-beige.svg"
          alt="DNA right"
          style={{
            position: "absolute",
            right: 0,
            top: "2vw",
            height: "22vw",
            minHeight: "80px",
            maxHeight: "220px",
            transform: "scaleX(-1)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7vw 0 2vw 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Spacer for ADN on medium and up */}
        <Box
          component={"div"}
          sx={{
            width: { xs: 0, md: "10vw" },
            minWidth: { xs: 0, md: "30px" },
            maxWidth: { xs: 0, md: "120px" },
            transition: "width 0.2s",
          }}
        />
        {/* Center text with lines */}
        <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#fff",
                opacity: 0.5,
                marginRight: "16px",
              }}
            />
            <span
              style={{
                fontWeight: 500,
                fontSize: "1.3rem",
                letterSpacing: "1px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              WE&nbsp; THANK OUR SUPPORTERS
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#fff",
                opacity: 0.5,
                marginLeft: "16px",
              }}
            />
          </div>
          {/* Sponsors image */}
          <div style={{ marginTop: "24px" }}>
            <img
              src="https://static.igem.wiki/teams/5756/assets/images/footer/frame-14.svg"
              alt="Sponsors"
              style={{
                maxWidth: "600px",
                width: "90vw",
                height: "auto",
                display: "block",
                margin: "0 auto",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "8px",
                padding: "8px 0",
              }}
            />
          </div>
        </div>
        {/* Spacer for ADN on medium and up */}
        <Box
          component={"div"}
          sx={{
            width: { xs: 0, md: "10vw" },
            minWidth: { xs: 0, md: "30px" },
            maxWidth: { xs: 0, md: "120px" },
            transition: "width 0.2s",
          }}
        />
      </div>

      {/* License and repo info */}
      <div
        style={{
          paddingBottom: "2vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <p className="mb-0">
          <small>
            © 2025 - Content on this site is licensed under a{" "}
            <a
              className="subfoot"
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="license"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </small>
        </p>
        <p>
          <small>
            The repository used to create this website is available at{" "}
            <a
              href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              gitlab.igem.org/{teamYear}/{teamSlug}
            </a>
            .
          </small>
        </p>
      </div>
    </footer>
  );
}
