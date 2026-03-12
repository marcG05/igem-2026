import { Box, Typography } from "@mui/material";


const LogoContainer =  () => {
    return (<Box sx={{
        display: { xs :"none", md : "flex"},
        flexDirection: "row",
        width: "15.5rem",
        border: "1px red solid",
        borderRadius: "5rem",
        left: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
    }}>
        <img  style={{
           maxWidth: "50%", 
        }} src={`${import.meta.env.BASE_URL}tmp/logo.png`} />
        <Typography fontSize={20}>
            USherbrooke
        </Typography>
    </Box>);
}

export default LogoContainer;