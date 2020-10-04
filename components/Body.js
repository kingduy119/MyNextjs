import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalMenu } from "./common/Menu";
import { bodyContainer } from "../lib/stylesheet";

function Body({ pageContent }) {
    return (
        <Container style={bodyContainer}>
            <Row>
                {/* Left Layout */}
                <Col md="2">
                    <VerticalMenu />
                </Col>

                {/* Middle Layout => Content */}
                <Col md="8">
                    {pageContent}
                </Col>

                {/* Right Layout */}
                <Col md="2">
                    <h2>Right</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;
