import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const icon = {
  briefcase: "fa fa-briefcase fa-fw",
  home: "fa fa-home fa-fw",
  envelope: "fa fa-envelope fa-fw",
  phone: "fa fa-phone fa-fw",
  asterisk: "fa fa-asterisk fa-fw",
  calendar: "fa fa-calendar fa-fw",
  suitcase: "fa fa-suitcase fa-fw",
  language: "fa fa-globe fa-fw",
  location: "fa fa-location-arrow fa-fw",
  key: "fa fa-key fa-fw",

  facebook: "fa fa-facebook",
  instagram: "fa fa-instagram",
  snapchat: "fa fa-snapchat",
  pinterest: "fa fa-pinterest",
  twitter: "fa fa-twitter",
  linkedin: "fa fa-linkedin",
}

// <!--- Componet Page --->
const Icon = (props) => (
  <i class={`${props.icon} hd-margin-right hd-font-xlarge hd-text-teal`} />
)
Icon.defaultProps = {
  icon: icon.briefcase,
}

const LoadingBar = (props) => (
  <div class="hd-theme-light-grey hd-round-xlarge hd-font">
    <div class="hd-round-xlarge hd-align-center hd-theme-teal" style={{ width: `${props.percent}%` }}>{props.percent}%</div>
  </div>
)


const CardContainer = (props) => (
  <Container className="hd-container hd-card hd-theme-white hd-margin-bottom">
    <h2 className="hd-text-grey hd-padding-16"><Icon icon={props.icon} />{props.brand}</h2>
    {props.children}
  </Container>
)

const Card = (props) => (
  <div className="hd-container">
    <h4 class="hd-opacity"><b>{props.title}</b></h4>
    {props.children}
  </div>
)
// <!--- End Componet Page --->

// <!--- Left --->
const Avatar = () => (
  <Container>
    <Image
      className="hd-margin-hor"
      src={`https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/p960x960/49209718_2568735290019649_3757038847087607808_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=PSSC5W6z0OoAX-punle&_nc_ht=scontent.fdad2-1.fna&_nc_tp=6&oh=c672636d2468aeb6a7c2411f3f9c6f20&oe=5EED7D32`}
      style={{ width: "100%" }}
      roundedCircle
    />
    <Container className="hd-align-left">
      <h4>Nguyen Hoang Duy</h4>
    </Container>
  </Container>
)

const Information = () => (
  <Container className="hd-container">
    <p><Icon icon={icon.calendar} />11-09-1992</p>
    <p><Icon icon={icon.briefcase} />Developer</p>
    <p><Icon icon={icon.home} />Da Nang, Viet Nam</p>
    <p><Icon icon={icon.envelope} />hoangduy1192@gmail.com</p>
    <p><Icon icon={icon.phone} />076 677 5461</p>
  </Container>
)

const ProgramSkill = () => (
  <Container className="hd-container">
    <p class="hd-large">
      <Icon icon={icon.asterisk} />
      <b>Base Skill</b>
    </p>

    <p>C/C++</p>
    <LoadingBar percent={85} />
    <br />

    <p>C#</p>
    <LoadingBar percent={50} />
  </Container>
)

const WebSkill = () => (
  <Container className="hd-container">
    <p class="hd-large">
      <Icon icon={icon.asterisk} />
      <b>Web Skill</b>
    </p>

    <p>HTML</p>
    <LoadingBar percent={70} />
    <br />

    <p>CSS</p>
    <LoadingBar percent={70} />
    <br />

    <p>Javascript</p>
    <LoadingBar percent={75} />
    <br />
  </Container>
)

const LanguageSkill = () => (
  <Container className="hd-container">
    <p class="hd-large">
      <Icon icon={icon.language} />
      <b>Language</b>
    </p>

    <p>English</p>
    <LoadingBar percent={60} />
    <br />
  </Container>
)

const LeftContent = (props) => (
  <Container className="hd-theme-white hd-text-grey hd-card-4">
    {/* <!--  Avatar --> */}
    <Avatar />
    <hr />

    {/* <!-- Information --> */}
    <Information />
    <hr />

    {/* <!--- Programer Skill ---> */}
    <ProgramSkill />
    <hr />

    {/* <!--- Web Developer Skill ---> */}
    <WebSkill />
    <hr />

    {/* <!--- Language Skill ---> */}
    <LanguageSkill />
  </Container>
)
// <!--- End Left --->

