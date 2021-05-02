import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@material-ui/core';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />
        </Head>
        <body>
          <Main />
          {/* <CssBaseline /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
