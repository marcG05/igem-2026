import { Typography, TypographyProps } from "@mui/material";

// Subtitle 1 - Main section titles
export function Subtitle1({ children, sx, ...props }: TypographyProps) {
  return (
    <Typography
      sx={{
        position: "relative",
        fontFamily: "'Expletus Sans', cursive",
        fontWeight: 300,
        fontSize: { xs: "1.2em", sm: "1.6em", md: "2em" },
        color: "#000000ff",
        WebkitTextStroke: "1px #222",
        textStroke: "1px #222",
        letterSpacing: "0.04em",
        textShadow: "0 2px 8px #046E0444",
        mb: 2,
        paddingLeft: "1rem",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

// Subtitle 2 - Secondary titles/subsections
export function Subtitle2({ children, sx, ...props }: TypographyProps) {
  return (
    <Typography
      sx={{
        fontFamily: "'Expletus Sans', cursive",
        fontWeight: 600,
        fontSize: { xs: "1em", sm: "1.2em", md: "1.4em" },
        color: "#333",
        letterSpacing: "0.02em",
        mb: 1.5,
        paddingLeft: "0.5rem",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

// Normal Text - Body text
export function NormalText({ children, sx, ...props }: TypographyProps) {
  return (
    <Typography
      sx={{
        whiteSpace: "pre-line",
        wordBreak: "break-word",
        textAlign: "justify",
        fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
        lineHeight: 1.6,
        padding: "1rem",
        color: "#444",
        mb: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

// Normal Text Bold - Bold body text
export function NormalTextBold({ children, sx, ...props }: TypographyProps) {
  return (
    <Typography
      sx={{
        whiteSpace: "pre-line",
        wordBreak: "break-word",
        textAlign: "justify",
        fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
        lineHeight: 1.6,
        color: "#444",
        fontWeight: 600,
        mb: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}