import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavSublink = ({title, link} : {title:string, link:string}) => {
    const navig = useNavigate();
    return (
        <Box onClick={
            ()=>{
                navig(link);
            }
        } sx={{
            padding: "1rem",
            backgroundColor: "white",
            cursor: "pointer",
            width: "100%",
            ":hover" : {
                backgroundColor: "#d6d6d6",
                transition: "all 1s ease-out",
            }
        }}>
            <Typography>
                {title}
            </Typography>
        </Box>
    );
}

export default NavSublink;