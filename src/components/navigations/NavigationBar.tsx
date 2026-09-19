import { Box } from "@mui/material";
import NormalNavigation from "./bar/NormalNavigation";
import MobileNavigation from "./bar/MobileNavigation";
import LogoContainer from "./LogoContainer";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: { xs: 1.5, sm: 3 },
        py: { xs: 1, sm: 1.5 },
        marginTop: "5px",
        userSelect: "none",
        boxSizing: "border-box",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <LogoContainer />
      <NormalNavigation />
      <MobileNavigation />
    </Box>
  );
};

export default NavigationBar;
