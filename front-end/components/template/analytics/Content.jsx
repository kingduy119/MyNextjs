import React from "react";
import { Container, Row, Col, Button } from "../../common";

export default function Content(props) {
    return (
        <Container className="main light-grey" style={{ marginTop: '25px', marginLeft: '300px' }}>
            <header className="container" style={{ marginTop: '23px' }}>
                <p className="xlarge"><b><i className="fa fa-dashboard" /> My Dashboard</b></p>
            </header>

            {/* #1 Dashboard */}
            <Row className="row-padding margin-bottom">
                <Col className="quarter">
                    <Row className="container white-red padding-16">
                        <Col className="col-6 text-left">
                            <i className="fa fa-comment xxxlarge" />
                        </Col>
                        <Col className="col-6 text-right xxlarge">52</Col>
                        <div className="clear"></div>
                        <p className="xlarge">Messages</p>
                    </Row>
                </Col>

                <Col className="quarter">
                    <Row className="container white-teal padding-16">
                        <div className="half text-left">
                            <i className="fa fa-eye xxxlarge" />
                        </div>
                        <div className="half text-right xxlarge">
                            99
                        </div>
                        <div className="clear"></div>
                        <p className="xlarge">Views</p>
                    </Row>
                </Col>

                <Col className="quarter">
                    <Row className="container white-orange padding-16">
                        <div className="half text-left">
                            <i className="fa fa-share-alt xxxlarge" />
                        </div>
                        <div className="half text-right xxlarge">23</div>
                        <div className="clear"></div>
                        <p className="xlarge">Shares</p>
                    </Row>
                </Col>

                <Col className="quarter">
                    <Row className="container white-blue padding-16">
                        <div className="half text-left">
                            <i className="fa fa-users xxxlarge" />
                        </div>
                        <div className="half text-right xxlarge">58</div>
                        <div className="clear"></div>
                        <p className="xlarge">Users</p>
                    </Row>
                </Col>
            </Row>

            {/* #2 Regions - Feeds */}
            <div className="panel">
                <Row className="row-padding" style={{ margin: '0 -16px' }}>
                    <Col className="third">
                        <h5 className="xlarge">Regions</h5>
                        <img src="/assets/region.jpg" style={{ width: '100%' }} alt="Google Regional Map" />
                    </Col>
                    <Col className="twothird">
                        <h5 className="xlarge">Feeds</h5>
                        <table className="table striped black-white">
                            <tr>
                                <td><i class="fa fa-user blue large"></i></td>
                                <td>New record, over 90 views.</td>
                                <td><i>10 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bell red large"></i></td>
                                <td>Database error.</td>
                                <td><i>15 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-users yellow large"></i></td>
                                <td>New record, over 40 users.</td>
                                <td><i>17 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-comment red large"></i></td>
                                <td>New comments.</td>
                                <td><i>25 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-bookmark blue large"></i></td>
                                <td>Check transactions.</td>
                                <td><i>28 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-laptop large"></i></td>
                                <td>CPU overload.</td>
                                <td><i>35 mins</i></td>
                            </tr>
                            <tr>
                                <td><i class="fa fa-share-alt green large"></i></td>
                                <td>New shares.</td>
                                <td><i>39 mins</i></td>
                            </tr>
                        </table>
                    </Col>
                </Row>
            </div>

            {/* #3 General Stats */}
            <Container>
                <h5 className="xlarge">General Stats</h5>
                <p>New Visitors</p>
                <div className="black-grey">
                    <Container className="center padding white-green" style={{ width: '25%' }} >25%</Container>
                </div>

                <p>New User</p>
                <div className="black-grey">
                    <Container className="center padding white-orange" style={{ width: '50%' }} >50%</Container>
                </div>

                <p>Bounce Rate</p>
                <div className="black-grey">
                    <Container className="center padding white-red" style={{ width: '75%' }} >75%</Container>
                </div>
            </Container>

            {/* #4 Countires */}
            <Container>
                <h5 className="xlarge">Countires</h5>
                <table className="table striped black-white bordered hoverable">
                    <tr>
                        <td>United States</td>
                        <td>65%</td>
                    </tr>
                    <tr>
                        <td>UK</td>
                        <td>15.7%</td>
                    </tr>
                    <tr>
                        <td>Russia</td>
                        <td>5.6%</td>
                    </tr>
                    <tr>
                        <td>Spain</td>
                        <td>2.1%</td>
                    </tr>
                    <tr>
                        <td>India</td>
                        <td>1.9%</td>
                    </tr>
                    <tr>
                        <td>France</td>
                        <td>1.5%</td>
                    </tr>
                </table>
                <br />
                <Button className="btn-white-darkgrey">More Countries <i className="fa fa-arrow-right" /></Button>
            </Container>

            {/* #5 Recent User */}
            <Container>
                <h5 className="xlarge">Recent User</h5>
                <ul className="ul card black-white">
                    <li className="padding-16">
                        <img
                            className="left circle margin-right"
                            style={{ width: '35px' }}
                            src="/assets/man.png"
                        />
                        <span className="xlarge">Mike</span><br />
                    </li>
                    <li className="padding-16">
                        <img
                            className="left circle margin-right"
                            style={{ width: '35px' }}
                            src="/assets/woman.png"
                        />
                        <span className="xlarge">Jill</span><br />
                    </li>
                    <li className="padding-16">
                        <img
                            className="left circle margin-right"
                            style={{ width: '35px' }}
                            src="/assets/woman1.png"
                        />
                        <span className="xlarge">Jane</span><br />
                    </li>
                </ul>
            </Container>

            {/* #6 Recent Comments */}
            <Container>
                <h5 className="xlarge">Recent Comments</h5>
                <Row>
                    <Col className="col-2 text-center">
                        <img
                            className="circle"
                            style={{ width: '96px', height: "96px" }}
                            src="/assets/man.png"
                        />
                    </Col>
                    <Col className="col-10 container">
                        <h4>John <span class="opacity medium">Sep 29, 2014, 9:12 PM</span></h4>
                        <p>Keep up the GREAT work! I am cheering for you!!
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className="col-2 text-center">
                        <img
                            className="circle"
                            style={{ width: '96px', height: "96px" }}
                            src="/assets/woman.png"
                        />
                    </Col>
                    <Col className="col-10 container">
                        <h4>Bo <span class="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                    </Col>
                </Row>
                <br />
            </Container>

            {/* #7 Demographic */}
            <Container className="white-greydark padding-32">
                <Row>
                    <Col className="col-4 container">
                        <h5 className="large bottombar border-green">Demographic</h5>
                        <p>Language</p>
                        <p>Country</p>
                        <p>City</p>
                    </Col>
                    <Col className="col-4 container">
                        <h5 className="large bottombar border-red">System</h5>
                        <p>Browser</p>
                        <p>OS</p>
                        <p>More</p>
                    </Col>
                    <Col className="col-4 container">
                        <h5 className="large bottombar border-orange">Target</h5>
                        <p>Users</p>
                        <p>Active</p>
                        <p>Geo</p>
                        <p>Interests</p>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="container padding-16 light-grey">
                <h4>FOOTER</h4>
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
            </footer>
        </Container >
    );
}


