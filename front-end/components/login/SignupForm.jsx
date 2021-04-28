import React from "react";
import { Row, Col, Form, Button, Input } from "../common"

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
            // onSubmid={this.onHandleSubmit}
            <Form action='/v1/signup' method="POST">
                <Row>
                    <Col className="mg-b4">
                        <Input
                            className="round"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            onChange={this.onHandleChange}
                            style={{ float: "right", width: '49%' }}
                            required
                        />
                        <Input
                            className="round"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            onChange={this.onHandleChange}
                            style={{ float: "left", width: '49%' }}
                            required
                        />
                    </Col>
                    <Col className="mg-b4">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="block round"
                            onChange={this.onHandleChange}
                            required />
                    </Col>
                    <Col className="mg-b4">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="block round"
                            onChange={this.onHandleChange}
                            required />
                    </Col>
                    <Col className="mg-b4">
                        <Input
                            type="password"
                            name="comfirm"
                            placeholder="Comfirm Password"
                            className="block round"
                            onChange={this.onHandleChange}
                            required />
                    </Col>
                    <Col className="mg-b4">
                        <label>Birthday:</label>
                        <Form.Select
                            name="day"
                            list={totalDay}
                            onChange={this.onHandleChange} />
                        <Form.Select
                            name="month"
                            list={totalMonth}
                            onChange={this.onHandleChange} />
                        <Form.Select
                            name="year"
                            list={totalYear}
                            onChange={this.onHandleChange} />
                    </Col>
                    <Col className="mg-b4 text-center">
                        <Button
                            type="submit"
                            className="round white-bluedark"
                        >Signup
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SignupForm;
