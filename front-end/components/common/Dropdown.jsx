import React from "react";

const Dropdown = (props) => (
    <div
        {...props}
        className={`dropdown ${props.className || ""}`}
    >
        {props.children}
    </div>
)

const DropdownToggle = (props) => (
    <button
        {...props}
        type="button"
        className={`dropdown-toggle ${props.className || ""}`}
    >
        {props.children}
    </button>
)

const DropdownMenu = (props) => (
    <div
        {...props}
        className={`dropdown-menu ${props.className || ""}`}
    >
        {props.children}
    </div>
)

const DropdownItem = (props) => (
    <a
        {...props}
        className={`dropdown-item ${props.className || ""}`}
    >
        {props.children}
    </a>
)

export { Dropdown, DropdownToggle, DropdownMenu, DropdownItem };