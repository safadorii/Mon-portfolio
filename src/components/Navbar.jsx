import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

function NavBar() {
  // Déclaration de l'état pour gérer l'expansion de la barre de navigation
  const [expand, setExpand] = useState(false);
  // Déclaration de l'état pour changer la couleur de la barre de navigation en fonction du défilement
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

   // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);// Le tableau vide signifie que l'effet ne s'exécute qu'une seule fois après le premier rendu

  const handleToggle = () => {
    setExpand(!expand);
  };

  const closeNavMenu = () => {
    setExpand(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md" // Rend la barre de navigation réactive à partir de la taille "medium" des écrans
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav" //Attribut pour l'accessibilité, relie le bouton à la barre de navigation
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavItem to="/" onClick={closeNavMenu} icon={<AiOutlineHome />} text="Accueil" />
            <NavItem to="/about" onClick={closeNavMenu} icon={<AiOutlineUser />} text="À propos" />
            <NavItem to="/project" onClick={closeNavMenu} icon={<AiOutlineFundProjectionScreen />} text="Projets" />
            <NavItem to="/resume" onClick={closeNavMenu} icon={<CgFileDocument />} text="Mon CV" />
            <NavItem to="/contact" onClick={closeNavMenu} icon={<AiOutlineFundProjectionScreen />} text="Contact" />
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/safadorii/Mon-portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Composant personnalisé NavItem pour éviter la répétition de code
function NavItem({ to, onClick, icon, text }) {
  return (
    <Nav.Item>
      <Nav.Link as={Link} to={to} onClick={onClick}>
        {icon} {text}
      </Nav.Link>
    </Nav.Item>
  );
}

export default NavBar;
