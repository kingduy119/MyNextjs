import React from "react";
import { Container, Row, Col, Button } from "../components/common";

function AddTodo(props) {
    return (
        <Container style={{ border: `solid 1px black` }}>
            <input type="text" name="todoTilte" placeholder="Title" />
            <input type="text" name="todoText" placeholder="To do something" />
            <Button>Add</Button>
        </Container>
    );
}

function DisplayTodo(props) {
    let todos = [{ id: 111, title: "Todo Title 1", text: "Todo Somthing 1" }];
    return (
        <Container style={{ border: `solid 1px black`, minHeight: `980px` }}>
            <Row>
                {todos.map(todo => (
                    <Col style={{ border: `solid 1px black` }}>
                        <h2>{todo.id}</h2>
                        <h2>{todo.title}</h2>
                        <div>{todo.text}</div>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </Col>
                ))}
                {/* <Col style={{ border: `solid 1px black` }}>
                    <h2>Todo Title 1</h2>
                    <div>Todo Text 1</div>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Col>
                <Col style={{ border: `solid 1px black` }}>
                    <h2>Todo Title 2</h2>
                    <div>Todo Text 2</div>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Col> */}
                {props.todos}
            </Row>
        </Container>
    )
}

function TodoPage(props) {
    // let todos = [{ id: 111, title: "Todo Title 1", text: "Todo Somthing 1" }];
    return (
        <Container>
            <Row>
                <Col className="col-3">
                    <AddTodo />
                </Col>
                <Col className="col-9">
                    <DisplayTodo />
                </Col>
            </Row>
        </Container>
    );
}



export default TodoPage;
