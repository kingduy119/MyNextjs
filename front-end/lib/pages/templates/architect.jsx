import React from 'react';
    
class ArchitectPage extends React.Component {
    render () {
        return (
            <>
                {/* Top Nav */}
                <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                    <a className="navbar-brand"><b>BR</b> Architects</a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" >Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" >Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Heaer */}
                <header className="content display-container" style={{maxWidth: "1500px"}} id="home" >
                    <img className="image" src="/assets/architect.jpg"/>
                    <div className="display-middle text-center">
                        <h1 className="xxxlarge">
                            <span className="badge badge-dark pd-16 opacity-min"><b>BR</b></span> <span className="hide-small lightgrey">Architects</span>
                        </h1>
                    </div>
                </header>

                {/* Page Content */}
                <div className="content padding" style={{maxWidth:"1564px"}}>

                    {/* Projects Photo Section */}
                    <div className="container-fluid pd-32" id="projects">
                        <h3 className="border-b border-lightgrey pd-16">Projects</h3>
                    </div>
                    {/* Row */}
                    <div className="row row-pd">
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                    </div>
                    {/* Row */}
                    <div className="row row-pd">
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <div className="display-container">
                                <div className="display-topleft white-black padding ">Summer House</div>
                                <img className="image" src="https://www.w3schools.com/w3images/house5.jpg" />
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="container-fluid pd-32" id="about">
                        <h3 className="border-b border-lightgrey pd-16">About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="row row-pd grayscale">
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <img className="image" src="https://www.w3schools.com/w3images/team2.jpg" />
                            <p className="opacity"> CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="button block bg-lightgrey hv-white-black">Contact</button></p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <img className="image" src="https://www.w3schools.com/w3images/team2.jpg" />
                            <p className="opacity"> CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="button block bg-lightgrey hv-white-black">Contact</button></p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <img className="image" src="https://www.w3schools.com/w3images/team2.jpg" />
                            <p className="opacity"> CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="button block bg-lightgrey hv-white-black">Contact</button></p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 mg-b24">
                            <img className="image" src="https://www.w3schools.com/w3images/team2.jpg" />
                            <p className="opacity"> CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="button block bg-lightgrey hv-white-black">Contact</button></p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="container-fluid pd-32" id="contact">
                        <h3 className="border-b border-lightgrey pd-16">Contact</h3>
                        <p>Lets get in touch and talk about your next project.</p>
                        <form>
                            <input className="input border" type="text" placeholder="Name" required name="Name" />
                            <input className="input border section" type="text" placeholder="Email" required name="Email" />
                            <input className="input border section" type="text" placeholder="Subject" required name="Subject" />
                            <input className="input border section" type="text" placeholder="Comment" required name="Comment" />
                            <button className="button white-black section" type="submit">
                                <i className="fa fa-paper-plane" ></i>SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Image of location/map */}
                    <div className="container">
                        <img className="image" src="https://www.w3schools.com/w3images/map.jpg" />
                    </div>

                </div> {/* End Page Content */}

                {/* Footer */}
                <footer className="center white-black pd-16">
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="white hv-green">w3.css</a></p>
                </footer>
            </>
        )
    }
}

export default ArchitectPage;