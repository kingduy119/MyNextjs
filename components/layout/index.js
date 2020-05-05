import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../navbar';
import { VerticalMenu } from "../common/Menu";
import Confirm from "../notification/Confirm";

class Layout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Container fluid>
                {/* Header */}
                <Row style={{ border: "solid" }}>
                    <Col style={{
                        border: "solid red",
                        borderRadius: "12px",
                        width: "100%"
                    }}>
                        <h2>Header</h2>
                    </Col>
                </Row>
                <Navigation />

                {/* Body */}
                <Row style={{ border: "solid" }}>
                    {/* Left Content */}
                    <Col style={{ border: "solid red", borderRadius: "12px" }}>
                        <VerticalMenu />
                    </Col>

                    {/* Body Content */}
                    <Col style={{ border: "solid red", borderRadius: "12px" }}>
                        {/* <h3>Body Content</h3> */}
                        <Confirm title="title" message="message" />
                    </Col>

                    {/* Right Content */}
                    <Col style={{ border: "solid red", borderRadius: "12px" }}>
                        <h3>Right Content</h3>
                    </Col>
                </Row>

                {/* Footer */}
                <Row style={{ border: "solid" }}>
                    <Col style={{
                        border: "solid red",
                        borderRadius: "12px",
                        textAlign: "center"
                    }}>
                        <h2>FOOTER</h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;

