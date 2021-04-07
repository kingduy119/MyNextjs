import React from "react";
import { connect } from "react-redux";

import { ModalFormSignUp } from "../components/Dialogs";
import { FormLogin } from "../components/Forms";

class LoginPage extends React.Component {
    render() {
        return <>
            <div>Login Page</div>
            {/* <ModalFormSignUp /> */}
            <div className="container my_dp-container" style={{
                borderRadius: "5px",
                borderColor: "#f2f2f2",
                padding: "20px 0 30px 0"
            }}>
               <FormLogin /> 
            </div>
        </>;
    }
}

export default connect()(LoginPage);


    // return (
    //     <>
    //         <Container style={stylePage}>
    //             <Row>
    //                 <Col className="col-8">
    //                     <Container>
    //                         <div style={{ fontSize: "20px" }}><b>Recent Login</b></div>
    //                         <div>Click your picture or add new account:</div>
    //                         <br />
    //                         <RecentUser />
    //                     </Container>
    //                 </Col>

    //                 {/* Signin */}
    //                 <Col className="col-4">
    //                     <SigninForm
    //                         onForgetPwd={() => alert('onForgetPwd')}
    //                         onSignup={() => setShowModal(true)} />
    //                 </Col>
    //             </Row>
    //         </Container>

    //         {/* Signup */}
    //         <Modal isShow={showModal}>
    //             <Modal.Content className="card round white" style={styleModal}>
    //                 <Col>
    //                     <Modal.Close onClick={() => setShowModal(false)} />
    //                     <h2>Signin Quickly</h2>
    //                 </Col>
    //                 <hr />
    //                 <SignupForm />
    //             </Modal.Content>
    //         </Modal>
    //     </>
    // );




