import App from 'next/app';
import React from 'react';
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

    // All dropdowns
    window.onclick = (e) => {
      if(
        !e.target.matches(".idrdown-btn .idrdown-icon") &&
        !e.target.matches(".idrdown-badge") &&
        !e.target.matches(".idrdown-content")
      ) {
        let drdContents = document.getElementsByClassName("idrdown-content");
        for(let i=0; i < drdContents.length; i++) {
          if(drdContents[i].classList.contains("show")) {
            drdContents[i].classList.remove("show");
          }
        }
      }//End if
    } //End window.onclick

  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default store.withRedux(MyApp);
