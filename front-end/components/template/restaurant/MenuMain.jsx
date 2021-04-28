import React from "react";

const MenuMain = (props) => {
    return (
        <div className="bgimg-restaurant white-black display-container"
            style={{ height: '1020px' }}
        >
            {/* #1 Logo */}
            <div className="display-middle jumbo">
                <p>Logo</p>
            </div>

            {/* #2 Menus */}
            <div className="container display-topleft xlarge">
                <p><button className="btn white-black"
                    onClick={() => { document.getElementById('restaurant-menu-modal').style.display = 'block'; }}
                >MENU</button></p>
                <p><button className="btn white-black"
                    onClick={() => { document.getElementById('restaurant-contact-modal').style.display = 'block'; }}
                >CONTACT</button></p>
            </div>

            {/* #3 Info */}
            <div className="container display-bottomleft">
                <p className="xlarge" >Monday - Friday 10-23 | Saturday 14-02</p>
                <p className="large">42 Village St, New York</p>
                <p>Powered by <a className="white" href="#" >HDI Company</a></p>
            </div>
        </div>
    );
}

export default MenuMain;

