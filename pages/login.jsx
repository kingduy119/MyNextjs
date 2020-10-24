import React from "react";
import { Container, Row, Col, Modal, Card } from "../components/common";
// import { SigninForm } from "../components/SocialForm";
import SigninForm from "../components/login/SigninForm";
import SignupForm from "../components/login/SignupForm";

// TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP
let urlAvatar =
    "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/c47.0.160.160a/p160x160/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=81vsEa2epdwAX9TWkbr&_nc_ht=scontent.fsgn2-4.fna&_nc_tp=27&oh=af8c1df0db8fcebed7208574c7672f99&oe=5FA230A4";

const RecentUser = (props) => (
    <Row className="recent" onClick={props.onClick}>
        <Col className="recent-top">
            <img src={urlAvatar} style={{ width: '160px', height: '160px' }} />
        </Col>
        <Col className="recent-bottom">
            Add Account
        </Col>
    </Row>
)
function RecentList(props) {
    let onClick = () => alert("onClick");

    return (
        <Row className="list">
            <Col className="list-item"> <RecentUser onClick={onClick} /> </Col>
        </Row>
    );
}

// TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP

function Page(props) {
    let [showModal, setShowModal] = React.useState(false);
    let styleModal = { width: '300px', marginLeft: 'auto', marginRight: 'auto' }

    return (
        <>
            <Container className="register">
                <Container className="register-content">
                    <Row className="register-grid">
                        <Col className="register-left">
                            <Container>
                                <div style={{ fontSize: "20px" }}><b>Recent Login</b></div>
                                <div>Click your picture or add new account:</div>
                                <br />
                                <RecentList />
                            </Container>
                        </Col>

                        {/* Signin */}
                        <Col className="register-right">
                            <SigninForm onForgetPwd={() => alert('onForgetPwd')} onSignup={() => setShowModal(true)} />
                        </Col>
                    </Row>
                </Container>
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


