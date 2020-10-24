// import React from "react";
// import PropTypes from "prop-types";
// import { Nav } from "react-bootstrap";

// const VerticalMenu = () => (
//     <Nav
//         className="flex-column nav__list"
//         variant="dark"
//         bg="datk"
//     >
//         <Nav.Link className="nav__link nav__active" href="/home">Active</Nav.Link>
//         <Nav.Link className="nav__link" href="#link-1">Link</Nav.Link>
//         <Nav.Link className="nav__link" href="#link-2">Link</Nav.Link>
//         <Nav.Link className="nav__link" href="disabled" disabled>0
//         Disabled
//         </Nav.Link>
//     </Nav>
// );

// const NewVerticalMenu = ({ links, activeKey }) => (
//     <Nav className="flex-column" defaultActiveKey={activeKey}>
//         {links.map(link => (
//             <Nav.link href={link.pathname}>{link.text}</Nav.link>
//         ))}
//     </Nav>
// );

// NewVerticalMenu.propType = {
//     links: PropTypes.arrayOf(
//         PropTypes.shape({
//             pathname: PropTypes.string,
//             text: PropTypes.string,
//         }).isRequired,
//     ).isRequired,
//     activeKey: PropTypes.string
// };

// export { VerticalMenu, NewVerticalMenu };

