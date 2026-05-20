import { Box } from "@mui/material";

export function Attributions() {
  const teamID = import.meta.env.VITE_TEAM_ID;

  return (
    <Box component={"div"} sx={{height:"400vh", padding:5, mb:10, mt:10}}>
      {/*
        ======================================================================
        == VERY IMPORTANT                                                   ==
        ======================================================================
        LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM
        WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF
        NOT MEETING BRONZE MEDAL CRITERION #2
      */}

      <div className="row mt-4" style={{height:"100%"}}>
        <iframe
          style={{ width: "100%", height:"100%" }}
          id="igem-attribution-form"
          src={`https://teams.igem.org/wiki/${teamID}/attributions`}
        />
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </Box>
  );
}