import React from 'react';
import { connect } from "react-redux";
import NotificationSystem from "../components/NotificationSystem" ;

class IndexPage extends React.Component {
    render() {
        return  <>
            <h2>Index Page</h2>
            <NotificationSystem />
        </>;
    }
}


export default connect()(IndexPage);
// export default IndexPage;
