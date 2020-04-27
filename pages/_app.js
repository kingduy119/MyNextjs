import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Store from '../lib/store';
import store from '../lib/store';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component />
            </Provider>
        );
    }
}

export default withRedux(store)(MyApp);