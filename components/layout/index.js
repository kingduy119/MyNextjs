import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../navbar';


class Layout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;