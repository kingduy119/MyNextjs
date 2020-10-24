import React from "react";
import { Container, Row, Col, Form, Card, Link } from "../common";

const SigninForm = (props) => {
    return (
        <Card className="signin">
            <Container>
                <form action="/v1/signin" method="GET">
                    <Row>
                        <Col className="signin__col">
                            <Form.Input name="username" type="text" placeholder="Username" required />
                        </Col>
                        <Col className="signin__col">
                            <Form.Input name="password" type="password" placeholder="Password" required />
                        </Col>
                        <Col className="signin__col">
                            <Form.Button className="signin__btn--submit" type="submit">Signin</Form.Button>
                        </Col>
                        <Col className="signin__col">
                            <Link href="#forgetpwd" onClick={props.onForgetPwd}>Forget password?</Link>
                        </Col>
                        <hr />
                        <Col className="signin__col">
                            <Form.Link className="signin__link--signup" onClick={props.onSignup}>Create Account</Form.Link>
                        </Col>
                        <Col className="signin__col">
                            <Form.Link className="signin__link  signin__link--google" href="/v1/google"><i className="fa fa-google fa-fw"></i></Form.Link>
                            <Form.Link className="signin__link  signin__link--facebook" href="#"><i className="fa fa-facebook fa-fw"></i></Form.Link>
                            <Form.Link className="signin__link signin__link--twitter" href="#"><i className="fa fa-twitter fa-fw"></i></Form.Link>
                        </Col>
                    </Row>
                </form>
            </Container>
        </Card>
    );
};

export default SigninForm;


