import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/todo/AddTodo';
import ShowTodo from '../components/todo/ShowListTodo';
import VisibilityFilter from '../components/todo/VisibilityFilter';

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
        <ShowTodo />
        <VisibilityFilter filter={"SHOW_ALL"}>ShowALL</VisibilityFilter>
        <VisibilityFilter filter={"SHOW_ACTIVE"}>Show Active</VisibilityFilter>
        <VisibilityFilter filter={"SHOW_COMPLETED"}>Show Completed</VisibilityFilter>
      </Layout>
    );
  }
}

export default connect()(Index);
