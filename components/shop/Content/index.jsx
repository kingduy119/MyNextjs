import React from "react";
import { Container, Row, Col } from "../../common";

const onCloseNewsLetter = () => {
    document.getElementById('newsletter').style.display = 'none';
}

const Content = () => (
    <div className="main" style={{ marginLeft: '250px' }} >
        <div className="hide-large" style={{ marginTop: "83px" }} />

        {/* <-- Header --> */}
        <header className="container xlarge">
            <p className="left">Jeans</p>
            <p className="right">
                <i className="fa fa-shopping-cart margin-right" />
                <i className="fa fa-search" />
            </p>
        </header>

        <Container className="display-container">
            <img src="/assets/shop/jeans.jpg" alt="Jeans" style={{ width: '100%' }} />
            <div className="display-topleft white" style={{ padding: '24px 48px' }} >
                <h1 className="jumbo hide-small">New arrivals</h1>
                <h1 className="hide-large">New arrivals</h1>
                <h1 className="hide-small">COLLECTION 2016</h1>
                <p><a className="btn white-black large padding-large" href="#">SHOP NOW</a></p>
            </div>
        </Container>
        {/* End header */}

        {/* <-- Display product --> */}
        <Container className="grey"><p>8 items</p></Container>
        <Row className="grayscale">
            <Col className="l3 s6">
                <Container>
                    <div className="display-container">
                        <img src="/assets/shop/jeans1.jpg" style={{ width: '100%' }} />
                        <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                    </div>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <div className="display-container">
                        <img src="/assets/shop/jeans2.jpg" style={{ width: '100%' }} />
                        <span className="badge display-topleft">New</span>
                        <div className="display-middle display-hover">
                            <button className="btn white-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                        <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                    </div>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <img src="/assets/shop/jeans3.jpg" style={{ width: '100%' }} />
                    <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <div className="display-container">
                        <img src="/assets/shop/jeans4.jpg" style={{ width: '100%' }} />
                        <span className="tag display-topleft xlarge">Sale</span>
                        <div className="display-middle display-hover">
                            <button className="btn white-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                        <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                    </div>
                </Container>
            </Col>

            <Col className="l3 s6">
                <Container>
                    <img src="/assets/shop/jeans3.jpg" style={{ width: '100%' }} />
                    <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <img src="/assets/shop/jeans1.jpg" style={{ width: '100%' }} />
                    <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <img src="/assets/shop/jeans2.jpg" style={{ width: '100%' }} />
                    <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                </Container>
            </Col>
            <Col className="l3 s6">
                <Container>
                    <img src="/assets/shop/jeans4.jpg" style={{ width: '100%' }} />
                    <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                </Container>
            </Col>
        </Row>

        {/* <-- Subscribe section --> */}
        <Container className="padding-32 white-black">
            <h1>Subscribe</h1>
            <p>To get special offers and  VIP treatment</p>
            <p><input
                type="text" className="input border"
                placeholder="Enter e-mail" style={{ width: '100%' }} /></p>
            <button type="button" className="btn btn-red margin-bottom" >Subscribe</button>
        </Container>

        {/* <-- Footer --> */}
        <footer id="footer" className="padding-64 small text-center black-lightgrey">
            <Row className="row-padding">
                <Col className="col-4">
                    <h4>Contact</h4>
                    <p>Question? Go ahead.</p>
                    <form>
                        <p><input className="input border" type="text" placeholder="Name" name="Name" required /></p>
                        <p><input className="input border" type="text" placeholder="Email" name="Email" required /></p>
                        <p><input className="input border" type="text" placeholder="Subject" name="Subject" required /></p>
                        <p><input className="input border" type="text" placeholder="Message" name="Message" required /></p>
                        <button className="btn block white-black" type="submit" >Send</button>
                    </form>
                </Col>

                <Col className="col-4">
                    <h4>About</h4>
                    <p><a className="black" href="#">About us</a></p>
                    <p><a className="black" href="#">We're hiring</a></p>
                    <p><a className="black" href="#">Support</a></p>
                    <p><a className="black" href="#">Find store</a></p>
                    <p><a className="black" href="#">Shipment</a></p>
                    <p><a className="black" href="#">Payment</a></p>
                    <p><a className="black" href="#">Gift card</a></p>
                    <p><a className="black" href="#">Return</a></p>
                    <p><a className="black" href="#">Help</a></p>
                </Col>

                <Col className="col-4 justify">
                    <h4>Store</h4>
                    <p><i className="fa fa-fw fa-map-marker" /> Company Name</p>
                    <p><i className="fa fa-fw fa-phone" /> 123456789</p>
                    <p><i className="fa fa-fw fa-envelope" /> example@mail.com</p>
                    <h4>We accept</h4>
                    <p><i className="fa fa-fw fa-cc-amex" /> Amex</p>
                    <p><i className="fa fa-fw fa-credit-card" /> Credit Card</p>
                    <br />
                    <i className="fa fa-facebook-official large hover-opacity" />
                    <i className="fa fa-instagram large hover-opacity" />
                    <i className="fa fa-snapchat large hover-opacity" />
                    <i className="fa fa-pinterest-p large hover-opacity" />
                    <i className="fa fa-twitter large hover-opacity" />
                    <i className="fa fa-linkedin large hover-opacity" />
                </Col>
            </Row>
        </footer>
        <div className="padding-24 white bg-black text-center large">
            Powered by<a className="white" href="#" title="w3.CSS"> w3.css</a>
        </div>

        {/* <-- Newsletter Modal --> */}
        <div id="newsletter" className="modal">
            <div className="modal__content animate-zoom" style={{ padding: '32px' }}>
                <div className="container black-white text-center">
                    <i className="fa fa-remove right button transparent xxlarge" onClick={() => onCloseNewsLetter()} />
                    <h2 className="wide">NEWSLETTER</h2>
                    <p>Join our mailing list to receive updates on new arrivals and special offers</p>
                    <p><input className="input border" placeholder="Enter e-mail" /></p>
                    <button className="btn padding-large white-red margin-bottom" >Subscribe</button>
                </div>
            </div>
        </div>
    </div>
)


export default Content;

