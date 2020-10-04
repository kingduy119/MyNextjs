import React from "react";
import PropTypes from "prop-types";

import { Nav, Navbar } from "react-bootstrap";
import { FormSearch } from "./Forms";

/**
 * New Vertical
 */
function Navigation(props) {
    return (
        <Nav
            className={props.className}
            variant={props.variant}
            defaultActiveKey={props.defaultKey}
            onSelect={(key) => props.onSelect(key)}
        >
            {props.links.map(item => (
                <Nav.Link href={item.href}>{item.text}</Nav.Link>
            ))}
        </Nav>
    );
}

Navigation.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
    defaultKey: PropTypes.string,
    onSelect: PropTypes.func,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            text: PropTypes.string,
        }).isRequired,
    ).isRequired
};

Navigation.defaultProps = {
    className: "mr-auto",
    defaultKey: "",
    onSelect: null,
}

/**
 * SlideBar
 */
function SlideBar(props) {
    const { logo, navigation, onTabSelect } = props;

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            {/* Logo */}
            <Navbar.Brand href={logo.href}>{logo.text}</Navbar.Brand>

            {/* Nav Links */}
            <Navigation
                links={navigation}
                onSelect={onTabSelect}
            />

            {/* Form */}
            <FormSearch />

        </Navbar>
    );
}

export { SlideBar, Navigation };
