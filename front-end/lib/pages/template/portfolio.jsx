import React from "react";

// #1 Slidebar
const slidebar = [
    { href: '#', icon: 'fa fa-home xxlarge', text: 'HOME', active: false },
    { href: '#aboutPortfolio', icon: 'fa fa-user xxlarge', text: 'ABOUT', active: false },
    { href: '#photosPortfolio', icon: 'fa fa-eye xxlarge', text: 'PHOTOS', active: false },
    { href: '#contactPortfolio', icon: 'fa fa-envelope xxlarge', text: 'CONTACT', active: false },
]
const Slidebar = (props) => (
    <nav
        style={{ width: '120px', background: '#222' }}
        className="slidebar bar-block small hide-small">
        {/* #avatar */}
        <img src="/assets/avatar_smoke.jpg" style={{ width: '100%' }} />

        {/* #list */}
        {slidebar.map(item => (
            <a
                href={item.href}
                className={`${item.active ? 'bg-black' : 'hover-w-b'}
                bar-item btn pad-32 text-center`}
            >
                <i className={item.icon} />
                <p>{item.text}</p>
            </a>
        ))}
    </nav>
);

const navbar = [
    { href: '#Portfolio', text: 'HOME' },
    { href: '#aboutPortfolio', text: 'ABOUT' },
    { href: '#photosPortfolio', text: 'PHOTOS' },
    { href: '#contactPortfolio', text: 'CONTACT' },
]
const NavbarSmallScreen = (props) => (
    <div id='portNavbar' className="top hide-large hide-medium">
        <div className="bar white-black text-center small opacity hover-opacity-off">
            {navbar.map(item => (
                <a
                    href={item.href}
                    className="bar-item btn"
                    style={{ width: '24.999999%' }}
                >{item.text}</a>
            ))}
        </div>
    </div>
)

// End 1 
// #2 Page content

