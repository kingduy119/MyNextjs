import React from "react";

const Badge = (props) => (
    <span
        {...props}
        className={`badge ${props.className}`}
    >
        {props.children}
    </span>
);



export default Badge;