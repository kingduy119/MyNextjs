import React from "react";
import { Container, Card, Badge } from "../common";


const Interests = (props) => {
    return (
        <Card>
            <Container>
                <p>Interests:</p>
                <p>
                    <Badge className="theme-d5 small">News</Badge>
                    <Badge className="theme-d4 small">W3School</Badge>
                    <Badge className="theme-d3 small">Labels</Badge>
                    <Badge className="theme-d2 small">Games</Badge>
                    <Badge className="theme-d1 small">Friends</Badge>
                </p>
            </Container>
        </Card>
    )
}


export default Interests;

