import React from "react";
import Router from "next/router";

function useAuth(BaseComponent) {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: null,
            }
        }

        static async getInitialProps(ctx) {
            const user = ctx.req
                ?
                ctx.req.user && ctx.req.user.toObject()
                : null;
            const props = { user };
            if (BaseComponent.getInitialProps) {
                Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {})
            }


            return props;
        }

        componentDidMount() {
            if (!this.props.user) {
                Router.push('/login');
                return;
            }
        }

        render() {
            if (!this.props.user) return null;
            return (
                <BaseComponent {...this.props} />
            );
        }
    }
    return App;
}


export default useAuth;
