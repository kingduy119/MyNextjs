// Slidebar of Clothing Store template

import React from "react";
import { Container, Link } from "../common";

const Slidebar = (props) => {
    let [jeans, setJeans] = React.useState(false);

    const onShowNewsLetter = () => {
        document.getElementById('newsletter').style.display = 'block';
    }

    return (
        <nav
            id="slidebar"
            className="slidebar bar-block top black-white collapse" //collapse
            style={{ zIndex: '3', width: '250px' }}
        >
            <Container className="padding-16 display-container">
                <i className="fa fa-remove btn display-topright hide-large" />
                <h3 className="wide"><b>LOGO</b></h3>
            </Container>

            <div className="padding-64 large">
                <Link className="bar-item btn grey" href="#">Shirt</Link>
                <Link className="bar-item btn grey" href="#">Dresses</Link>
                <Link className="bar-item btn grey" href="#" onClick={() => setJeans(!jeans)}>
                    Jeans <i className={`fa ${jeans ? 'fa-caret-down' : 'fa-caret-right'}`} />
                </Link>
                {jeans &&
                    <div id="jeans" className="padding-large medium">
                        <Link className="bar-item btn grey" href="#">Skinny</Link>
                        <Link className="bar-item btn grey" href="#">Relaxed</Link>
                        <Link className="bar-item btn grey" href="#">Bootcut</Link>
                        <Link className="bar-item btn grey" href="#">Straight</Link>
                    </div>
                }
                <Link className="bar-item btn grey" href="#">Jackets</Link>
                <Link className="bar-item btn grey" href="#">Gymwear</Link>
                <Link className="bar-item btn grey" href="#">Blazers</Link>
                <Link className="bar-item btn grey" href="#">Shoes</Link>
            </div>

            <Link className="bar-item btn grey" href="#">Contact</Link>
            <Link className="bar-item btn grey" href="#" onClick={() => onShowNewsLetter()}>Newsletter</Link>
            <Link className="bar-item btn grey" href="#">Subscribe</Link>
        </nav>
    )
}

export default Slidebar;
