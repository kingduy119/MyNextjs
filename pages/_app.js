import App from 'next/app';
import React from 'react';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import store from '../lib/store';
import { isMobile } from "../lib/isMobile"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = { isMobile: isMobile({ req: ctx.req }) }

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    console.log(`isMobile: ${JSON.stringify(pageProps)}`);
    return { pageProps };
  }

  componentDidMount() {
    // Remove server-side injected Css
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      // <Provider store={store}>
        <Component {...pageProps} />
      // </Provider>
    );
  }
}

export default MyApp;
// export default withRedux(store)(MyApp);
