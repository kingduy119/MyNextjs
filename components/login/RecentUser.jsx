import React from "react";
import { Container, Row, Col } from "../common";

const User = (props) => (
    < Row className="recent" onClick={props.onClick} >
        <Col className="recent-top">
            <img
                src={props.avatarUrl || '/assets/avatar.jpg'}
                style={{ width: '160px', height: '160px' }} />
        </Col>
        <Col className="recent-bottom">
            Add Account
        </Col>
    </Row >
)


function RecentUser(props) {
    let onClick = () => alert("onClick");

    return (
        <Row className="list">
            <Col className="list-item">
                <User onClick={onClick} />
            </Col>
        </Row>
    );
}

export default RecentUser;
