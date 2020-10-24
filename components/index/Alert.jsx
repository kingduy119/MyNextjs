import React from "react";
import { Container, Card, Badge } from "../common";

const Alert = () => {
    return (
        <Card>
            <Container>
                <Badge className="btn display-topright theme-l3">
                    <i className="fa fa-remove"></i>
                </Badge>
                <p><strong>Hey</strong></p>
                <p>People are looking at your profile. Find out who.</p>
            </Container>
        </Card>
    );
}

export default Alert;