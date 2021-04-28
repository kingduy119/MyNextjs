import React from "react";
import { Container, Row, Col, Form, Card, Link } from "./common";

const SigninForm = (props) => {
    let inputUsername = <Form.Input name="username" type="text" placeholder="Username" required />;
    let inputPassword = <Form.Input name="password" type="password" placeholder="Password" required />;
    let btnSubmit = <Form.Button className="signin__btn--submit" type="submit">Signin</Form.Button>;

    let linkSignup = <Form.Link className="signin__link--signup" onClick={props.onSignup}>Create Account</Form.Link>
    let linkForget = <Link href="#forgetpwd" onClick={props.onForgetPwd}>Forget password?</Link>
    let linkTwitter = <Form.Link className="signin__link signin__link--twitter" href="#"><i className="fa fa-twitter fa-fw"></i></Form.Link>
    let linkFacebook = <Form.Link className="signin__link  signin__link--facebook" href="#"><i className="fa fa-facebook fa-fw"></i></Form.Link>
    let linkGoogle = <Form.Link className="signin__link  signin__link--google" href="/v1/google"><i className="fa fa-google fa-fw"></i></Form.Link>
    return (
        <Card className="signin">
            <Container>
                <form action="/v1/signin" method="GET">
                    <Row>
                        <Col className="signin__col">{inputUsername}</Col>
                        <Col className="signin__col">{inputPassword}</Col>
                        <Col className="signin__col">{btnSubmit}</Col>
                        <Col className="signin__col">{linkForget}</Col>
                        <hr />
                        <Col className="signin__col">{linkSignup}</Col>
                        <Col className="signin__col">{linkGoogle}{linkFacebook}{linkTwitter}</Col>
                    </Row>
                </form>
            </Container>
        </Card>
    );
};

export { SigninForm };


