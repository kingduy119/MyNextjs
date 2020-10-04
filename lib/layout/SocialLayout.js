import React from "react";
import { Container, Row, Col } from "../../components/common";
function SocialLayout(props) {
    return (
        <React.Fragment>
            <Container className="container-navbar">
                {props.navbar}
            </Container>
            <Container className="container-body">
                <Row className="content">
                    <Col className="content-left col-3">
                        {props.left}
                    </Col>
                    <Col className="content-middle col-7">
                        {props.middle}
                    </Col>
                    <Col className="content-right col-2">
                        {props.right}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default SocialLayout;




