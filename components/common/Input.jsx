import React from "react";

const Input = (props) => (
    <input
        {...props}
        className={`input ${props.className || ''}`}
    />
)


export default Input;
