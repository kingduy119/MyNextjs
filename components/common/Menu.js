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

export { VerticalMenu };

