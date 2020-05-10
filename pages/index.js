import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import AddTodo from '../components/todo/AddTodo';
// import ShowTodo from '../components/todo/ShowListTodo';
// import VisibilityFilter from '../components/todo/VisibilityFilter';

// import { addTodo } from '../lib/store/todo';

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h2>THE BAND</h2>
        <p><i>We love music</i></p>
        <p> We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <Container>
          <Row>
            <Col md="4">
              <p>Name</p>
              <img
                src="assets/bandmember.jpg"
                width="200"
                height="200"
              />
            </Col>

            <Col md="4">
              <p>Name</p>
              <img
                src="assets/bandmember.jpg"
                width="200"
                height="200"
              />
            </Col>

            <Col md="4">
              <p>Name</p>
              <img
                src="assets/bandmember.jpg"
                width="200"
                height="200"
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}


export default Index;