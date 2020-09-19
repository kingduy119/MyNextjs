import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";

const withAuth = (Page) => {

    class BaseComponent extends React.Component {
        static propTypes = {
            user: PropTypes.shape({
                id: PropTypes.string,
                isAdmin: PropTypes.bool,
            })
        };

        static defaultProps = {
            user: null,
        };

        constructor(props) {
            super(props);
            this.state = {
                user: null,
            }
        }

        static async getInitialProps(ctx) {

            const user = ctx.req ? ctx.req.user : null;
            const props = { user };

            if (Page.getInitialProps) {
                Object.assign(props, (await Page.getInitialProps(ctx)) || {});
            }
            return props;
        }

        componentDidMount() {
            Router.push('/login');
        }

        render() {
            return <Page {...this.props} />;
        }
    }

    return BaseComponent;
}

export default withAuth;