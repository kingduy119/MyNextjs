import React from "react";
import useAuth from "../lib/useAuth"
import SocialLayout from "../lib/layout/SocialLayout";
import { Container, Row, Col, Card, Button, Badge } from "../components/common";
import { TopNav } from "../components/Navigation";
import { createPost, findPosts, updatePost, deletePost } from "../lib/api/post";

const tempAvatar =
  "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/c47.0.160.160a/p160x160/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=81vsEa2epdwAX9TWkbr&_nc_ht=scontent.fsgn2-4.fna&_nc_tp=27&oh=af8c1df0db8fcebed7208574c7672f99&oe=5FA230A4";

function LeftContent(props) {

  let { user } = props;

  let [showGroups, setShowGroups] = React.useState(false);
  let [showEvents, setShowEvents] = React.useState(false);
  let [showPhotos, setShowPhotos] = React.useState(false);

  return (
    <>
      {/* Profile */}
      <Card className="profile">
        <h4 classname="profile-username">{user ? user.displayName : "displayNmae"}</h4>
        <p className="center">
          <img
            className="profile-avatar"
            src={(user && user.avatarUrl) ? user.avatarUrl : tempAvatar}
            alt="avatarUrl"
          />
        </p>
        <hr />
        {/* {career && <p><i className="profile-icon fa fa-pencil fa-fw" />{career}</p>}
        {country && <p><i className="profile-icon fa fa-home fa-fw" />{ountry}</p>}
        {birthday && <p><i className="profile-icon fa fa-birthday-cake fa-fw" />{birthday}</p>} */}
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

/**
 * Middle Content:
 * @param {*} props 
 */
function CreatePost(props) {
  let [content, setContent] = React.useState("");

  function onPostNewFeel(e) {
    e.preventDefault();
    setContent("");
    return props.onCreatePost({ content });
  }
  return (
    <Container className="post">
      <h6 className="post-opacity">Social Media template by hd.css</h6>
      <input
        placeholder="News Feel"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> <br />
      <Button
        className="post-btn-post"
        onClick={onPostNewFeel}
      >
        <i className="fa fa-pencil" /> Post
      </Button>
    </Container>
  );
}

const Post = (props) => (
  <Container className="post">
    <img className="post-avatar" src={props.avatarUrl} />
    <span className="post-time">16 min</span>
    <h4>{props.displayName}</h4>
    <br />

    <hr className="post-hr" />
    <p>{props.content}</p>
    <Button className="post-btn-like">Like</Button>
    <Button className="post-btn-comment">Comment</Button>
    <Button
      className="btn-green"
      onClick={props.onUpdate}
    >Update</Button>
    <Button
      className="btn-red"
      onClick={props.onDelete}
    >Delete Post</Button>
  </Container>
)
Post.defaultProps = {
  avatarUrl: "",
  displayName: "",
  content: "",
  onUpdate: () => { },
  onDelete: () => { }
}

function ShowPosts(props) {
  let { posts } = props;
  if (!posts) return null;

  return (
    <>
      {posts.map((post) => (post &&
        <Post
          avatarUrl={post.postBy.avatarUrl || tempAvatar}
          displayName={post.postBy.displayName}
          content={post.content}
          onUpdate={(content) => updatePost({ id: post._id })}
          onDelete={() => props.onDeletePost(post._id)}
        />
      ))}
    </>
  );
}

class MiddleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.onDeletePost = this.onDeletePost.bind(this);
    this.onCreatePost = this.onCreatePost.bind(this);
  }

  async componentDidMount() {
    let data = await findPosts();
    if (data) this.setState({ posts: data.posts });
  }

  async onCreatePost(content) {
    let { error, post } = await createPost(content);
    if (error) { return alert(JSON.stringify(error)); }
    if (post) {
      this.setState((state) => ({ posts: [...state.posts, post] }));
    }
  }

  async onDeletePost(id) {
    let { error, post } = await deletePost({ id });
    if (error) { return alert(JSON.stringify(error)); }
    let posts = this.state.posts.map(item => { if (item && (item._id != post._id)) return item; });
    this.setState({ posts: posts });
  }

  render() {
    let posts = this.state.posts;
    return (
      <>
        <CreatePost
          onCreatePost={this.onCreatePost}
        />
        <br />
        <ShowPosts
          posts={posts}
          onDeletePost={this.onDeletePost}
        />
      </>
    );
  }
}

/**
 * Right Content
 * @param {*} props 
 */
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
  console.log(`User: ${JSON.stringify(user)}`);
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
// export default IndexPage;

