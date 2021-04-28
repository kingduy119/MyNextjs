import React from "react";
import { Container, Row, Col } from "../../components/common";

function SocialLayout(props) {
    return (
        <React.Fragment>
            <Container className="container-navbar">
                {props.navbar}
            </Container>
            <Container style={{ marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1400px' }}>
                <Row>
                    <Col className="col-3">
                        {props.left}
                    </Col>
                    <Col className="col-7">
                        {props.middle}
                    </Col>
                    <Col className="col-2">
                        {props.right}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default SocialLayout;




