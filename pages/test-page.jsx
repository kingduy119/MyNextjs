import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { Table, Form, Button } from "react-bootstrap";
import { onHandleEvent, FIND, updateList } from "../lib/store/admin-reducer";
import sendRequest from "../lib/api/sendRequest";

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onGoogleClick = this.onGoogleClick.bind(this);
    }

    async onClick(event) {
        event.preventDefault();
        this.props.dispatch(onHandleEvent(FIND));
    }

    async onGoogleClick(event) {
        let { data } = sendRequest("http://localhost:8000/v1/google", { method: "GET" });
        console.log(`DATA: ${JSON.stringify(data)}`);
    }

    render() {
        const { users } = this.props;
        console.log(JSON.stringify(users));
        return (
            <div class="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Display Name</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0
                            && users.map(user => (
                                <tr>
                                    <td>{user.userId}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.isAdmin ? "true" : "false"}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <p><Button var="primary" onClick={this.onClick}>List</Button></p>
                <Button var="primary" onClick={this.onGoogleClick}>Google</Button>
            </div>
        );
    }
}

TestPage.propTypes = {
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

TestPage.defaultProps = {
    users: [],
    dispatch: () => { }
}

function mapStateToProps(state) {
    const { admin } = state;
    return { users: admin.users };
}



export default connect(mapStateToProps)(TestPage);
