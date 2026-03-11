import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";

export function Navbar() {
  const navItems = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      // Create a dropdown for folders
      return (
        <NavDropdown
          key={`folder-${pageIndex}`}
          title={item.name}
          id={`nav-dropdown-${pageIndex}`}
        >
          {item.folder.map((subpage, subpageIndex) =>
            subpage.path ? (
              <NavDropdown.Item
                key={`page-${pageIndex}-subpage-${subpageIndex}`}
                as={Link}
                to={subpage.path}
              >
                {subpage.name}
              </NavDropdown.Item>
            ) : null
          )}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      // Regular nav link for single pages
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {item.name}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      bg="success"
      variant="dark"
      style={{ backgroundColor: "#066839" }}
    >
      <Container className="ps-0">
        <BootstrapNavbar.Brand>
          <img
            src='https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/logo.svg'
            alt="Team Logo"
            style={{
              verticalAlign: "middle",
              height: "clamp(40px, 8vw, 60px)",
              marginRight: "14px",
              marginLeft: "0px",
              top: "0",
              left: "0",
              background: "#fff", 
              borderRadius: "20em", 
              padding: "1px",
            }}
          />
          {import.meta.env.VITE_TEAM_NAME}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{navItems}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
