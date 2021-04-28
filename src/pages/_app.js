import App from 'next/app';
import React from 'react';
import { wrapper } from '../redux/store';
import { isMobile } from '../utils/isMobile';
import 'bootstrap/dist/css/bootstrap.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ?
          await Component.getInitialProps(ctx) : {}
        ),
        isMobile: isMobile({ req: ctx.req }),
        pathname: ctx.pathname,
      }
    }
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
        <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);
