import React from "react";

function Topbar(props) {

    return (
        <div className="top">
            <div className="bar xxlarge">
                <a className="bar-item link">
                    <i className="fa fa-home" />
                </a>
                {/* <a className="bar-item link">
                    <i className="fa fa-user" />
                </a>
                <a className="bar-item link">
                    <i className="fa fa-globe" />
                </a> */}
                {/* DROPDOWN */}
                {/* <div className="dropdown-hover">
                <button className="btn xlarge">
                    <i className="fa fa-bell" />
                </button>
                <div className="dropdown-content card bar-block">
                    <a className="bar-item btn" href="#">Link</a>
                    <a className="bar-item btn" href="#">Link</a>
                    <a className="bar-item btn" href="#">Link</a>
                </div>
            </div> */}

                {/* <a className="bar-item right">
                    <img src="/assets/avatar.jpg" style={{ maxWidth: '23px', maxHeight: '20px' }} />
                </a> */}
            </div>
        </div>
    );
}


export default Topbar;
