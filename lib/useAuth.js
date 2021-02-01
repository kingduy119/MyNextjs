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
            let user = ctx.req
                ?
                ctx.req.user && ctx.req.user.toObject()
                : null;

            // user = fakeUser; // DEV
            const props = { user };
            if (BaseComponent.getInitialProps) {
                Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {})
            }
            return props;
        }

        componentDidMount() {
            console.log(`USER: ${JSON.stringify(this.props.user)}`)
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

let fakeUser = {
    displayName: "WW Start",
    _id: "5f6cca5f9c22f218182ffef0",
    avatarUrl: "https://lh3.googleusercontent.com/a-/AOh14Gi5SCcinlELoG1V8FNmUu6-XDUudrCnR6UOtipk"
}

export default useAuth;
