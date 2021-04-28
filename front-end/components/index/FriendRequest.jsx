import React from "react";
import { Container, Row, Col, Card, Button } from "../common"

const FriendRequest = (props) => (
    <Card className="round center">
        <Container>
            <p>Friend Request</p>
            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{ width: "50%" }} />
            <br />
            <span>Jane Doe</span>
            <Row className="opacity">
                <Col className="col-6">
                    <Button className="btn-green block section" title="Accept">
                        <i className="fa fa-check"></i>
                    </Button>
                </Col>
                <Col className="col-6">
                    <Button className="btn-red block section" title="Decline">
                        <i className="fa fa-remove"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    </Card>
);


export default FriendRequest;