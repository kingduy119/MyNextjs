import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// import Header from "./Header";
import Navigation, { SideBar } from "./Navigation";
import Body from "./Body";
import Footer from "./Footer";

// fake data:
const navbar = {
    brand: { href: "/", text: "Home" },
    links: [
        { href: "#link", text: "Link 1" },
        { href: "#link", text: "Link 2" },
        { href: "#link", text: "Link 3" },
    ]
};

class Layout extends React.Component {
    render() {
        return (
            <>
                <Container style={{ height: "100%", padding: "0" }}>
                    <Navigation {...navbar} />

                    {/* Content */}
                    <Container className="container container-content">
                        <Row className="content">
                            {/* Left Content */}
                            <Col className="content__left" md="2">
                                {/* <p>Left</p> */}
                                <SideBar {...navbar} />
                            </Col>

                            {/* Main Content */}
                            <Col className="content__main" md="10">
                                <div style={{ backgroundColor: "white" }}>
                                    {this.props.children}
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Footer */}
                    <Container className="container container-footer">
                        <div className="footer-content">
                            TEST
                    </div>
                    </Container>
                </Container>
            </>
        );
    }
}

export default Layout;