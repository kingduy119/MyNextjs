import React from "react";
import useAuth from "../lib/useAuth"
import SocialLayout from "../lib/layout/SocialLayout";
import { Container, Card, Button } from "../components/common";
import { TopNav } from "../components/Navigation";
import {
  Profile, Accordion, Interests, Alert,
  PostNewsFeel, PostShow, FriendRequest,
} from "../components/index";
import { createPost, findPosts, updatePost, deletePost } from "../lib/api/post";

function LeftContent(props) {
  let { user } = props;
  return (
    <>
      <Profile user={user} />
      <br />
      <Accordion />
      <br />
      <Interests />
      <br />
      <Alert />
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
    if (error) { return alert("Create Post Failed!"); }
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
    return (
      <Container className="row-padding">
        <PostNewsFeel onCreatePost={this.onCreatePost} />
        <br />
        <PostShow posts={this.state.posts} />
      </Container>
    );
  }
}

const RightContent = (props) => (
  <>
    <Card>
      <Container>
        <p>Upcoming Events:</p>
        <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: "100%" }} />
        <p><strong>Holiday</strong></p>
        <p>Friday 15:00</p>
        <p><Button className="news-feel-btn-info">Info</Button></p>
      </Container>
    </Card>
    <br />

    <FriendRequest />
    <br />

    <Card className="round center" style={{ padding: `16px` }}>
      <Container >
        <p>ADS</p>
      </Container>
    </Card>
    <br />

    {/* className="card round white center" */}
    <Card className="round center" style={{ padding: `32px` }}>
      <Container >
        <p><i className="fa fa-bug xxlarge"></i></p>
      </Container>
    </Card>
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


// export default useAuth(IndexPage);
export default IndexPage;

