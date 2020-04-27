import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo/ShowTodo';

import { addTodo } from '../lib/store/todo';
import Layout from '../components/layout';

class Index extends React.Component {
  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <Layout>
        <h2>Todo Page</h2>
        
        <Todo />
      </Layout>
    );
  }
}

export default connect()(Index);
