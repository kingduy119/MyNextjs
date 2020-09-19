import React from "react";
import PropTypes from "prop-types";

import { Container, Navbar, Nav } from "react-bootstrap";


function Navigation(props) {
    const { brand, links } = props;

    return (
        <Navbar
            className="nav-container"
            expand="lg"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand href={brand.href}>{brand.text}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {links.map(item => (
                        <Nav.Link href={item.href}>{item.text}</Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

Navigation.defaultProps = {
    brand: { href: "/", text: "Home" },
    links: [],
}

Navigation.propTypes = {
    brand: PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
    })).isRequired
};


export function SideBar(props) {
    const { links } = props;
    return (
        <div className="sidebar">
            {links.map(item => (
                <div className="sidebar-item">
                    <a className="sidebar-link" href={item.href}>{item.text}</a>
                </div>
            ))}
        </div>
    );
}

export default Navigation;