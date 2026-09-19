import { Box } from "@mui/material";
import NavButton from "../components/NavButton";
import NavSublink from "../components/NavSublink";

const NormalNavigation = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fafafa",
        width: "40rem",
        padding: "0.3rem",
        borderRadius: "5rem",
        zIndex: 10,
      }}
    >
      <NavButton title="Home" link="/" />
      <NavButton title="Project" link="#">
        <NavSublink title="Description" link="#" />
        <NavSublink title="Engineering" link="#" />
        <NavSublink title="Model" link="#" />
      </NavButton>
      <NavButton title="Labs" link="#"></NavButton>
      <NavButton title="Team" link="#" />
      <NavButton title="Engagement" link="#" />
    </Box>
  );
};

export default NormalNavigation;
