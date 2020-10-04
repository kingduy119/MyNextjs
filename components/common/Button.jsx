import React from "react";

const Button = (props) => (
    <button
        {...props}
        className={`btn ${props.className}`}
    >
        {props.children}
    </button>
);


export default Button;