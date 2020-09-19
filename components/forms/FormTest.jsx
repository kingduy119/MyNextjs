import React from "react";
import { connect } from "react-redux";
import { Table, Form, Button, FormGroup } from "react-bootstrap";
import { create, find } from "../../lib/store/admin-reducer";

const FormInput = (props) => (
    <FormGroup className={props.className}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </FormGroup>
)


class FormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            newName: "",
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNewNameChange = this.onNewNameChange.bind(this);
    }

    onUsernameChange(event) { this.setState({ username: event.target.value }); }
    onPasswordChange(event) { this.setState({ password: event.target.value }); }
    onNewNameChange(event) { this.setState({ newName: event.target.value }); }

    onCreate(event) {
        event.preventDefault();

        const { username, password } = this.state;
        this.props.create({ username, password });
        this.refresh();
    }

    onFindOne(event) {
        event.preventDefault();

    }

    onUpdateOne(event) {
        event.preventDefault();

    }

    onDeleteOne(event) {
        event.preventDefault();

    }

    refresh() { this.setState({ username: "", password: "", newName: "" }); }

    render() {
        return (
            <Form>
                <FormInput
                    label="Username:"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onUsernameChange}
                />

                <FormInput
                    label="Password:"
                    type="password"
                    placeholder="Username"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />

                <FormInput
                    label="Change Name:"
                    type="text"
                    placeholder="Example"
                    value={this.state.newName}
                    onChange={this.onNewNameChange}
                />
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    create: (user) => { dispatch(create(user)) },
    find: () => { dispatch(find()) }
});

export default connect(mapDispatchToProps)(FormTest)

