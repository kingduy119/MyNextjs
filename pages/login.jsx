import React from "react";
import { Container, Row, Col, Modal, Card } from "../components/common";
import SigninForm from "../components/login/SigninForm";
import SignupForm from "../components/login/SignupForm";
import RecentUser from "../components/login/RecentUser";

function Page(props) {
    let [showModal, setShowModal] = React.useState(false);
    let styleModal = {
        width: '300px', marginLeft: 'auto', marginRight: 'auto',
        padding: '5px'
    }
    let stylePage = {
        minWidth: '350px',
        background: '#f0f2f5',
        padding: '92px 16px 132px 16px',
    }

    return (
        <>
            <Container style={stylePage}>
                <Row>
                    <Col className="col-8">
                        <Container>
                            <div style={{ fontSize: "20px" }}><b>Recent Login</b></div>
                            <div>Click your picture or add new account:</div>
                            <br />
                            <RecentUser />
                        </Container>
                    </Col>

                    {/* Signin */}
                    <Col className="col-4">
                        <SigninForm onForgetPwd={() => alert('onForgetPwd')} onSignup={() => setShowModal(true)} />
                    </Col>
                </Row>
            </Container>

            {/* Signup */}
            <Modal isShow={showModal}>
                <Modal.Content className="card round white" style={styleModal}>
                    <Col>
                        <Modal.Close onClick={() => setShowModal(false)} />
                        <h2>Signin Quickly</h2>
                    </Col>
                    <hr />
                    <SignupForm />
                </Modal.Content>
            </Modal>
        </>
    );
}

export default Page;


