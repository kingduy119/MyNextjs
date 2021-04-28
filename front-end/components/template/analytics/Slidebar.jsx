import React from "react";
import { Container, Row, Col, Link } from "../../common";

const Slidebar = (props) => (
    <nav className="slidebar animate-left" id="slidebar"
        style={{ zIndex: '3', width: '300px', marginTop: '25px' }}
    >
        <Row className="container">
            <Col className="col-4">
                <img className="circle" src="/assets/avatar.jpg" style={{ width: '46px' }} />
            </Col>
            <Col className="col-8">
                <span>Welcome, <strong>Duy</strong></span><br />
                <Link className="bar-item button black" href="#"><i className="fa fa-envelope" /></Link>
                <Link className="bar-item button black" href="#"><i className="fa fa-user" /></Link>
                <Link className="bar-item button black" href="#"><i className="fa fa-cog" /></Link>
            </Col>
        </Row>

        <hr />
        {/* Menu */}
        <Container>
            <h5 className="xlarge" style={{ marginTop: '10px', marginBottom: '10px' }}>Dashboard</h5>
        </Container>
        <Container className="bar-block">
            <Link className="bar-item theme-white-blue"><i className="fa fa-users fa-fw" /> Overview</Link>
            <Link className="bar-item"><i className="fa fa-eye fa-fw" /> Views</Link>
            <Link className="bar-item"><i className="fa fa-users fa-fw" /> Traffic</Link>
            <Link className="bar-item"><i className="fa fa-bullseye fa-fw" /> Geo</Link>
            <Link className="bar-item"><i className="fa fa-diamond fa-fw" /> Orders</Link>
            <Link className="bar-item"><i className="fa fa-bank fa-fw" /> General</Link>
            <Link className="bar-item"><i className="fa fa-history fa-fw" /> History</Link>
            <Link className="bar-item"><i className="fa fa-cog fa-fw" /> Settings</Link>
        </Container>
    </nav>
);

export default Slidebar;

