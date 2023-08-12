import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HeaderProps } from './types';


const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <Navbar className="p-4 header">
      <Nav className="w-100 justify-content-between align-items-center">
        <Navbar.Brand>
          <img src="https://unavatar.io/tortoise" alt="Navbar Logo" className="logo" />
        </Navbar.Brand>
        {links.map((link, index) => (
          <Nav.Link key={index} href={link.url}>
            {link.label}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Header;