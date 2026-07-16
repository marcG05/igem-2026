import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    setOpen(false);
    if (link !== "#") {
      navigate(link);
    }
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, zIndex: 110 }}>
      {/* 3 Bar (Hamburger) Menu Button */}
      <IconButton
        onClick={() => setOpen(true)}
        aria-label="open drawer menu"
        sx={{
          backgroundColor: "#fafafa",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          color: "#222222",
          p: 1.2,
          ":hover": {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <MenuIcon sx={{ fontSize: "28px" }} />
      </IconButton>

      {/* Drawer Menu overlay */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "70vw",
            maxWidth: "300px",
            backgroundColor: "#fafafa",
            padding: "2rem 1rem",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="close drawer menu"
          >
            <CloseIcon sx={{ fontSize: "28px", color: "#222222" }} />
          </IconButton>
        </Box>

        <List component="nav">
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("/")}>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>

          {/* Collapsible Project Link */}
          <ListItem
            disablePadding
            sx={{ flexDirection: "column", alignItems: "stretch" }}
          >
            <ListItemButton onClick={() => setOpenProject(!openProject)}>
              <ListItemText
                primary="Project"
                primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
              />
              {openProject ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openProject} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  pl: 2,
                  backgroundColor: "rgba(0,0,0,0.03)",
                  borderRadius: "8px",
                  my: 0.5,
                }}
              >
                <ListItemButton onClick={() => handleNavigate("#")}>
                  <ListItemText
                    primary="Description"
                    primaryTypographyProps={{ fontSize: "0.95rem" }}
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleNavigate("#")}>
                  <ListItemText
                    primary="Engineering"
                    primaryTypographyProps={{ fontSize: "0.95rem" }}
                  />
                </ListItemButton>
                <ListItemButton onClick={() => handleNavigate("#")}>
                  <ListItemText
                    primary="Model"
                    primaryTypographyProps={{ fontSize: "0.95rem" }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("#")}>
              <ListItemText
                primary="Labs"
                primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("#")}>
              <ListItemText
                primary="Team"
                primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("#")}>
              <ListItemText
                primary="Engagement"
                primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileNavigation;
