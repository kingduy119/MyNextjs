import App, { AppInitialProps } from 'next/app';
import React from 'react';
import Store from '../lib/store';
import store from "../store";
import { isMobile } from "../lib/isMobile"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {
      isMobile: isMobile({ req: ctx.req })
    }

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default store.withRedux(MyApp);
