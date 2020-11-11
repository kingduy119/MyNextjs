import React from "react";

const Topnav = (props) => (
  <div className="bar top large white-black">
    <button className="bar-item btn large"
      style={{ color: 'white' }}
    ><i className="fa fa-bars" /> Menu</button>
    <span className="bar-item right">Logo</span>
  </div>
)

export default Topnav;
