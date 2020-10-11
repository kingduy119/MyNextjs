import React from "react";

const Link = (props) => (
    <a
        {...props}
        className={`link ${props.className || ''}`}
    >
        {props.children}
    </a>
);


export default Link;