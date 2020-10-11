import React from "react";
import { Container, Row, Col } from "../components/common";
import { SigninForm, SigninModal } from "../components/SocialForm";

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

// const RecentAdd = (props) => (
//     <Row className="recent">
//         <Col className="recent-top">
//             <img src={urlAvatar} style={{ width: '160px', height: '160px' }} />
//         </Col>
//         <Col className="recent-bottom">
//             <Link>Add Account</Link>
//         </Col>
//     </Row>
// )

function RecentList(props) {
    let onClick = () => alert("onClick");

    return (
        <Row className="list">
            <Col className="list-item"> <RecentUser onClick={onClick} /> </Col>
            {/* <Col className="list-item"> <RecentAdd /> </Col> */}
        </Row>
    );
}

// TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP

function LoginPage(props) {
    const onForgetPwd = () => alert('onForgetPwd');
    const onSignup = () => { document.getElementById('signup-modal').style.display = 'block' };
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
                        <Col className="register-right">
                            <SigninForm
                                onForgetPwd={onForgetPwd}
                                onSignup={onSignup}
                            />
                        </Col>
                    </Row>
                </Container>
                <SigninModal />
            </Container>
        </>
    );
}

export default LoginPage;


// function SocialAuthenticateComponent(props) {
//     let [showSignup, setShowSignup] = React.useState(false);
//     let [showForgot, setShowForgot] = React.useState(false);
//     let onSigupShowOrClose = () => setShowSignup(!showSignup);
//     let onForgotShowOrClose = () => setShowForgot(!showForgot);

//     if (showSignup && !showForgot)
//         return <SignupFormComponent onCancel={onSigupShowOrClose} />;
//     if (!showSignup && showForgot)
//         return <ForgotFormComponent onCancel={onForgotShowOrClose} />;

//     return (
//         <LoginFormComponent
//             onShowSignupForm={onSigupShowOrClose}
//             onShowForgotForm={onForgotShowOrClose}
//         />
//     )
// }
// export default SocialAuthenticateComponent;

