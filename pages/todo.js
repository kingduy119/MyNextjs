import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/todo/AddTodo';
import ShowListTodo from '../components/todo/ShowListTodo';

import { addTodo } from '../lib/store/todo';
import Layout from '../components/layout';

class Index extends React.Component {
  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <Layout>
        <h2>Todo Page</h2>
        <AddTodo />
        <ShowListTodo />
      </Layout>
    );
  }
}

export default connect()(Index);
