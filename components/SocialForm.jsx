import React from "react";
import { Container, Row, Col, Button, Input, Card, Link } from "./common";

const SocialButton = (props) =>
    <a className={props.className} href={props.href}><i className={props.icon} />
        {props.children}
    </a>

function LoginFormComponent(props) {
    return (
        <Container className="login">
            <Container className="login-body">
                <form action="/v1/signin" method="get">
                    <Row className="login-grid">
                        <h2 className="center">Login with Social Media or Manually</h2>
                        <div className="vl">
                            <span className="vl-innertext">or</span>
                        </div>

                        <Col className="m6">
                            <SocialButton
                                className="login-btn login-btn_facebook"
                                icon="fa fa-facebook fa-fw"
                                href="#"
                            >Login with Facebook</SocialButton>

                            <SocialButton
                                className="login-btn login-btn_twitter"
                                icon="fa fa-twitter fa-fw"
                                href="#"
                            >Login with Twitter</SocialButton>

                            <SocialButton
                                className="login-btn login-btn_google"
                                icon="fa fa-google fa-fw"
                                href={`/v1/google`}
                            >Login with Google</SocialButton>
                        </Col>

                        <Col className="m6">
                            <div className="hide-in-manually">
                                <p>Or sign in manually</p>
                            </div>

                            <input className="login-input" type="text" name="username" placeholder="Username" required />
                            <input className="login-input" type="password" name="password" placeholder="Password" required />
                            <input className="login-input login-input_submit" name="submit" type="submit" value="Login" />
                        </Col>
                    </Row>
                </form>
            </Container>
            <Container className="login-bottom">
                <Row className="login-bottom-row">
                    <Col className="m6">
                        <a href="#" class="login-btn login-btn_signup" onClick={props.onShowSignupForm}>Sign up</a>
                    </Col>
                    <Col className="m6">
                        <a href="#" class="login-btn login-btn_forgot" onClick={props.onShowForgotForm}>Forgot password?</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

function SignupFormComponent(props) {
    return (
        <form action="/v1/signup" method="post">
            <Container className="signup">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account</p>
                <hr className="signup-hr" />

                <label htmlFor="username"><b>Username</b></label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="signup-input"
                    required
                />

                <label htmlFor="pwd"><b>Password</b></label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="signup-input"
                    required
                />

                <label htmlFor="pwd"><b>Repeat Password</b></label>
                <input
                    type="password"
                    name="passwordrepeat"
                    placeholder="Repeat Password"
                    className="signup-input"
                    required
                />

                <label>
                    <input
                        className="signup-checkbox"
                        type="checkbox"
                        name="remember"
                    /> Remember me
                </label>
                <br />

                <Container className="signup-bottom">
                    <Button
                        className="signup-btn signup-btn_cancel"
                        onClick={props.onCancel}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        className="signup-btn signup-btn_signup"
                    >
                        Sign Up
                    </Button>
                </Container>
            </Container>
        </form>
    );
}

function ForgotFormComponent(props) {

    let sendForgotPwd = () => { alert("This function has no idea :))"); }

    return (
        <form>
            <Container className="forgot">
                <Row className="forgot-row">
                    <Col className="forgot-header">
                        <h2>Find your account:</h2>
                    </Col>
                    <Col className="forgot-body">
                        <label>Please input your acount id:</label>
                        <Input className="forgot-input forgot-input_username" type="text" placeholder="Username" />
                    </Col>
                    <Col className="forgot-bottom">
                        <Button className="forgot-btn btn-blue" onClick={sendForgotPwd}>Send</Button>
                        <Button className="forgot-btn forgot-btn_cancel" onClick={props.onCancel}>Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

const SigninForm = (props) => {
    let inputUsername = <Input className="signin-input" name="username" type="text" placeholder="Username" required />;
    let inputPassword = <Input className="signin-input" name="password" type="password" placeholder="Password" required />;
    let btnSignin = <Button className="signin-btn signin-btn-signin" type="submit">Signin</Button>;

    let linkSignup = <Link className="signin-btn signin-btn-signup" onClick={props.onSignup}>Create Account</Link>
    let linkForget = <Link href="#forgetpwd" onClick={props.onForgetPwd}>Forget password?</Link>
    let linkTwitter = <Link className="signin-link signin-link_twitter" href="#"><i className="fa fa-twitter fa-fw"></i></Link>
    let linkFacebook = <Link className="signin-link signin-link_facebook" href="#"><i className="fa fa-facebook fa-fw"></i></Link>
    let linkGoogle = <Link className="signin-link signin-link_google" href="/v1/google"><i className="fa fa-google fa-fw"></i></Link>
    return (
        <Card className="signin">
            <Container className="signin-container">
                <form action="/v1/signin" method="GET">
                    <Row>
                        <Col className="signin-col">{inputUsername}</Col>
                        <Col className="signin-col">{inputPassword}</Col>
                        <Col className="signin-col">{btnSignin}</Col>
                        <Col className="signin-col">{linkForget}</Col>
                        <hr />
                        <Col className="signin-col">{linkSignup}</Col>
                        <Col className="signin-col">{linkGoogle}{linkFacebook}{linkTwitter}</Col>
                    </Row>
                </form>
            </Container>
        </Card>
    );
};

// ????????????????????????????????????????????????????????????????????????????????????????

const Modal = (props) =>
    (<div className="modal" id={props.id}>
        <div className={`modal-content ${props.className || ''}`}>
            {props.children}
        </div>
    </div>)

function SigninModal(props) {

    let handleClose = id => e => { e.preventDefault(); document.getElementById(id).style = 'none'; }

    let inputUsername = <Input className="signin-input" name="username" type="text" placeholder="Username" required />;
    let inputPassword = <Input className="signin-input" name="password" type="password" placeholder="Password" required />;
    let btnSignup = <Button className="signin-btn signin-btn-signin" type="submit">Signup</Button>;
    let btnClose = <span className="modal-close" onClick={handleClose('signup-modal')}>&times;</span>
    return (
        <Modal className="signin-modal" id='signup-modal'>
            <form action="/v1/signup" method="post" style={{ width: '296px', margin: 'auto' }}>
                <Container className="card round">
                    <Col className="signin-col">{btnClose}</Col>
                    <Col className="signin-col">{inputUsername}</Col>
                    <Col className="signin-col">{inputPassword}</Col>
                    <Col className="signin-col">{btnSignup}</Col>
                </Container>
            </form>
        </Modal>
    )
}

export {
    LoginFormComponent, SignupFormComponent, ForgotFormComponent,
    SigninForm,
    SigninModal,
};


