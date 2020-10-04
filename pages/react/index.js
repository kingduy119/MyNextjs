import React from "react";
import { connect } from "react-redux";
import { pushNotify } from "../../lib/store/notification";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";


function ReactIndex(props) {
    let count = 0;
    return (
        <Layout>
            <h2>React Index</h2>
            <Button onClick={() => props.pushNotify(`Hello There", "I love you ${count++}!`)}>Notify</Button>
        </Layout>
    );
}

const mapDispatchToProps = (dispatch) => ({
    pushNotify: (title, content) => { dispatch(pushNotify(title, content)) },
});

export default connect(null, mapDispatchToProps)(ReactIndex);