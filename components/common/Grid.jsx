import React from "react";

const Container = (props) => (
    <div
        {...props}
        className={`container ${props.className}`}
    >
        {props.children}
    </div>
);

const Row = (props) => (
    <div
        {...props}
        className={`row ${props.className}`}
    >
        {props.children}
    </div>
);

const Col = (props) => (
    <div
        {...props}
        className={`col ${props.className}`}
    >
        {props.children}
    </div>
);

export { Container, Row, Col };
