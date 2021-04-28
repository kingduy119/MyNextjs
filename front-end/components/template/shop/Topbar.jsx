import React from "react";

const Topbar = (props) => {
    function onOpen() {
        document.getElementById('shopOverlay').style.display = 'block';
        document.getElementById('slidebar').style.display = 'block'
    }
    function onClose() {
        document.getElementById('shopOverlay').style.display = 'none';
        document.getElementById('slidebar').style.display = 'none';
    }

    return (<>
        {/* Topmenu on small green */}
        <header className="bar top padding-16 white-black xlarge hide-large">
            <div className="bar-item wide">LOGO</div>
            <a className="bar-item btn right" onClick={() => onOpen()}>
                <i className="fa fa-bars" />
            </a>
        </header>

        {/* Overplay effect when opening slidebar on small screen */}
        <div
            id="shopOverlay"
            className="overlay hide-large" style={{ cursor: 'pointer' }}
            title="close side menu"
            onClick={() => onClose()}
        />
    </>);
}

export default Topbar;

