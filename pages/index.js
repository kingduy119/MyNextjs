import React from "react";
import useAuth from "../lib/useAuth"
import SocialLayout from "../lib/layout/SocialLayout";
import { Container, Row, Col, Card, Button, Badge } from "../components/common";
import { TopNav } from "../components/Navigation";

function LeftContent(props) {
  let { user } = props;

  let [showGroups, setShowGroups] = React.useState(false);
  let [showEvents, setShowEvents] = React.useState(false);
  let [showPhotos, setShowPhotos] = React.useState(false);

  return (
    <>
      {/* Profile */}
      <Card className="profile">
        <h4 classname="profile-username">{user.displayName || "displayNmae"}</h4>
        <p className="center">
          <img
            className="profile-avatar"
            src={user.avatarUrl || "https://www.w3schools.com/w3images/avatar3.png"}
            alt="avatarUrl"
          />
        </p>
        <hr />
        {user.career && <p><i className="profile-icon fa fa-pencil fa-fw" />{user.career}</p>}
        {user.country && <p><i className="profile-icon fa fa-home fa-fw" />{user.country}</p>}
        {user.birthday && <p><i className="profile-icon fa fa-birthday-cake fa-fw" />{user.birthday}</p>}
      </Card>
      <br />

      {/* Accordion */}
      <Card className="accordion">
        {/* #1: Groups */}
        <Button className="accordion-btn" onClick={() => setShowGroups(!showGroups)}>
          <i className="accordion-icon fa fa-circle-o-notch fa-fw" />Groups
        </Button>
        {showGroups &&
          <Container className="accordion-content">
            <p>Some Content Groups</p>
          </Container>
        }

        {/* #2: Events */}
        <Button className="accordion-btn" onClick={() => setShowEvents(!showEvents)}>
          <i className="accordion-icon fa fa-calendar-check-o fa-fw" />Events
        </Button>
        {showEvents &&
          <Container className="accordion-content">
            <p>Some Content Events</p>
          </Container>
        }

        {/* #3: Photos */}
        <Button className="accordion-btn" onClick={() => setShowPhotos(!showPhotos)}>
          <i className="accordion-icon fa fa-users fa-fw" />Photos
        </Button>
        {showPhotos &&
          <Container>
            <Row className="accordion-row">
              <Col className="accordion-col">
                <img className="accordion-img" src="https://www.w3schools.com/w3images/lights.jpg" />
              </Col>
              <Col className="accordion-col">
                <img className="accordion-img" src="https://www.w3schools.com/w3images/lights.jpg" />
              </Col>
              <Col className="accordion-col">
                <img className="accordion-img" src="https://www.w3schools.com/w3images/lights.jpg" />
              </Col>
            </Row>
          </Container>
        }

      </Card>
      <br />

      {/* Interests Tag */}
      <Card className="interests">
        <p>Interests:</p>
        <p>
          <Badge className="interests-tag theme-d5">News</Badge>
          <Badge className="interests-tag theme-d4">W3School</Badge>
          <Badge className="interests-tag theme-d3">Labels</Badge>
          <Badge className="interests-tag theme-d2">Games</Badge>
          <Badge className="interests-tag theme-d1">Friends</Badge>
        </p>
      </Card>
      <br />

      {/* Alert */}
      <Card className="alert">
        <Badge className="alert-btn-close theme-red">
          <i className="fa fa-remove"></i>
        </Badge>
        <p><strong>Hey</strong></p>
        <p>People are looking at your profile. Find out who.</p>
      </Card>
    </>
  );
}
// LeftContent.defaultProps = {
//   user: {
//     displayName: "DisplayName",
//     avatarUrl: "https://www.w3schools.com/w3images/avatar3.png",
//     career: "Developer",
//     country: "Da Nang, Viet Nam",
//     birthday: "September 11"
//   }
// }


const MiddleContent = (props) => (
  <>
    <Container className="post">
      <h6 className="post-opacity">Social Media template by hd.css</h6>
      <p className="post-feeling">Status: Feeling today</p>
      <Button className="post-btn-post"><i className="fa fa-pencil" /> Post</Button>
    </Container>
    <br />

    <Container className="post">
      <img className="post-avatar" src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" />
      <span className="post-time">16 min</span>
      <h4>Jan Doe</h4>
      <br />

      <hr className="post-hr" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
      <Button className="post-btn-like">Like</Button>
      <Button className="post-btn-comment">Comment</Button>
    </Container>
    <br />

    <Container className="post">
      Post 2
    </Container>
  </>
);

const RightContent = (props) => (
  <>
    <Container className="news-feel">
      <p>Upcoming Events:</p>
      <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: "100%" }} />
      <p><strong>Holiday</strong></p>
      <p>Friday 15:00</p>
      <p><Button className="news-feel-btn-info">Info</Button></p>
    </Container>
    <br />

    <Container className="friend">
      <p>Friend Request</p>
      <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{ width: "50%" }} />
      <br />
      <span>Jane Doe</span>
      <Row className="friend-row">
        <Col className="friend-col">
          <Button className="friend-btn-accept btn-green" title="Accept">
            <i className="fa fa-check"></i>
          </Button>
        </Col>
        <Col className="friend-col">
          <Button className="friend-btn-decline btn-red" title="Decline">
            <i className="fa fa-remove"></i>
          </Button>
        </Col>
      </Row>
    </Container>
    <br />

    <Container className="card round white center" style={{ padding: `16px` }}>
      <p>ADS</p>
    </Container>
    <br />

    <Container className="card round white center" style={{ padding: `32px` }}>
      <p><i className="fa fa-bug xxlarge"></i></p>
    </Container>
  </>
);

function IndexPage(props) {
  let { user } = props;

  return (
    <SocialLayout
      navbar={<TopNav {...{ user: user }} />}
      left={<LeftContent user={user} />}
      middle={<MiddleContent />}
      right={<RightContent />}
    />
  );
}

export default useAuth(IndexPage);


