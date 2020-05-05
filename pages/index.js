import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTodo from '../components/todo/AddTodo';
import ShowTodo from '../components/todo/ShowListTodo';
import VisibilityFilter from '../components/todo/VisibilityFilter';

import { addTodo } from '../lib/store/todo';
import Layout from '../components/layout';

class Index extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      isAdmin: PropTypes.bool,
    }),
  };

  static defaultProps = {
    user: null,
  };

  static async getInitialProps(ctx) {
    const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : null;

  }

  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <Layout />
      // <Layout>
      //   <h2>Todo Page</h2>
      //   <AddTodo />
      //   <ShowTodo /> 
      //   <VisibilityFilter filter={"SHOW_ALL"}>ShowALL</VisibilityFilter>
      //   <VisibilityFilter filter={"SHOW_ACTIVE"}>Show Active</VisibilityFilter>
      //   <VisibilityFilter filter={"SHOW_COMPLETED"}>Show Completed</VisibilityFilter>
      // </Layout>
    );
  }
}

export default connect()(Index);
