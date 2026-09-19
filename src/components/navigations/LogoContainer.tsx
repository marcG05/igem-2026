import { Box, Typography } from "@mui/material";

const LogoContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: { xs: "auto", sm: "15.5rem" },
        borderRadius: "5rem",
        padding: { xs: "0.4rem 1rem", sm: "0.3rem 10px 0.3rem 0.3rem" },
        justifyContent: "center",
        backgroundColor: "#fafafa",
        alignItems: "center",
        zIndex: 10,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}tmp/logo.png`}
        sx={{
          height: { xs: "24px", sm: "36px" },
          width: "auto",
          mr: { xs: 0.5, sm: 1 },
        }}
      />
      <Typography
        sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: 500 }}
      >
        USherbrooke
      </Typography>
    </Box>
  );
};

export default LogoContainer;
