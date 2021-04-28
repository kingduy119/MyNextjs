import React from "react";
import { Container, Row, Col, Button, Input, Card, Link } from "../common";

const SigninForm = (props) => {
    return (
        <Card className="signin">
            <Container>
                <form action="/v1/signin" method="GET">
                    <Row className="text-center">
                        <Col className="pd-8">
                            <Input
                                className="block"
                                name="username"
                                type="text"
                                placeholder="Username" required />
                        </Col>
                        <Col className="pd-8">
                            <Input
                                className="block"
                                name="password"
                                type="password"
                                placeholder="Password" required />
                        </Col>
                        <Col className="pd-8">
                            <Button
                                type="submit"
                                className="round block white bg-facebook"
                            >Signin
                            </Button>
                        </Col>
                        <Col className="pd-8">
                            <Link
                                href="#forgetpwd"
                                onClick={props.onForgetPwd}
                            >Forget password?
                            </Link>
                        </Col>
                        <hr />
                        <Col className="pd-8">
                            <Link
                                className="pd-m round white-green"
                                onClick={props.onSignup}
                            >Create Account
                            </Link>
                        </Col>
                        <Col className="pd-8">
                            <Link
                                href="/v1/google"
                                className="round mg-r4 white bg-google"
                            ><i className="fa fa-google fa-fw"></i></Link>
                            <Link
                                href="#"
                                className="round mg-r4 white bg-facebook"
                            ><i className="fa fa-facebook fa-fw"></i></Link>
                            <Link
                                href="#"
                                className="round mg-r4 white bg-twitter"
                            ><i className="fa fa-twitter fa-fw"></i></Link>
                        </Col>
                    </Row>
                </form>
            </Container>
        </Card>
    );
};

export default SigninForm;


