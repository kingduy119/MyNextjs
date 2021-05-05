import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

export default function Page({ title, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </React.Fragment>
  );
}
Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};
