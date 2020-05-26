import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const VerticalMenu = () => (
    <Nav
        defaultActiveKey="/home"
        className="flex-column"
    >
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link href="#link-1">Link</Nav.Link>
        <Nav.Link href="#link-2">Link</Nav.Link>
        <Nav.Link href="disabled" disabled>
            Disabled
        </Nav.Link>
    </Nav>
);

const NewVerticalMenu = ({ links, activeKey }) => (
    <Nav className="flex-column" defaultActiveKey={activeKey}>
        {links.map(link => (
            <Nav.link href={link.pathname}>{link.text}</Nav.link>
        ))}
    </Nav>
);

NewVerticalMenu.propType = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            pathname: PropTypes.string,
            text: PropTypes.string,
        }).isRequired,
    ).isRequired,
    activeKey: PropTypes.string
};

export { VerticalMenu, NewVerticalMenu };

