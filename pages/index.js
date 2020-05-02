// import React from "react";
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import Layout from "../components/layout";

// import withAuth from "../lib/withAuth";

// class Index extends React.Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       displayName: PropTypes.string,
//       email: PropTypes.string.isRequired,
//     }),
//   };

//   static defaultProps = {
//     user: null,
//   };

//   render() {
//     const { user } = this.props;
//     return (
//       <div style={{ padding: '10px 45px' }}>
//         <Head>
//           <title>Dashboard</title>
//           <meta name="description" content="List of purchased books." />
//         </Head>
//         <Layout>
//           <p> Dashboard </p>
//           <p>
//             Email:&nbsp;
//           {user.email}
//           </p>
//         </Layout>
//       </div>
//     );
//   }
// }

// export default withAuth(Index);








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
