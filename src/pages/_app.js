import App from 'next/app';
import React from 'react';
import PropTypes from 'prop-types';
import { wrapper } from '../redux/store';
import { isMobile } from '../utils/isMobile';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';

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
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default wrapper.withRedux(MyApp);
