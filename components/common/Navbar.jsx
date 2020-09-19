import React from 'react';

function Navbar(props) {
  return (
    <div className="nav nav-top" style={{ fontSize: `20px` }}>
      {/* <a className="nav-item">
        <i className="fa fa-bars" />
      </a> */}

      <a className="nav-item active" href="#" tittle="News">
        <i className="fa fa-home"></i>
      </a>

      <a className="nav-item" href="#" tittle="Users">
        <i className="fa fa-user"></i>
      </a>

      <a className="nav-item" href="#" tittle="Messages">
        <i className="fa fa-envelope"></i>
      </a>

      <a className="nav-item" href="#" tittle="News">
        <i className="fa fa-globe"></i>
      </a>

      <div className="dropdown">
        <button type="button" className="dropdown-btn">
          <i className="fa fa-bell"></i>
          <span className="badge red right circle">3</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#" >One new friend request</a>
          <a className="dropdown-item" href="#">John Doe posted on your wall</a>
          <a className="dropdown-item" href="#">Jan like your post</a>
        </div>
      </div >

      <a className="nav-item nav-item_user">
        <img src="https://www.w3schools.com/w3images/avatar3.png" />
      </a>
    </div>
  );
}




export default Navbar;

