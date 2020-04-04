import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    public render() {
        console.log(process.env.URL_APP);
        return (
            <Html>
                <Head>
                    <meta charSet="utf8" />
                    <meta name="viewport" content="with=device-width, initial-scale=10" />
                    <meta name="google" content="notranslate" />
                    <meta name="theme-color" content="#303030" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;