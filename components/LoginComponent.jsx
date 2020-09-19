import React from "react";
import { Container, Row, Col, Button } from "./common"
import { API_URL } from "../lib/config";

function LoginComponent(props) {
    return (
        <div>
            <div>
                <input type="text" placeholder="Username" />
            </div>

            <div>
                <input type="password" placeholder="Password" />
            </div>

            <div>
                <button>Sign Up</button>
                <button>Sign In</button>
                <button>Forget Password</button>
                <br />
                <button>
                    <img
                        src="https://storage.googleapis.com/builderbook/G.svg"
                        alt="Log in with Google"
                    />
                    <a href={`http://localhost:8000/v1/google`}>Log in with Google</a>
                </button>
            </div>
        </div >
    );
}

const SocialButton = (props) =>
    <a className={props.className} href={props.href}><i className={props.icon} />
        {props.children}
    </a>

function SignupFormComponent(props) {
    return (
        <form>
            <Container className="signup">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account</p>
                <hr className="signup-hr" />

                <label htmlFor="username"><b>Username</b></label>
                <input className="signup-input" type="text" placeholder="Username" name="username" required />

                <label htmlFor="pwd"><b>Password</b></label>
                <input className="signup-input" type="password" placeholder="Password" name="pwd" required />

                <label htmlFor="pwd"><b>Repeat Password</b></label>
                <input className="signup-input" type="password" placeholder="Repeat Password" name="repeat-pwd" required />

                <label>
                    <input className="signup-checkbox" type="checkbox" name="remember" /> Remember me
                </label>
                <br />

                <Container className="signup-bottom">
                    <Button className="signup-btn signup-btn_cancel" onClick={props.onCancel}>Cancel</Button>
                    <Button className="signup-btn signup-btn_signup">Sign Up</Button>
                </Container>
            </Container>
        </form>
    );
}

export function LoginSocialOrManually(props) {
    let [showSignup, setShowSignup] = React.useState(false);

    return (
        <>
            {!showSignup ?
                <SignupFormComponent onCancel={() => setShowSignup(!showSignup)} />
                :
                <Container className="login">
                    <Container className="login-body">
                        <form>
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
                                        href={`${API_URL}/v1/google`}
                                    >Login with Google</SocialButton>
                                </Col>

                                <Col className="m6">
                                    <div className="hide-in-manually">
                                        <p>Or sign in manually</p>
                                    </div>

                                    <input className="login-input" type="text" name="" placeholder="Username" required />
                                    <input className="login-input" type="password" name="" placeholder="Password" required />
                                    <input className="login-input login-input_submit" type="submit" value="Login" />
                                </Col>
                            </Row>
                        </form>
                    </Container>
                    <Container className="login-bottom">
                        <Row className="login-bottom-row">
                            <Col className="m6">
                                <a href="#" class="login-btn login-btn_signup" onClick={() => setShowSignup(!showSignup)}>Sign up</a>
                            </Col>
                            <Col className="m6">
                                <a href="#" class="login-btn login-btn_forgot">Forgot password?</a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }
        </>
    );
}

export default LoginComponent;


