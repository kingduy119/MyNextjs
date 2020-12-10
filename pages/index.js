import React from "react";
import useAuth from "../lib/useAuth"

import Topbar from "../components/index/Topbar";
import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
// APIS:
import { sendCreatePost, sendFillPosts, postUpdate, sendPostLike, deletePost } from "../lib/api/post";

// #3 Post CRRUD
class SocialContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.onUserLikePost = this.onUserLikePost.bind(this);
    this.onHandleEvent = this.onHandleEvent.bind(this);
  }
  /**
   * Handle Event
   */
  onUserLikePost = async (index, user, isLiked) => {
    let { posts } = this.state;

    let data = await sendPostLike(
      posts[index]._id,
      { user, action: isLiked ? 'unlike' : 'like' });

    if (data) {
      posts[index].likes = data.likes;
      this.setState({ posts });
    }
  }

  onHandleEvent = (name) => {
    if (name === 'post-like') {
      return (index, user, liked) => { alert(`${index} - ${user} - ${liked}`); }
    }
    else if (name === 'post-viewlikes') {
      return (likes) => { alert(JSON.stringify(likes)); }
    }
    else if (name === 'comment-send') {
      return (index) => { alert(`comment: ${index}`) }
    }
    else if (name === 'comment-like') {
      return (index) => { alert(`comment: ${index}`) }
    }
    else if (name === 'comment-viewlikes') {
      return (likes) => { alert(`comment: ${JSON.stringify(likes)}`) }
    }
  }

  /**
   * Lifecycle
   */
  componentDidMount = async () => {
    let data = await sendFillPosts();
    if (data) { this.setState({ posts: data.posts }); }
  }

  render = () => {
    let { posts } = this.state;
    return (
      <div className="pd-32" id="socialContent" style={{ marginTop: '90px' }} >
        {/* <!--- Create New Post ---> */}
        <CreatePost onCreate={() => alert("createPost")} />

        {/* <!--- Show Post ---> */}
        {posts && posts.map((post, index) =>
          <Post
            {...post}
            index={index}
            user={this.props.user}
            onPostLike={this.onHandleEvent('post-like')}
            onPostViewLikes={this.onHandleEvent('post-viewlikes')}
            onPostComment={this.onHandleEvent('comment-send')}
            onPostCommentLike={this.onHandleEvent('comment-like')}
            onPostCommentViewLikes={this.onHandleEvent('comment-viewlikes')}
          />
        )}

        <Post
          onPostLike={this.onHandleEvent('post-like')}
          onPostViewLikes={this.onHandleEvent('post-viewlikes')}
          onPostComment={this.onHandleEvent('comment-write')}
          onPostCommentLike={this.onHandleEvent('comment-like')}
          onPostCommentViewLikes={this.onHandleEvent('comment-viewlikes')}
        />
      </div>
    )
  }
}
SocialContent.defaultProps = { posts: [] }

function IndexPage(props) {
  return (
    <>
      <Topbar />
      {/* <Slidebar /> */}
      <SocialContent user={props.user} />
    </>
  );
}

// export default useAuth(IndexPage);
export default IndexPage;

