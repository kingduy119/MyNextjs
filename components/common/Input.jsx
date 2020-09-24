import React from "react";

const Input = (props) => (
    <input
        {...props}
        className={`input ${props.classname || ""}`}
    />
)


export default Input;
