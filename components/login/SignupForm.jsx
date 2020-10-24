import React from "react";
import { Row, Col, Form } from "../common"

function getNumberArray(from, to, operator) {
    let numbers = [];
    for (let num = from; num <= to; num++) {
        numbers = operator == "down" ? [num, ...numbers] : [...numbers, num];
    }
    return numbers;
}

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '', lastname: '',
            username: '', password: '', repeatpwd: '',
            day: 1, month: 1, year: new Date().getFullYear(),
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        alert("onHandleSubmit Signup")
    }

    render() {
        let totalDay = getNumberArray(1, 31);
        let totalMonth = getNumberArray(1, 12);
        let totalYear = getNumberArray(1910, new Date().getFullYear(), 'down');
        let month = parseInt(this.state.month);
        let year = parseInt(this.state.year);

        // Update total days for Feruary
        switch (month) {
            case 2: {
                if ((year / 100 % 4 == 0) ||
                    (year / 100 % 4 != 0) && (year % 4 == 0)) {
                    totalDay = getNumberArray(1, 29)
                    break;
                }
                totalDay = getNumberArray(1, 28);
                break;
            }
            case 4:
            case 6:
            case 9:
            case 10:
                totalDay = getNumberArray(1, 30);
                break;
            default:
                totalDay = getNumberArray(1, 31);
        }

        return (
            <Form onSubmid={this.onHandleSubmit}>
                <Row>
                    <Col className="signup__col">
                        <Form.Input name="lastname" type="text" onChange={this.onHandleChange}
                            className="signup__input--lastname" placeholder="Last Name" style={{ float: "right" }} required />
                        <Form.Input name="firstname" type="text" onChange={this.onHandleChange}
                            className="signup__input--lastname" placeholder="First Name" style={{ float: "left" }} required />
                    </Col>
                    <Col className="signup__col">
                        <Form.Input name="username" type="text" placeholder="Username" onChange={this.onHandleChange} required />
                    </Col>
                    <Col className="signup__col">
                        <Form.Input name="password" type="password" placeholder="Password" onChange={this.onHandleChange} required />
                    </Col>
                    <Col className="signup__col">
                        <Form.Input name="repeatpwd" type="password" placeholder="Repeat Password" onChange={this.onHandleChange} required />
                    </Col>
                    <Col className="signup__col">
                        <label>Birthday:</label>
                        <Form.Select name="day" list={totalDay} onChange={this.onHandleChange} />
                        <Form.Select name="month" list={totalMonth} onChange={this.onHandleChange} />
                        <Form.Select name="year" list={totalYear} onChange={this.onHandleChange} />
                    </Col>
                    <Col className="signup__col">
                        <Form.Button className="signup__btn--submit" type="submit">Signup</Form.Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SignupForm;
