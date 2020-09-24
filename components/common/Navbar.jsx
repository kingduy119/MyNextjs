import React from 'react';

function Navbar(props) {
  return (
    <div
      className={`navbar ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
}

function NavbarItem(props) {
  return (
    <div
      className={`navbar-item ${props.className || ""}`}
    >
      <a href={props.href}>{props.children}</a>
    </div >
  )
}

export { Navbar, NavbarItem };

