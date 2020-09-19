import React from "react";
import PropTypes from "prop-types";

function useAuth(Page) {
    class BaseComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        static async getInitialProps(ctx) {
            let { user } = ctx.req;
            return { user };
        }

        render() {
            return <Page {...this.props} />
        }
    }

    return BaseComponent;
}


export default useAuth;