// <!--- Right --->
// #1: 
const Key = () => (
  <CardContainer icon={icon.key} brand="Key">
    <Row>
      <Col>
        <Card title="# Front End">
          <li>HTML, CSS, Bootstrap, Javascript/ES6</li>
          <li>Reactjs, State, Props, Hook</li>
          <li>Context, Redux</li>
          <li>Web Component</li>
        </Card>
      </Col>
      <Col>
        <Card title="# Back End">
          <li>Nodejs, GraphQL</li>
          <li>RESTful API</li>
          <li>Typescript</li>
          <li>Auth Passport</li>
        </Card>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Card title="# Database">
          <li>MySQL</li>
          <li>NoSQL, MongoDB, Mongoose</li>
        </Card>
      </Col>
      <Col>
        <Card title="# Program">
          <li>C/C++, C#, CX</li>
        </Card>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Card title="# Algorithm">
          <li>Stack, Queue</li>
          <li>Linear, Binary, Recursion</li>
          <li>Bubble, Insertionm Selection, Merge...</li>
        </Card>
      </Col>
      <Col>
        <Card title="# Game Engine">
          <li>Unity</li>
        </Card>
      </Col>
    </Row>
    <br />
  </CardContainer>
)

// #2:
const WorkExp = () => (
  <CardContainer icon={icon.suitcase} brand="Work Experience">
    <Card title="#1 Gameloft Company">
      <h6 className="hd-text-teal">
        <Icon icon={icon.calendar} />Feb 2018 - Feb 2020
            </h6>
      <h6 className="hd-text-teal">
        <Icon icon={icon.location} />Location: <span class="hd-text-black">Fresher -> Junior 2 Programer</span>
      </h6>
      <h6 className="hd-text-teal">
        <Icon icon={icon.language} />Language: <span class="hd-text-black">C/C++, C#, Java</span>
      </h6>

      <h6 className="hd-text-teal"><Icon />Game Project Joined:</h6>
      <div className="hd-container">
        <ul>
          <li>Dungeon Hunter 5</li>
          <li>Modern Combat 5</li>
          <li>Alphalt 8</li>
          <li>Trial <span class="hd-opacity">(Unity produce team 3D game)</span></li>
        </ul>
      </div>

      <h6 className="hd-text-teal"><Icon />Feautures Handle:</h6>
      <div className="container">
        <ul>
          <li>Research UWP app and Gameloft library</li>
          <li>Handling and implement localize system with mutil language in game</li>
          <li>Handling and implement tracking system from game side send request to server side</li>
          <li>Detect and fix issue with new device connect to game
                        <span class="hd-opacity">(Ex: Xbox controller)</span>
          </li>
          <li>Research and implement auto build system for project with Jenkin
                        <span className="hd-opacity">(Office tool by Gameloft)</span>
          </li>
        </ul>
      </div>
    </Card>
  </CardContainer>
)

// #2: Education
const Education = () => (
  <CardContainer icon={icon.suitcase} brand="Education">
    <Card title="#1 Program Developer">
      <h6 className="hd-text-teal">
        <Icon icon={icon.calendar} />2016 - 2018 - <span className="hd-tag hd-theme-teal hd-round">Feauture</span>
      </h6>
      <br />
      <p><b>vietjack.com:</b> Good for all education</p>
      <p><b>cplusplus.com:</b> Basic to advanced C/C++ language and how to use standard library</p>
      <p><b>tutorialspoint.com:</b> Best resource for Online Education</p>
    </Card>
    <hr />

    <Card title="#2 Web Developer">
      <h6 className="hd-text-teal">
        <Icon icon={icon.calendar} />Feb 2020 - <span className="hd-tag hd-theme-teal hd-round">Current</span>
      </h6>
      <br />
      <p><b>w3schools.com:</b> Web Developer! All I need to know in one place</p>
      <p><b>reactjs.org:</b> A Javascript library for building user interfaces</p>
      <p><b>reactjs.org:</b> A Javascript runtime built on Chrome's V8 Javascript engine</p>
    </Card>
    <hr />

    <Card title="#3 Bach Khoa Da Nang Colleges">
      <h6 className="hd-text-teal">
        <Icon icon={icon.calendar} />2012 - 2014
            </h6>
      <p><b>Specialized: </b>Administrator Network</p>
    </Card>
  </CardContainer>
)

const RightContent = (props) => (
  <>
    <Key />
    <WorkExp />
    <Education />
  </>
)
// End Right


function Profile(props) {
  return (
    <>
      <div className="hd-margin-vel hd-margin-top">
        <Row class="hd-row-padding">
          {/* <!-- left column --> */}
          <Col className="hd-col-third" md="4">
            <LeftContent />
          </Col>

          {/* !-- right column */}
          <Col className="hd-col-twothird" md="8">
            <RightContent />
          </Col>
        </Row>
      </div>

      <footer className="hd-col hd-theme-teal hd-align-center hd-margin-top">
        <p>Find me on social media.</p>
        <i class="fa fa-facebook-official hd-hover-opacity hd-margin-right" />
        <i class="fa fa-instagram hd-hover-opacity hd-margin-right" />
        <i class="fa fa-snapchat hd-hover-opacity hd-margin-right" />
        <i class="fa fa-pinterest-p hd-hover-opacity hd-margin-right" />
        <i class="fa fa-twitter hd-hover-opacity hd-margin-right" />
        <i class="fa fa-linkedin hd-hover-opacity hd-margin-right" />
        <p class="hd-margin-hor">Powered by <a class="hd-text-white" href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    </>
  );
}

export default Profile;
