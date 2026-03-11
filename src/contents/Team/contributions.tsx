import { Box } from "@mui/material";

export function Contribution(){
    return(
        <Box component={"div"} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "100vh",
            padding: 2,
            mb:10,
            mt:10
        }}>
            <iframe 
                key="characterization" 
                src="https://static.igem.wiki/teams/5756/assets/pdf/contributions/summary-report-and-improvement-pathways.pdf" 
                style={{
                    width: "80vw",
                    height: "90vh",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }} 
            />
        </Box>
    );
}