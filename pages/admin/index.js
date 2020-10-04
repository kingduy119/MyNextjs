import React from "react";
import { Table, Form, Button } from "react-bootstrap";
import { listUser, createUser, changePassword, deleteUser } from "../../lib/api/admin";

class AdminIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            userId: "",
            userPwd: "",
            userNewPwd: "",
        }


        this.OnUsernameInput = this.OnUsernameInput.bind(this);
        this.onPwdInput = this.onPwdInput.bind(this);
        this.onNewPwdInput = this.onNewPwdInput.bind(this);

        this.onList = this.onList.bind(this);
        this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    async onList() {
        let { data } = await listUser();
        if (data) this.setState({ listUser: data });
    }

    OnUsernameInput(event) { this.setState({ userId: event.target.value }); }

    onPwdInput(event) { this.setState({ userPwd: event.target.value }); }

    onNewPwdInput(event) { this.setState({ userNewPwd: event.target.value }); }

    async onChangeInfo(event) {
        event.preventDefault();
        const { userId, userPwd, userNewPwd } = this.state;
        const { error, state, data } = await changePassword({ username: userId, password: userPwd, displayName: userNewPwd });
        if (error) { alert(error); }
        else { alert(state); }
    }

    async onRegisterSubmit(event) {
        event.preventDefault();

        const { userId, userPwd } = this.state;
        const { error, state, data } = await createUser({ username: userId, password: userPwd });
        if (error) { alert(error); }
        else { alert(state); }
    }

    async onDeleteUser(event) {
        event.preventDefault();

        const { userId, userPwd } = this.state;
        const { error, state, data } = await deleteUser({ username: userId, password: userPwd });
        if (error) { alert(error); }
        else { alert(state); }
    }

    async componentDidMount() {
        console.log(`AdminPage:: componentDidMount`);
        console.log(`listUser: ${JSON.stringify(this.state.listUser)}`);
    }

    render() {
        const { listUser } = this.state;

        return (
            <div class="container">
                <p><Button var="primary" onClick={this.onList}>List</Button></p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Display Name</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.length > 0
                            && listUser.map(user => (
                                <tr>
                                    <td>{user.userId}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.isAdmin ? "true" : "false"}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>

                <Form onSubmit={this.onRegisterSubmit}>
                    <Form.Group controlId="form-add-user">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text" placeholder="Username"
                            value={this.state.userId}
                            onChange={this.OnUsernameInput}
                        />
                    </Form.Group>

                    <Form.Group controlId="form-add-user">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password" placeholder="Password"
                            value={this.state.userPwd}
                            onChange={this.onPwdInput}
                        />
                    </Form.Group>

                    <Form.Group controlId="form-add-user">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control
                            type="text" placeholder="New Password"
                            value={this.state.userNewPwd}
                            onChange={this.onNewPwdInput}
                        />
                    </Form.Group>

                    <br />
                    <Button var="primary" type="submit">Regiter</Button>
                </Form>
                <p><Button var="primary" onClick={this.onChangeInfo}>Change Info</Button></p>
                <p><Button var="primary" onClick={this.onDeleteUser}>Delete</Button></p>
            </div>
        );
    }
}

export default AdminIndex;
