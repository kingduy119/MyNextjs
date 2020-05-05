import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { VerticalMenu } from "./common/Menu";

const Header = () => (
    <Container className="header-container">
        <Jumbotron className="header-jumb">
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>

            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
        <VerticalMenu />
    </Container>
);

export default Header;