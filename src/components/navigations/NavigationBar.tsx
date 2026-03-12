import { Box } from "@mui/material";
import NormalNavigation from "./bar/NormalNavigation";
import LogoContainer from "./LogoContainer";

const NavigationBar = () =>{
    
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            px: 2,
            marginTop: "5px",
            userSelect: "none",
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 100
        }}>
        <LogoContainer />
        <NormalNavigation />
        </Box>
    );
}

export default NavigationBar;