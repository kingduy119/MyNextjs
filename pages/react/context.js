import React from "react";

import Layout from "../../components/Layout";

const PageContext = React.createContext("Page Context");

class ReactContext extends React.Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
    }

    componentDidMount() {

    }

    componentWillMount() {
        clearInterval(this.timeID);
    }

    componentWillUnmount() {
    }

    static contextType = PageContext;
    render() {
        let context = this.context;
        return (
            <Layout>
                <h1>Hello, {context}</h1>

            </Layout>
        );
    }
}

class Chosen extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.chosen();
    }

    componentWillUnmount() {
        this.$el.chosen('destroy');
    }

    render() {
        return (
            <select>
                {this.props.children}
            </select>
        );
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }


    componentDidCatch(err, errInfo) {
        this.setState({
            error: err,
            errorInfo: errInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}


export default ReactContext;
