import App from 'next/app';
import React from 'react';

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Component />
        );
    }
}

export default MyApp;