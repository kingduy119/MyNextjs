import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "../common";

const Accordion = (props) => {
    let [isGroups, setShowGroups] = useState(false);
    let [isEvents, setShowEvents] = useState(false);
    let [isPhotos, setShowPhotos] = useState(false);
    return (
        <Card className="round">
            {/* #1: Groups */}
            <Button className="theme-l1 block text-left"
                onClick={() => setShowGroups(!isGroups)}
            >
                <i className="accordion-icon fa fa-circle-o-notch fa-fw font-medium"
                /> Groups
            </Button>
            {isGroups &&
                <Container id="accordion-groups">
                    <p>Some content groups</p>
                </Container>
            }

            {/* #2: Event */}
            <Button className="theme-l1 block text-left"
                onClick={() => setShowEvents(!isEvents)}
            >
                <i className="accordion-icon fa fa-calendar-check-o fa-fw font-medium"
                /> Events
            </Button>
            {isEvents &&
                <Container id="accordion-events">
                    <p>Some content groups</p>
                </Container>
            }

            {/* #3: Photos */}
            <Button className="theme-l1 block text-left"
                onClick={() => setShowPhotos(!isPhotos)}
            >
                <i className="accordion-icon fa fa-users fa-fw font-medium"
                /> Photos
            </Button>
            {isPhotos &&
                <Container id="accordion-photos">
                    <Row>
                        <Col>
                            <img
                                style={{ width: "33%" }}
                                src="https://www.w3schools.com/w3images/lights.jpg" />
                            <img
                                style={{ width: "33%" }}
                                src="https://www.w3schools.com/w3images/lights.jpg" />
                            <img
                                style={{ width: "33%" }}
                                src="https://www.w3schools.com/w3images/lights.jpg" />
                        </Col>
                    </Row>
                </Container>
            }
        </Card >
    );
}

export default Accordion;