const Content = (props) => (
    <div className="pd-32" id="mainPortfolio">
        {/* <!-- Header/Home --> */}
        <header className="container pd-32 text-center white-black" id="homePortfolio">
            <h1 className="xxlarge"><span className="hide-small">I'm</span> Duy Hoang</h1>
            <p>Web Designer and Photograper</p>
            <img
                className="image"
                src="/assets/man_smoke.jpg"
                style={{ width: '992px', height: '1108' }} />
        </header>

        {/* <!-- About Section --> */}
        <div className="content justify grey pd-64" id="aboutPortfolio">
            <h2 className="">My Name</h2>
            <hr className="opacity left" style={{ width: '200px' }} /><br />
            <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h3 className="pd-16 lightgrey">My Skill</h3>
            <p>Photograpy</p>
            <div className="black-white">
                <div className="white-greydark" style={{ width: '95%', height: '28px' }} />
            </div>
            <p>Web Design</p>
            <div className="black-white">
                <div className="white-greydark" style={{ width: '85%', height: '28px' }} />
            </div>
            <p>Photoshop</p>
            <div className="black-white">
                <div className="white-greydark" style={{ width: '80%', height: '28px' }} />
            </div>

            <div className="row text-center pd-16 section black-lightgrey">
                <div className="quarter section">
                    <span className="xlarge">11+</span><br />
                Partners
            </div>
                <div className="quarter section">
                    <span className="xlarge">55+</span><br />
                Projects Done
            </div>
                <div className="quarter section">
                    <span className="xlarge">89+</span><br />
                Happy Client
            </div>
                <div className="quarter section">
                    <span className="xlarge">150+</span><br />
                Meetings
            </div>
            </div>

            <button className="btn black-lightgrey pad-32 section">
                <i className="fa fa-download" /> Download Resume
            </button>

            {/* <!-- Grid for pricing tables --> */}
            <h3 className="pd-16 lightgrey">My Price</h3>
            <div className="row-padding" style={{ margin: '0 -16px' }}>
                <div className="half mg-b16">
                    <ul className="ul white-black text-center opacity hover-opacity-off">
                        <li className="white-greydark xlarge pd-32">Basic</li>
                        <li className="pd-16">Web Design</li>
                        <li className="pd-16">Photography</li>
                        <li className="pd-16">5GB Storage</li>
                        <li className="pd-16">Mail Support</li>
                        <li className="pd-16">
                            <h2>$ 10</h2>
                            <span class="opacity">per month</span>
                        </li>
                        <li className="black-lightgrey pd-24">
                            <button className="btn black-white pad-32 hover-w-b">Sign Up</button>
                        </li>
                    </ul>
                </div>
                <div className="half mg-b16">
                    <ul className="ul white-black text-center opacity hover-opacity-off">
                        <li className="white-greydark xlarge pd-32">Pro</li>
                        <li className="pd-16">Web Design</li>
                        <li className="pd-16">Photography</li>
                        <li className="pd-16">50GB Storage</li>
                        <li className="pd-16">Mail Support</li>
                        <li className="pd-16">
                            <h2>$ 25</h2>
                            <span class="opacity">per month</span>
                        </li>
                        <li className="black-lightgrey pd-24">
                            <button className="btn black-white pad-32 hover-w-b">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- #comment --> */}
            <h3 className="pd-24 lightgrey" >My Reputation</h3>
            <img className="left circle mg-r16" style={{ width: '80px' }} src="/assets/bandmember.jpg" alt="Avatar" />
            <p><span className="large mg-r16">Chris Fox.</span>CEO at Mighty Schools</p>
            <p>John Doe saved us from a web disaster.</p>
            <br />
            <br />
            <img className="left circle mg-r16" style={{ width: '80px' }} src="/assets/avatar_g2.jpg" alt="Avatar" />
            <p><span className="large mg-r16">Rebecca Flex</span>CEO at Company</p>
            <p>No one is better than John Doe.</p>
        </div> {/* <!-- END About Section --> */}

        {/* <!-- Portfolio section --> */}
        <div className="content pd-64" id="photosPortfolio">
            <h2 className="lightgrey">My Photos</h2>
            <hr className="left opacity mg-b16" style={{ width: '200px' }} /><br />

            {/* <!-- Grid for photos --> */}
            <div className="row-padding" style={{ margin: '0 -16px' }}>
                <div className="half">
                    <img src="/assets/wedding.jpg" style={{ width: '100%' }} />
                    <img src="/assets/rocks.jpg" style={{ width: '100%' }} />
                    <img src="/assets/sailboat.jpg" style={{ width: '100%' }} />
                </div>
                <div className="half">
                    <img src="/assets/underwater.jpg" style={{ width: '100%' }} />
                    <img src="/assets/chef.jpg" style={{ width: '100%' }} />
                    <img src="/assets/wedding.jpg" style={{ width: '100%' }} />
                    <img src="/assets/p6.jpg" style={{ width: '100%' }} />
                </div>
            </div>{/* <!-- End Grid for photos --> */}
        </div> {/* <!-- End Portfolio section --> */}

        {/* <!-- Contact Section --> */}
        <div className="content pd-64 grey" id="contactPortfolio">
            <h2 className="grey">Contact me</h2>
            <hr className="left opacity" style={{ width: '200px' }} /><br />
            <div className="section">
                <p><i className="fa fa-map-marker fa-fw white xxlarge mg-r16" /> Da Nang, VN</p>
                <p><i className="fa fa-phone fa-fw white xxlarge mg-r16" /> Phone: +84 76677 5461</p>
                <p><i className="fa fa-envelope fa-fw white xxlarge mg-r16" /> Email: hoangduy1192@gmail.com</p>
            </div><br />
            <p>Let's get in touch. Send me a message: </p>

            <form>
                <p><input className="input pd-16 block" type="text" placeholder="Name" name="name" required /></p>
                <p><input className="input pd-16 block" type="text" placeholder="Email" name="email" required /></p>
                <p><input className="input pd-16 block" type="text" placeholder="Subject" name="subject" required /></p>
                <p><input className="input pd-16 block" type="text" placeholder="Message" name="message" required /></p>
                <p>
                    <button className="btn black-lightgrey pad-32" type="submit">
                        <i className="fa fa-paper-plane" /> SEND MESSAGE
                    </button>
                </p>
            </form>
        </div> {/* <!-- End Contact Section --> */}

        {/* <!-- Footer --> */}
        <footer className="content pd-64 grey xlarge">
            <i className="fa fa-facebook-official hover-opacity" />
            <i className="fa fa-instagram hover-opacity" />
            <i className="fa fa-snapchat hover-opacity" />
            <i className="fa fa-pinterest-p hover-opacity" />
            <i className="fa fa-twitter hover-opacity" />
            <i className="fa fa-linkedin hover-opacity" />
            <p className="medium">Powered by <a className="grey" href="#">idk.css</a></p>
        </footer>
    </div>
); // End 2


export default function Page(props) {
    return (<div className="white-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Slidebar />
        <NavbarSmallScreen />
        <Content />
    </div>);
}

